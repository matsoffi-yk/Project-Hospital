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



