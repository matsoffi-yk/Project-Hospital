import { IsString, IsDate } from 'class-validator';
import { Moment } from "moment";

export class Graph {
    @IsDate()
    date: Moment;

    @IsString()
    totalCars: string;
}