import {Table, Column, PrimaryGeneratedColumn, ManyToOne} from "ionic-orm";
import {DepotArticle} from "../entities/depot.article";
import {TypeArticle} from "../entities/type.article";

@Table()
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