import { Injectable } from '@nestjs/common';

@Injectable()
export class ChartsService {

    async getChartCity(){
        return {
            labels: ['Екатеринбург', 'Курган', 'Нижний Тагил', 'Верхняя пышма', 'Другие'],
            datasets: [
            {
                label: 'Студентов',
                data: [48, 15, 28, 23, 10],
            }
            ]
        };
    }

    async getChartRegister(){
        return {
            labels: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл"],

            datasets: [
            {
                label: 'Студентов',
                data: [300, 300, 400, 545, 100, 535, 213],
                borderColor: "#F27E80",
                backgroundColor: ["#F27E80", "#E05B5B"],
                fill: true
            },
            ]
        };
    }

    async getChartScholarship(){
        return{
            labels: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл"],
            datasets: [{
                label: 'Студентов',
                data: [300, 300, 400, 545, 100, 535, 213],
                borderColor: "#8A75E3",
                backgroundColor: ["#A696EC", "#8A75E3"],
            },]
        };
    }

    async getChartStudent(){
        return{
            labels: [ "Программная инженения", "Оптотехника", "Журналистика", "Медицина", "Биохимия"],
            datasets: [
                {
                label: 'Студентов',
                data: [798, 725, 615, 421, 365],
                borderColor: "#F27E80",
                backgroundColor: ["#F27E80", "#E05B5B"]
                },
            ]
        };
    }
}
