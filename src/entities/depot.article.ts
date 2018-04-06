import {Table, Column, PrimaryGeneratedColumn, ManyToOne} from "ionic-orm";
import {Client} from "../entities/client";

@Table()
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