import { Injectable } from '@nestjs/common';
import { Cars } from './dashboard.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { DashboardRepository } from "./dashboard.repository";

@Injectable()
export class DashboardService {
    constructor(
        @InjectRepository(DashboardRepository) private dashrepository: DashboardRepository
    ) { }

    // carData: Car[] = [ //แอททิบิว
    //     {
    //         "id": 1,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:00:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0011",
    //         "parkArea": "01",
    //     },
    //     {
    //         "id": 2,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:00:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0011",
    //         "parkArea": "01",
    //     },
    //     {
    //         "id": 3,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:01:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0011",
    //         "parkArea": "",
    //     },
    //     {
    //         "id": 4,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('26-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:00:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0011",
    //         "parkArea": "01",
    //     },
    //     {
    //         "id": 5,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:02:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0011",
    //         "parkArea": "01",
    //     },
    //     {
    //         "id": 6,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:03:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0011",
    //         "parkArea": "01",
    //     },
    //     {
    //         "id": 7,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:00:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0011",
    //         "parkArea": "01",
    //     },
    //     {
    //         "id": 8,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:01:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "",
    //         "parkArea": "",
    //     },
    //     {
    //         "id": 9,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:05:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "",
    //         "parkArea": "",
    //     },
    //     {
    //         "id": 10,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:04:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "",
    //         "parkArea": "",
    //     },
    //     {
    //         "id": 11,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:01:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 12,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:02:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 13,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:02:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 14,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:03:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 15,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:04:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 16,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:05:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 17,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('26-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:01:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 18,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:06:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 19,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:07:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0021",
    //         "parkArea": "02",
    //     },
    //     {
    //         "id": 20,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:08:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "",
    //         "parkArea": "",
    //     },
    //     {
    //         "id": 21,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:03:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0031",
    //         "parkArea": "03",
    //     },
    //     {
    //         "id": 22,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('24-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:04:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0031",
    //         "parkArea": "03",
    //     },
    //     {
    //         "id": 23,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('25-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:06:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0031",
    //         "parkArea": "03",
    //     },
    //     {
    //         "id": 24,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('26-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:02:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0031",
    //         "parkArea": "03",
    //     },
    //     {
    //         "id": 25,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:09:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0031",
    //         "parkArea": "03",
    //     },
    //     {
    //         "id": 26,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:10:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "A0031",
    //         "parkArea": "03",
    //     },
    //     {
    //         "id": 27,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:11:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "",
    //         "parkArea": "",
    //     },
    //     {
    //         "id": 28,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:12:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "",
    //         "parkArea": "",
    //     },
    //     {
    //         "id": 29,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:13:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "",
    //         "parkArea": "",
    //     },
    //     {
    //         "id": 30,
    //         "carBrand": "BMW",
    //         "numberOfcars": "กด 1938 กรุงเทพ",
    //         "dateTime": {
    //             "date": moment('27-12-2019', "DD-MM-YYYY").tz('Asia/Bangkok'),
    //             "time": moment('09:14:00', "hh:mm:ss")
    //         },
    //         "parkSpot": "",
    //         "parkArea": "",
    //     },
    // ]

    async getDashboard(): Promise<any> {
        // return await this.dashrepository.getDashboard()
    }
}
