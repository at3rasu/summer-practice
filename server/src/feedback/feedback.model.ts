import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Resume } from "src/resume/resume.model";
import { Vacancy } from "src/vacancies/vacancies.model";



@Table({tableName: 'vacancies_resume', createdAt: false, updatedAt: false})
export class VacanciesResume extends Model<VacanciesResume>{ 
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => Vacancy)
    @Column({type: DataType.INTEGER})
    vacancyId: number
    
    @ForeignKey(() => Resume)
    @Column({type: DataType.INTEGER})
    resumeId: number
}