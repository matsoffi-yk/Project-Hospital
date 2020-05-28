import { Controller, Get, Param } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService) { }

    @Get('/getData') //showData
    async getData() {
        return await this.dashboardService.getData();
    }
    @Get('/getData/:id') //showData Id
    async getCar(@Param("id") id:string) {
        return await this.dashboardService.getCar(+id);
    }

    @Get('/getDashboard') //show Dashboard
    async getDashboard() {
        return await this.dashboardService.getDashboard();
    }

    @Get('/getRealtime') //show Dashboard
    async getRealtime() {
        return await this.dashboardService.getRealtime();
    }
}
