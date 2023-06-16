import { AbstractEntity } from "./AbstractEntity";
import { Modelo } from "./Modelo";
import { Cor } from "./enum/Cor";


export class Caminhao extends AbstractEntity{

    placa!: string
    modelo!: Modelo
    ano!: number
    cor!: Cor
    observacao!: string

}