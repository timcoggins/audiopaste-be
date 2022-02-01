import { Module } from '@nestjs/common';
import { TracksController } from "./tracks.controller";
import { TracksService } from "./tracks.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Track } from "./entities/track.entity";
import { Comments } from "./entities/comments.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Track, Comments])],
    controllers: [TracksController],
    providers: [TracksService],
})
export class TracksModule {}
