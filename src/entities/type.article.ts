import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
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