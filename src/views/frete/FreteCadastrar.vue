<template>

<div class="columns primerdiv">
        <div class="column is-offset-4 is-4 box" >
            <h1><strong>Cadastrar frete</strong></h1>
                <form>

                <div class="columns">
                <div class="column" >
                    <div class="select is-normal is-rounded ">
                            <select @change="onchangeSelectEstadoOrigem($event)">
                                <option hidden disabled selected>Selecione o Estado</option>
                                <option :value="item.id" v-for="item in estadoList" :key="item.id"> {{ item.nome }}</option>
                            </select>
                    </div>

                    <div class="select is-normal is-rounded ">
                            <select v-model="frete.cidadeOrigem">
                                <option hidden disabled selected>Selecione a cidade</option>
                                <option :value="item" v-for="item in cidadeOrigemList" :key="item.id">{{ item.nome }}</option>
                            </select>
                    </div>     
                         
                </div>
                </div>

                <div class="columns">
                <div class="column" >

                <div class="select is-normal is-rounded">
                            <select @change="onchangeSelectEstadoDestino($event)">
                                <option hidden disabled selected>Selecione o Estado</option>
                                <option :value="item.id" v-for="item in estadoList" :key="item.id"> {{ item.nome }}</option>
                            </select>
                </div> 
                    
                <div class="select is-normal is-rounded">
                            <select v-model="frete.cidadeDestino">
                                <option hidden disabled selected>Selecione a cidade</option>
                                <option :value="item" v-for="item in cidadeDestinoList" :key="item.id"> {{ item.nome }}</option>
                            </select>
                    </div>   
                
                    
                </div>
                </div>

                <div class="columns">
                    <div class="column">
                        <label> Produto </label>
                        <div class="select is-fullwidth is-rounded">
                            <select v-model="frete.produto">
                                <option hidden disabled selected>Selecione o produto</option>
                                <option :value="item" v-for="item in produtoList" :key="item.id"> {{ item.nome }}</option>
                            </select>
                        </div>
                    </div>
                </div>

                
                <div class="columns">
                    <div class="column" >
                <label> Caminhao </label>
                <div class="select is-fullwidth is-rounded">
                            <select v-model="frete.caminhao">
                                <option hidden disabled selected>Selecione o caminhao</option>
                                <option :value="item" v-for="item in caminhaoList" :key="item.id"> {{ item.placa }}</option>
                            </select>
                        </div>      
                    </div>
                </div>

                <div class="columns">
                    <div class="column" >
                <label> Motorista </label>
                <div class="select is-fullwidth is-rounded">
                            <select v-model="frete.motorista" >
                                <option hidden disabled selected>Selecione o motorista</option>
                                <option :value="item" v-for="item in usuarioList" :key="item.id"> {{ item.nome }}</option>
                            </select>
                        </div>      
                    </div>
                </div>

                <div class="columns">
                    <div class="column" >
                <label> preco tonelada </label>
                    <input class="input is-rounded" type="text"  v-model="frete.precoTonelada" placeholder="Preco tonelada"/>      
                    </div>
                </div>
                </form> 
                <div class="columns">
                    <div class="column" >
                <button type="submit" class="button is-black is-focused" @click="onClickCadastrar()"> cadastrar</button>
                    </div>
                </div>
        </div>
    </div>

</template>


<script lang="ts">

import { FreteClient } from "@/client/Frete.client";
import { ProdutoClient } from "@/client/Produto.client";
import { CaminhaoClient } from "@/client/Caminhao.client";
import { CidadeClient } from "@/client/Cidade.client";
import { EstadoClient } from "@/client/Estado.client";
import { UsuarioClient } from "@/client/Usuario.client"
import { Usuario } from "@/model/Usuario";
import { Estado } from "@/model/Estado";
import { Frete } from "@/model/Frete";
import { Produto } from "@/model/Produto";
import { Cidade } from "@/model/Cidade";
import { Vue, Component } from "vue-property-decorator";
import { Caminhao } from "@/model/Caminhao";

    @Component
    export default class FleteListView extends Vue {


        private freteClient: FreteClient = new FreteClient()
        private produtoClient: ProdutoClient = new ProdutoClient()
        private caminhaoClient: CaminhaoClient = new CaminhaoClient()
        private cidadeClient: CidadeClient = new CidadeClient()
        private estadoClient: EstadoClient = new EstadoClient()
        private usuarioClient: UsuarioClient = new UsuarioClient()
        

        public frete: Frete = new Frete()
        public produtoList: Produto[] = []
        public caminhaoList: Caminhao[] = []
        public estadoList: Estado[] = []
        public cidadeList: Cidade [] = []
        public usuarioList: Usuario[] = []
        public cidadeOrigemList:  Cidade[] = []
        public cidadeDestinoList: Cidade [] = []

        public mounted(): void { 

            this.selectProdutoList();
            this.selectCaminhaoList();
            this.selectCidadeList();
            this.selectEstadoList();
            this.selectUsuarioList();
        }

        public onClickCadastrar(): void{
            this.freteClient.cadastrar(this.frete).then(
                success => {
                    console.log("registro cadastrado com sucesso")
                    this.frete = new Frete()
                },
                error => {
                    console.log(error)
                }
            )
        }

        private selectProdutoList(): void{
            this.produtoClient.findAll().then(
                success => this.produtoList = success,
                error => console.log(error)
            )
        }

        private selectCaminhaoList(): void{
            this.caminhaoClient.findAll().then(
                success => this.caminhaoList = success,
                error => console.log(error)
            )
        }

        private selectCidadeList(): void{
            this.cidadeClient.findAll().then(
                success => this.cidadeList = success,
                error => console.log(error)
            )
        }

        private selectEstadoList(): void{
            this.estadoClient.findAll().then(
                success => this.estadoList = success,
                error => console.log(error)
            )
        }

        private selectUsuarioList(): void{
            this.usuarioClient.findAll().then(
                success => this.usuarioList = success,
                error => console.log(error)
            )
        }

        public async onchangeSelectEstadoOrigem(event: any): Promise <void>{
            this.cidadeOrigemList = await this.cidadeClient.findByEstado(event.target.value);
        }

        public async onchangeSelectEstadoDestino(event: any): Promise <void>{
            this.cidadeDestinoList = await this.cidadeClient.findByEstado(event.target.value);
        }
    }

</script>

<style>

.box{
    background-color: #41b883;
    border: solid;
}

.primerdiv {
    margin-top: 5px;
}

.seleccionar{
    margin-right: 200px;
}
.seleccionar2{
    margin-top: -40px;
    margin-left: 210px;
}

.estado {
    margin-left: 20px;
}

.cidade {
    margin-right: 100px;
}

</style>