import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VacanciesResume } from './feedback.model';

@Injectable()
export class FeedbackService {

    constructor(@InjectModel(VacanciesResume) private feedbackReprository: typeof VacanciesResume){}


    async create(dto: CreateFeedbackDto) {
        const role = await this.feedbackReprository.create(dto);
        return role;
    }

    async getAllResumeIdByVacancyId(id){
        const data = await this.feedbackReprository.findAll({
            where: {
              vacancyId: id,
            },
          })
        const resumeId = []
        for (const el of data){
          resumeId.push(el.resumeId)
        }
        return resumeId
    }
}
