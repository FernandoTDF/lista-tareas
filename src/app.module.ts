import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListaModule } from './lista/lista.module';

@Module({

  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",//1982LasAljabas402",
    "database": "lista_prueba",
    "entities": [__dirname + "/**/**/**.entity{.ts,.js}"],
    "synchronize":true
  }), ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
