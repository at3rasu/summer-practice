import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';
import { UploadFilesService } from 'src/upload-files/upload-files.service';
import { UsersCompanyService } from 'src/users-company/users-company.service';
import { AuthService } from 'src/auth/auth.service';
import { FileType, FilesService } from 'src/files/files.service';
import { UsersService } from 'src/users/users.service';
import { FeedbackService } from 'src/feedback/feedback.service';
import { CreateFeedbackDto } from 'src/feedback/dto/create-feedback.dto';
import { ResumeService } from 'src/resume/resume.service';

@Injectable()
export class VacanciesService {
    constructor(@InjectModel(Vacancy) private vacancyRepository: typeof Vacancy,
                private jwtService: JwtService,
                // private uploadFilesService: UploadFilesService,
                private userCompanyService: UsersCompanyService,
                // private filesService: FilesService,
                // private authService: AuthService
                private userService: UsersService,
                private feedbackService: FeedbackService,
                private resumeService: ResumeService
                ){}

    async createVacancy(vacancyDto: CreateVacancyDto, 
        // image,
        req
        ){
        // const fileName = await this.uploadFilesService.createFile(image)
        // const fileName = uuid.v4()
        // const fileName = await this.filesService.createFile(FileType.IMAGE, image)
        const user = await this.userCompanyService.getUserCompanyByRequest(req)
        vacancyDto.userCompanyId = user.id
        const vacancy = await this.vacancyRepository.create({...vacancyDto,
            // image: fileName
        });
        return this.generateToken(vacancy);
    }

    private async generateToken(vacancy: Vacancy){
        const payload = {id: vacancy.id, email: vacancy.email, name : vacancy.nameVacancy, author: vacancy.author}
        return{
            token: this.jwtService.sign(payload)
        }
    }

    async getAllVacancies(){
        const vacancies = await this.vacancyRepository.findAll({include: {all:true}});
        return vacancies;
    }

    async deleteVacancy(id){
        
        return await this.vacancyRepository.destroy({ where: { id: id } });
    }

    async updateVacancy(id, updateVacancyDto){
        const vacancy = await this.vacancyRepository.update(updateVacancyDto, {where: {id}, returning: true})
        return vacancy
    }

    async insertResume(id, req){
        const vacancy = await this.vacancyRepository.findByPk(id)
        const resume = await this.userService.getResumeByUser(req)
        const feedback = await this.feedbackService.create(new CreateFeedbackDto(vacancy.id, resume[0].id))
        return feedback
    }

    async getAllResumeByVacancyId(id){
        const resumeId = await this.feedbackService.getAllResumeIdByVacancyId(id);
        const resume = []
        for (const id of resumeId){
            resume.push(await this.resumeService.getResumeById(id))
        }
        return resume
    }
}
