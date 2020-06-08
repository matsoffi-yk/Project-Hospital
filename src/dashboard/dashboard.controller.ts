import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService) { }
    @Get('/getData') //showData
    async getData() {
        return await this.dashboardService.getData()
    }

    @Get('/getData/:id') //showData Id
    async getCar(@Param("id", ParseIntPipe) id: number, ) {
        return await this.dashboardService.getCar(id);
    }

    @Get('/dashboard') //show Dashboard
    async getDashboard() {
        return await this.dashboardService.getDashboard();
    }
}
