import { Repository, EntityRepository } from "typeorm"
import { NotFoundException } from '@nestjs/common';
import { Cars } from "./dashboard.entity";
import { Dashboard, Graph, Realtime } from './dto/data-dashboard.dto'
import * as moment from 'moment';
import 'moment-timezone'

@EntityRepository(Cars)
export class DashboardRepository extends Repository<Cars> {

    // async getDashboard(): Promise<Cars[]> {
        // try {
        //     const carData = await this.createQueryBuilder('cars')
        //         .getMany();
        //     const newDash = new Dashboard()
        //     newDash.newDate = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
        //     carData.forEach((car) => {
        //         if (moment(car.dateTime.date.format()).isSame(newDash.newDate.format())) {
        //             newDash.totalCars += 1
        //             if (car.parkArea === '01') {
        //                 newDash.carParking += 1
        //             }
        //             else if (car.parkArea === '02') {
        //                 newDash.deliveryParking += 1
        //             }
        //             else if (car.parkArea === '03') {
        //                 newDash.carVIP += 1
        //             }
        //         }
        //     })
        //     //Realtime
        //     const nowDay = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
        //     carData.forEach((car) => {
        //         if (moment(car.dateTime.date.format()).isSame(nowDay.format())) {
        //             const newRealtime = new Realtime();
        //             newRealtime.newDate = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
        //             newRealtime.id = car.id
        //             newRealtime.numberOfcars = car.numberOfcars
        //             newRealtime.time = car.dateTime.time

        //             if (car.parkArea === "") {
        //                 newRealtime.imgCar = "https://sv1.picz.in.th/images/2020/06/01/qU5wnn.png"
        //             }
        //             else {
        //                 newRealtime.imgCar = "https://sv1.picz.in.th/images/2020/06/01/qU55Qb.png"
        //             }
        //             newDash.realtime.push(newRealtime)
        //         }
        //     })
        //     //Graph
        //     const moments = carData.map(d => moment(d.dateTime.date))
        //     const lastDay = moment.min(moments)
        //     const diffDay = moment(nowDay)
        //         .diff(lastDay, 'day')
        //     // console.log(moments)
        //     // console.log(nowDay)
        //     // console.log(diffDay)
        //     let i = 0;
        //     while (i <= diffDay) {
        //         const newGraph = new Graph()
        //         newGraph.date = moment(`${lastDay}-12-2019`, "DD-MM-YYYY").tz('Asia/Bangkok').format()
        //         newGraph.totalCars = 0

        //         carData.forEach((car) => {
        //             if (moment(car.dateTime.date.format()).isSame(newGraph.date)) {
        //                 newGraph.totalCars += 1
        //             }
        //         })
        //         newDash.graph.push(newGraph)
        //         lastDay.add(1, 'd')
        //         i++
        //     }
        //     return { success: true, dashboard: newDash };
        // } catch (error) {
        //     throw new NotFoundException({
        //         success: false,
        //         error: error.message
        //     });
        // }
    // }
}