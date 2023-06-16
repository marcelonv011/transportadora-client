import { AbstractEntity } from "./AbstractEntity";
import { Grupo } from "./enum/Grupo";

export class Usuario extends AbstractEntity {

    percGanho!: number
    login!: string
    senha!: string
    grupo!: Grupo
    nome!: string
    cpf!: string
    telefone!: string
    datanascimento!: Date
    endereco!: string
    observacao!: string

}