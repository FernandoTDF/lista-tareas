import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lista } from './entities/lista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListaService {

  constructor(@InjectRepository(Lista)
              private readonly listaRepository:Repository<Lista>
  ){}



  async findAll():Promise<Lista[]> {
    return await this.listaRepository.find();
  }

}
