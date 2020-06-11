import { Repository, EntityRepository } from "typeorm"
import { NotFoundException } from '@nestjs/common';
import { Cars } from "./dashboard.entity";
import { Dashboard, Graph, Realtime } from './dto/data-dashboard.dto'
import * as moment from 'moment';
import 'moment-timezone'

@EntityRepository(Cars)
export class DashboardRepository extends Repository<Cars> {

    async getCars(): Promise<Cars[]> {
        try {
            const cars = await this.createQueryBuilder()
                .getMany();
                
            return cars
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }
    async getDashboard(): Promise<any> {
        try {
            const carData = await this.createQueryBuilder()
                .getMany();

            const newDash = new Dashboard()
            newDash.newDate = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
            carData.forEach((car) => {
                const { date } = car
                const cardate = moment(date)

                if (cardate.format("DD-MM-YYYY") === newDash.newDate.format("DD-MM-YYYY")) {
                    newDash.totalCars += 1
                    if (car.parkArea === '01') {
                        newDash.carParking += 1
                    }
                    else if (car.parkArea === '02') {
                        newDash.deliveryParking += 1
                    }
                    else if (car.parkArea === '03') {
                        newDash.carVIP += 1
                    }
                }
            })
            //Realtime
            const nowDay = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
            carData.forEach((car) => {
                const { date } = car
                const cardate = moment(date)

                if (cardate.format("DD-MM-YYYY") === nowDay.format("DD-MM-YYYY")) {
                    const newRealtime = new Realtime();
                    newRealtime.newDate = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
                    newRealtime.id = car.id
                    newRealtime.numberOfcars = car.numberOfcars
                    newRealtime.time = cardate

                    if (car.parkArea === "") {
                        newRealtime.imgCar = "https://sv1.picz.in.th/images/2020/06/01/qU5wnn.png"
                    }
                    else {
                        newRealtime.imgCar = "https://sv1.picz.in.th/images/2020/06/01/qU55Qb.png"
                    }
                    newDash.realtime.push(newRealtime)
                }
            })
            //Graph
            const moments = carData.map(d => moment(d.date))
            const lastDay = moment.min(moments)
            while (lastDay.format("DD-MM-YYYY") <= nowDay.format("DD-MM-YYYY")) {
                const newGraph = new Graph()
                newGraph.date = moment(`${lastDay}-12-2019`, "DD-MM-YYYY")
                    .tz('Asia/Bangkok')
                    .format("DD-MM-YYYY")
                newGraph.totalCars = 0
                carData.forEach((car) => {
                    const { date } = car
                    const cardate = moment(date)

                    if (cardate.format("DD-MM-YYYY") === newGraph.date) {
                        newGraph.totalCars += 1
                    }
                })
                newDash.graph.push(newGraph)
                // console.log(lastDay)
                lastDay.add(1, 'day')
            }
            return { success: true, dashboard: newDash };
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }
}