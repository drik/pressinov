import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Client} from "../entities/client";

@Entity()
export class DepotArticle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateDepot: Date;

    @ManyToOne(type => Client)
    client: Client;

    @Column()
    datePrevueRetrait: Date;
}