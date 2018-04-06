import {Table, Column, PrimaryGeneratedColumn, ManyToOne} from "ionic-orm";
import {DepotArticle} from "../entities/depot.article";
import {TypeArticle} from "../entities/type.article";

@Table()
export class Encaissement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column
    dateEncaissement: Date;
    
    @ManyToOne(type => DepotArticle)
    depotArticle: DepotArticle;

    @Column()
    notesDetails: string;

    @Column()
    montant: number;
}