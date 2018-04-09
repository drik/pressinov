import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {DepotArticle} from "../entities/depot.article";
import {TypeArticle} from "../entities/type.article";

@Entity()
export class DepotArticleDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => TypeArticle)
    typeArticle: TypeArticle;
    
    @ManyToOne(type => DepotArticle)
    depotArticle: DepotArticle;

    @Column()
    notesDetails: string;

    @Column()
    photo: string;

    @Column()
    prix: number;
}