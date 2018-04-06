import {Table, Column, PrimaryGeneratedColumn, ManyToOne} from "ionic-orm";
import {RetraitArticle} from "../entities/retrait.article";
import {DepotArticleDetail} from "../entities/depot.article.detail";

@Table()
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