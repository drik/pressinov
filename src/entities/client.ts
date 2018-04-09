import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";

import {DepotArticle} from "../entities/depot.article";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    mobilePhone: string;

    @Column()
    address: string;
    
    @OneToMany(type => DepotArticle, depotArticle => depotArticle.client) 
    depotsArticles: DepotArticle[];
}