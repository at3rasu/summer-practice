export class CreateFeedbackDto{
    readonly vacancyId: number;
    
    readonly resumeId: number;

    constructor(vacancyId, resumeId){
        this.vacancyId = vacancyId
        this.resumeId = resumeId
    }
}