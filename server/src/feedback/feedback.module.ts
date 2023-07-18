import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vacancy } from 'src/vacancies/vacancies.model';
import { Resume } from 'src/resume/resume.model';
import { VacanciesResume } from './feedback.model';

@Module({
  providers: [FeedbackService],
  imports: [
    SequelizeModule.forFeature([Vacancy, Resume, VacanciesResume])
  ],
  exports: [
    FeedbackService
  ]
})
export class FeedbackModule {}
