import {Table, Column, PrimaryGeneratedColumn} from "ionic-orm";

@Table()
export class TypeArticle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    description: string;

    @Column()
    image: string;
    
    @Column()
    prixMin: number;

    @Column()
    prixMax: number;
}