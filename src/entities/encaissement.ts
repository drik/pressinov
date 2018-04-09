import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {DepotArticle} from "../entities/depot.article";
import {TypeArticle} from "../entities/type.article";

@Entity()
export class Encaissement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateEncaissement: Date;
    
    @ManyToOne(type => DepotArticle)
    depotArticle: DepotArticle;

    @Column()
    notesDetails: string;

    @Column()
    montant: number;
}