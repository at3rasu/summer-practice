import { Controller, Get } from '@nestjs/common';
import { ChartsService } from './charts.service';

@Controller('charts')
export class ChartsController {

    constructor(private chartsService: ChartsService){}

    @Get('/chart-city')
    getChartCity(){
        return this.chartsService.getChartCity();
    }

    @Get('/chart-register')
    getChartRegister(){
        return this.chartsService.getChartRegister();
    }

}
