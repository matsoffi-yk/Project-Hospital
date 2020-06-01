import { Moment } from "moment";

export class Car {
    id: number;
    carBrand: string;
    numberOfcars: string;
    dateTime: {
        date: Moment;
        time: Moment;
    }
    parkSpot: string;
    parkArea: string;
}

export class Dashboard {
    newDate: Moment
    totalCars: number;
    carParking: number;
    deliveryParking: number;
    carVIP: number;
}

export class Realtime {
    newDate: Moment;
    id: number;
    imgCar:string;
    numberOfcars: string;
    time: Moment;
}

export class Graph {
    date: string;
    totalCars: number;
}


