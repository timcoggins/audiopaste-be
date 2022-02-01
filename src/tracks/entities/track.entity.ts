import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Comments} from "./comments.entity";

@Entity()
export class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    file: string;

    @Column()
    notes: string;

    @Column()
    token: string;

    @Column()
    password: string;

    @Column()
    created_at: string;

    @OneToMany(() => Comments, comments => comments.track)
    comments: Comments[];

}