import { AbstractEntity } from "./AbstractEntity";
import { Frete } from "./Frete";
import { StatusFrete } from "./enum/StatusFrete";
import { Usuario } from "./Usuario";

export class HistoricoDoFrete extends AbstractEntity {

    data!: Date
    frete!: Frete
    statusFrete!: StatusFrete
    executor!: Usuario

}