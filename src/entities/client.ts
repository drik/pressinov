import {Table, Column, PrimaryGeneratedColumn} from "ionic-orm";

@Table()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    mobilePhone: string;

    @Column()
    address: string;
}