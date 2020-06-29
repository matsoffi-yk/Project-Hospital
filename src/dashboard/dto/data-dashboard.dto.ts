import { IsString, IsDate } from 'class-validator';
import { Moment } from "moment";
import { Realtime } from './data-realtime.dto'
import { Graph } from './data-graph.dto'


export class Dashboard {
    @IsDate()
    newDate: Moment;

    @IsString()
    totalCars: string;

    @IsString()
    carParking: string;

    @IsString()
    deliveryParking: string;

    @IsString()
    carVIP: string;

    realtime: Realtime[];

    graph: Graph[];

    constructor() {
        this.realtime = [new Realtime()];
        this.graph = [new Graph()];
    }
}


