import { Injectable, NotFoundException } from '@nestjs/common';
import { Dashboard, Car, Realtime } from './dashboard.entity'
import * as moment from 'moment';
import 'moment-timezone'

@Injectable()
export class DashboardService {
    
    realtime: Realtime[] = []
    arrDashboar: Dashboard = {
        "newDate": "",
        "totalCars": 0,
        "carParking": 0,
        "deliveryParking": 0,
        "carVIP": 0
    }

    carData: Car[] = [
        {
            "id": 1,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('24-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:00:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 2,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('25-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:00:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 3,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('25-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:01:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0011",
            "parkArea": "",
        },
        {
            "id": 4,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('26-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:00:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 5,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:02:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 6,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:03:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 7,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:00:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0011",
            "parkArea": "01",
        },
        {
            "id": 8,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:01:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 9,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:05:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 10,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:04:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 11,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('24-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:01:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 12,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('24-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:02:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 13,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('25-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:02:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 14,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('25-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:03:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 15,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('25-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:04:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 16,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('25-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:05:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 17,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('26-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:01:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 18,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:06:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 19,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:07:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0021",
            "parkArea": "02",
        },
        {
            "id": 20,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:08:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 21,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('24-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:03:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 22,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('24-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:04:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 23,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('25-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:06:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 24,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('26-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:02:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 25,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:09:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 26,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:10:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "A0031",
            "parkArea": "03",
        },
        {
            "id": 27,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:11:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 28,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:12:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 29,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:13:00', "hh:mm:ss").format("hh:mm:ss"),
            "parkSpot": "",
            "parkArea": "",
        },
        {
            "id": 30,
            "carBrand": "BMW",
            "numberOfcars": "กด 1938 กรุงเทพ",
            "date": moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY"),
            "time": moment('09:14:00', "hh:mm:ss").format("hh:mm:ss"),
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
                this.arrDashboar.newDate = moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY")
                this.arrDashboar.totalCars = 0
                this.arrDashboar.carParking = 0
                this.arrDashboar.deliveryParking = 0
                this.arrDashboar.carVIP = 0

                this.carData.forEach((car) => {
                    if (car.date === this.arrDashboar.newDate) {
                        this.arrDashboar.totalCars += 1
                        console.log(`id:${car.id} , ${car.date} / ${this.arrDashboar.newDate}`)
                        if (car.parkArea === '01') {
                            this.arrDashboar.carParking += 1
                        }
                        else if (car.parkArea === '02') {
                            this.arrDashboar.deliveryParking += 1
                        }
                        else if (car.parkArea === '03') {
                            this.arrDashboar.carVIP += 1
                        }
                    }
                })
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
                if (this.realtime.length < this.arrDashboar.totalCars) {
                    this.carData.forEach((car) => {
                        if (car.date === moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY")) {
                            const newRealtime = new Realtime();
                            newRealtime.newDate = moment('27-12-2019', "DD-MM-YYYY").format("ddd DD/MM/YYYY")
                            newRealtime.id = car.id
                            newRealtime.numberOfcars = car.numberOfcars
                            newRealtime.time = car.time
                            this.realtime.push(newRealtime)
                        }
                    })
                }

                this.realtime.sort((a, b) => ('' + a.time).localeCompare(b.time))
                console.log(this.arrDashboar.totalCars )
                return this.realtime;
            }
        } catch (error) {
            throw new NotFoundException({
                success: false,
                error: error.message
            });
        }
    }


}
