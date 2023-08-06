import { Module } from '@nestjs/common';
import { ChartsService } from './charts.service';

@Module({
  providers: [ChartsService]
})
export class ChartsModule {}
