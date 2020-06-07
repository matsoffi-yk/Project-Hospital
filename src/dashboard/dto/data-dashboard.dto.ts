import { Moment } from "moment";

export class Dashboard {
    newDate: Moment;
    totalCars: number;
    carParking: number;
    deliveryParking: number;
    carVIP: number;
    realtime: {
        newDate: Moment;
        id: number;
        imgCar: string;
        numberOfcars: string;
        time: Moment;
    }
    graph: {
        date: string;
        totalCars: number;
    }

}
export class CarDashboard {
    newDate: Moment
    totalCars: number;
    carParking: number;
    deliveryParking: number;
    carVIP: number;
}

export class Realtime {
    newDate: Moment;
    id: number;
    imgCar: string;
    numberOfcars: string;
    time: Moment;
}

export class Graph {
    date: string;
    totalCars: number;
}
