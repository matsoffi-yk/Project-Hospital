import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService) { }

    @Get('/getData') //showData
    async getData(@Res() res) {
        const data = await this.dashboardService.getData()
        return res.status(HttpStatus.OK).json(data);
        // return await this.dashboardService.getData();
    }

    @Get('/getData/:id') //showData Id
    async getCar(@Param("id") id: string,@Res() res) {
        const Car = await this.dashboardService.getCar(+id);
        return res.status(HttpStatus.OK).json(Car);
    }

    @Get('/getDashboard') //show Dashboard
    async getDashboard(@Res() res) {
        const Dashboard = await this.dashboardService.getDashboard();
        return await res.status(HttpStatus.OK).json(Dashboard);
    }

    @Get('/getRealtime') //show Dashboard
    async getRealtime(@Res() res) {
        const realtime = await this.dashboardService.getRealtime()
        return res.status(HttpStatus.OK).json(realtime);
    }
}
