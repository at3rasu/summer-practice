import {makeAutoObservable} from "mobx"
import api from "../api/create-api"


export default class FeedbackStore{
    
    constructor(){
        makeAutoObservable(this)
        this.checkLocalStorage()
    }

    async insertResumeByVacancyId(vacancyId){
        try{
            const response = await api.post(`/vacancies/insert_resume/${vacancyId}`)
            
            return response
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }

    async getAllResumeByVacancyId(vacancyId){
        try{
            const response = await api.get(`/vacancies/get_resume/${vacancyId}`)
            
            return response
        }catch(e){
            console.log(e.response?.data?.message)
        }
    }
}