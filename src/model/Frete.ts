import { AbstractEntity } from "./AbstractEntity";
import { Caminhao } from "./Caminhao";
import { Cidade } from "./Cidade";
import { StatusFrete } from "./enum/StatusFrete";
import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

export class Frete extends AbstractEntity {

    produto!: Produto
    cidadeOrigem!: Cidade
    cidadeDestino!: Cidade
    motorista!: Usuario
    caminhao!: Caminhao
    statusFrete!: StatusFrete
    quilometragemIni!: number
    quilometragemFim!: number
    totalBrutoRecebidoNota!: number
    totalLiquidoRecebido!: number
    pesoInicial!: number
    pesoFinal!: number
    pesoFinalTransportado!: number
    precoTonelada!: number
    observacao!: string

    constructor() {
        super()
        this.cidadeDestino = new Cidade
        this.cidadeOrigem = new Cidade
        this.produto = new Produto
        this.caminhao = new Caminhao
        this.motorista = new Usuario

    }

}