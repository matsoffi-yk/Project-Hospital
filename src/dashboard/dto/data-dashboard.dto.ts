import { Moment } from "moment";
import * as moment from "moment";

export class Realtime {
    newDate: Moment;
    id: number;
    imgCar: string;
    numberOfcars: string;
    time: Moment;

    constructor() {
        this.newDate = moment();
        this.id = 0;
        this.imgCar = '';
        this.numberOfcars = '';
        this.time = moment();
    }
}

export class Graph {
    date: string;
    totalCars: number;

    constructor() {
        this.date = '';
        this.totalCars = 0;
    }
}

export class Dashboard {
    newDate: Moment;
    totalCars: number;
    carParking: number;
    deliveryParking: number;
    carVIP: number;
    realtime: Realtime[];
    graph: Graph[];

    constructor() {
        this.newDate = moment();
        this.totalCars = 0;
        this.carParking = 0;
        this.deliveryParking = 0;
        this.carVIP = 0;

        this.realtime = [new Realtime()];
        this.graph = [new Graph()];
    }
}


