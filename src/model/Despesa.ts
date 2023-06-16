import { AbstractEntity } from "./AbstractEntity";
import { TipoDespesa } from "./TipoDespesa";
import { Frete } from "./Frete";
import { Usuario } from "./Usuario";

export class Despesa extends AbstractEntity {

    tipodespesa!: TipoDespesa
    valor!: number
    motorista!: Usuario
    data!: Date
    aprovador!: Usuario
    frete!: Frete

}