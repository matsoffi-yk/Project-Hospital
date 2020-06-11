import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Cars extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() carBrand: string;

    @Column() numberOfcars: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }) date: Date; //default เวลาล่าสุดถ้า user ไม่ใส่มา

    @Column() parkSpot: string;

    @Column() parkArea: string;
}



