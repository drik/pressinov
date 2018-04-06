import {Table, Column, PrimaryGeneratedColumn, ManyToOne} from "ionic-orm";
import {DepotArticle} from "../entities/depot.article";

@Table()
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