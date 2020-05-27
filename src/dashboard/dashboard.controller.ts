import { Controller, Get, Post, Body, Delete, Param, Put, Patch, Res } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService) { }

    @Get('') //showData
    async getDashboard() {
        return await this.dashboardService.getDashboard();
    }

    @Get('/test/:id') //showData at Id
    async getIdDashboard(@Param("id") id:number) {
        return await this.dashboardService.getIdDashboard(+id);
    }

    @Post('/test') //addData
    async postDashboard(@Body("numberOfcars") numberOfcars: string) {
        return await this.dashboardService.postDashboard(numberOfcars);
    }

    @Delete("/test/:id") //deleteData
    async deleteDashboard(@Param("id") id: number) {
        // if (typeof id == 'number') {
        //     console.log(`${id} is a number`)
        // }
        // if (typeof +id == 'number') {
        //     console.log(`${+id} + is a number`)
        // }
        return await this.dashboardService.deleteDashboard(+id);
    }

    @Put("/test/:id")
    async putDashboard(@Param("id") id: number, @Body("numberOfcars") numberOfcars: string) {
        return await this.dashboardService.putDashboard(+id, numberOfcars);
    }

    @Patch("/test/:id")
    async patchDashboard(@Param("id") id: number, @Body("numberOfcars") numberOfcars: string){
        return await this.dashboardService.patchDashboard(+id, numberOfcars);
    }
}
