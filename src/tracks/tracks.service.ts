import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Track } from "./entities/track.entity";

@Injectable()
export class TracksService {

    constructor(
        @InjectRepository(Track)
        private readonly trackRepository: Repository<Track>,
    ) {}

    getTrack() {
        return this.trackRepository.find({
            relations: ['comments']
        })
    }
}
