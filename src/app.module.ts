import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksModule } from "./tracks/tracks.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TracksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true, // Load modules automatically

      // This is here for heroku
      // ssl: true,
      // extra: {
      //   ssl: {
      //     rejectUnauthorized: false
      //   }
      // }

      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
