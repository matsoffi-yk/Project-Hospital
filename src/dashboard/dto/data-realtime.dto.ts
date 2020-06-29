import { IsNumber, IsDate, IsString } from 'class-validator';
import { Moment } from "moment";

export class Realtime {
    @IsNumber()
    id: number;

    @IsString()
    imgCar: string;

    @IsString()
    numberOfcars: string;

    @IsDate()
    time: Moment;
}