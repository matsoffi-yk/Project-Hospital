import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService) { }

    @Get('/getcars') //show Dashboard
    async getCars() {
        return await this.dashboardService.getCars();
    }

    @Get('') //show Dashboard
    async getDashboard() {
        return await this.dashboardService.getDashboard();
    }

    // @Get('')
    // async getExam(@Query('province') province: string) {
    //     return await this.dashboardService.getExam(province)
    // }
}
