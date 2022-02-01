import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Track } from "./track.entity";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    comment: string;

    @Column()
    timestamp: string;

    @Column()
    created_at: string;

    @ManyToOne(() => Track, track => track.comments)
    track: Track;

}