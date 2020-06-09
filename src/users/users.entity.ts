import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() username:string;

    @Column() password:string;

    @Column() name: string;

    @Column() surname: string;

    @Column() nickname: string;

    @Column() age: string;

    @Column() phoneNumber: string;

    @Column() line: string;

    @Column() email: string;

    @Column() village: string;

    @Column() subDistrict: string;

    @Column() district: string;

    @Column() province: string;

    @Column() postalCode: string;

    @Column() country: string;
}