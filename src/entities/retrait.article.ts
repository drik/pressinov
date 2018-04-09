import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {DepotArticle} from "../entities/depot.article";

@Entity()
export class RetraitArticle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateRetrait: Date;

    @ManyToOne(type => DepotArticle)
    depotArticle: DepotArticle;

    @Column()
    notesDetails: string;
}