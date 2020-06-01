import { Injectable, NotFoundException } from '@nestjs/common';
import { Dashboard, Car, Realtime, Graph } from './dashboard.entity'
import * as moment from 'moment';
import 'moment-timezone'

@Injectable()
export class DashboardService {
    graph: Graph[] = []
    realtime: Realtime[] = []
    arrDashboar: Dashboard[] = []

    carData: Car[] = [
        {
            "id": 1,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:00:00', "hh:mm:ss")
            },
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 2,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:00:00', "hh:mm:ss")
            },
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 3,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:01:00', "hh:mm:ss")
            },
            "parkSpot": "A0011",
            "parkArea": "",
        },
        {
            "id": 4,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('26-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:00:00', "hh:mm:ss")
            },
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 5,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:02:00', "hh:mm:ss")
            },
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 6,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:03:00', "hh:mm:ss")
            },
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 7,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:00:00', "hh:mm:ss")
            },
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 8,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:01:00', "hh:mm:ss")
            },
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 9,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:05:00', "hh:mm:ss")
            },
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 10,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:04:00', "hh:mm:ss")
            },
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 11,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:01:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 12,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:02:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 13,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:02:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 14,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:03:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 15,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:04:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 16,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:05:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 17,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('26-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:01:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 18,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:06:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 19,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:07:00', "hh:mm:ss")
            },
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 20,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:08:00', "hh:mm:ss")
            },
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 21,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:03:00', "hh:mm:ss")
            },
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 22,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:04:00', "hh:mm:ss")
            },
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 23,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:06:00', "hh:mm:ss")
            },
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 24,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('26-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:02:00', "hh:mm:ss")
            },
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 25,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:09:00', "hh:mm:ss")
            },
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 26,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:10:00', "hh:mm:ss")
            },
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 27,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:11:00', "hh:mm:ss")
            },
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 28,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:12:00', "hh:mm:ss")
            },
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 29,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:13:00', "hh:mm:ss")
            },
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 30,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "dateTime": {
                "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
                "time": moment('09:14:00', "hh:mm:ss")
            },
            "parkSpot": "",
            "parkArea": "",
        },
    ]

    async getData(): Promise<any> {
        try {
            if (!this.carData) {
                throw new Error('Not found.');
            }
            else {
                return this.carData;
            }
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async getCar(id: number): Promise<any> {
        try {
            if (!this.carData) {
                throw new Error('Not found.');
            }
            else {
                const index = this.carData.findIndex(data => data.id === id)
                return this.carData[index];
            }
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async getDashboard(): Promise<any> {
        try {
            if (!this.carData) {
                throw new Error('Not found.');
            }
            else {

                if (this.arrDashboar.length < 1) {
                    const newDash = new Dashboard()
                    newDash.newDate = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
                    newDash.totalCars = 0
                    newDash.carParking = 0
                    newDash.deliveryParking = 0
                    newDash.carVIP = 0

                    this.carData.forEach((car) => {
                        if (moment(car.dateTime.date.format()).isSame(newDash.newDate.format())) {
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
                    this.arrDashboar.push(newDash)
                }
                // console.log(this.arrDashboar)
                return this.arrDashboar;
            }
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async getRealtime(): Promise<any> {
        try {
            if (!this.carData) {
                throw new Error('Not found.');
            }
            else {
                if (this.realtime.length < this.arrDashboar[0].totalCars) {
                    const nowDay = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
                    this.carData.forEach((car) => {
                        if (moment(car.dateTime.date.format()).isSame(nowDay.format())) {
                            const newRealtime = new Realtime();
                            newRealtime.newDate = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
                            newRealtime.id = car.id
                            newRealtime.numberOfcars = car.numberOfcars
                            newRealtime.time = car.dateTime.time

                            if(car.parkArea === ""){
                                newRealtime.imgCar = "https://sv1.picz.in.th/images/2020/06/01/qU5wnn.png"
                            }
                            else {
                                newRealtime.imgCar = "https://sv1.picz.in.th/images/2020/06/01/qU55Qb.png"
                            }


                            this.realtime.push(newRealtime)
                        }
                    })
                }
                return this.realtime;
            }
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }

    async getGraph(): Promise<any> {
        try {
            if (!this.carData) {
                throw new Error('Not found.');
            }
            else {
                const moments = this.carData.map(d => moment(d.dateTime.date))
                const nowDay = moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok')
                const lastDay = moment.min(moments)
                const diffDay = moment(nowDay)
                    .diff(lastDay, 'day')
                // console.log(lastDay)
                // console.log(nowDay)
                // console.log(diffDay)

                if (this.graph.length < diffDay) {
                    let i = 0;
                    while (i <= diffDay) {
                        const newGraph = new Graph()
                        newGraph.date = moment(`${lastDay}-12-2019`, "DD-MM-YYYY").tz('Asia/Bangkok').format()
                        newGraph.totalCars = 0

                        this.carData.forEach((car) => {
                            if (moment(car.dateTime.date.format()).isSame(newGraph.date)) {
                                newGraph.totalCars += 1
                            }
                        })
                        this.graph.push(newGraph)
                        lastDay.add(1, 'd')
                        i++
                    }
                }
                return this.graph;
            }
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }
}
