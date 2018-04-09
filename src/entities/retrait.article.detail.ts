import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {RetraitArticle} from "../entities/retrait.article";
import {DepotArticleDetail} from "../entities/depot.article.detail";

@Entity()
export class RetraitArticleDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => DepotArticleDetail)
    depotArticleDetail: DepotArticleDetail;
    
    @ManyToOne(type => RetraitArticle)
    retraitArticle: RetraitArticle;

    @Column()
    notesDetails: string;

}