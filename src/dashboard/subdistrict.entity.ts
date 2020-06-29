import { BaseEntity, Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Subdistrict extends BaseEntity {
    @PrimaryColumn() id: number;

    @Column() name_th: string;

    @Column() name_en: string;

    @Column() postcode: number;

    @Column() district_id: number;
}