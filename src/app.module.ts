import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListaModule } from './lista/lista.module';

@Module({

  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "bhinebrhicskufafjecq-mysql.services.clever-cloud.com",
    "port": 3306,
    "username": "udest0ovuu346h9d",
    "password": "JOulOjhd8AmKJCSOcCbw",//1982LasAljabas402",
    "database": "bhinebrhicskufafjecq",
    "entities": [__dirname + "/**/**/**.entity{.ts,.js}"],
    "synchronize":true
  }), ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
