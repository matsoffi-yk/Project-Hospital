import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService) { }
    //แก้ไข
    @Get('/getData') //showData
    async getData() {
        return await this.dashboardService.getData()
    }

    // @Get('/getData/:id') //showData Id
    // async getCar(@Param("id", ParseIntPipe) id: number, ) {
    //     return await this.dashboardService.getCar(id);
    // }

    @Get('/getDashboard') //show Dashboard
    async getDashboard() {
        return await this.dashboardService.getDashboard();
    }

    // @Get('/getRealtime') //show realtime
    // async getRealtime() {
    //     return await this.dashboardService.getRealtime()
    // }

    // @Get('/getGraph') //show realtime
    // async getGraph() {
    //     return await this.dashboardService.getGraph()
    // }
    @Get('/data') //showData
    async data() {
        return await this.dashboardService.data()
    }
}
