import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListaService } from './lista.service';
import { Lista } from './entities/lista.entity';

@Controller('lista')
export class ListaController {
  constructor(private readonly listaService: ListaService) {}


  @Get()
  async findAll():Promise <Lista[]> {
     return await this.listaService.findAll();
  }
}
