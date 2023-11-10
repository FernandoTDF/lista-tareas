import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Lista {

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  nombre:string;

  @Column()
  apellido:string;

  @Column()
  nacionalidad:string;


  constructor(pNombre:string, pApellido:string, pNacionalidad:string){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.nacionalidad = pNacionalidad;


  }


}
