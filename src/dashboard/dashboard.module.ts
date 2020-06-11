import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { DashboardRepository } from "./dashboard.repository";
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([DashboardRepository])],
  providers: [DashboardService],
  controllers: [DashboardController]
})
export class DashboardModule { }
