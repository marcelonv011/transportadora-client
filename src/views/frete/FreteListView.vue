<template>
  <div class="columns">
    <div class="column is-10 is-offset-1 principaldiv">
      <strong>Lista frete</strong>
      <div class="column is-10 is-offset-1">
        <table class="table">
          <thead>
            <tr class="cabezal">
              <th>Cidade origem</th>
              <th>Cidade destino</th>
              <th>statusFrete</th>
              <th>Produto</th>
              <th>Caminhao</th>
              <th>Motorista</th>
              <th>Preco por tonelada</th>
              <th>Opcao</th>
            </tr>
          </thead>
          <tbody>
            <tr class="contenido" v-for="item in freteList" :key="item.id">
              <th>{{ item.cidadeOrigem.nome }}</th>
              <th>{{ item.cidadeDestino.nome }}</th>
              <th>{{item.statusFrete}}</th>
              <th>{{ item.produto.nome }}</th>
              <th>{{ item.caminhao.placa }}</th>
              <th>{{ item.motorista.nome }}</th>
              <th>{{ item.precoTonelada }}</th>
              
              <th>
                <div v-if="item.statusFrete === 'CARGA'">
                  <nav>
                    <button  class="button is-default" @click="onClickPaginaDetalhar(item.id)">T</button>
                    <router-link class="button is-default" to="/observacao/interrompido">I</router-link>
                    <button class="button is-default" to="/canceladocarga/frete/:model/:id">C</button>
                  </nav>
                </div>
                <div v-if="item.statusFrete === 'EM_TRANSPORTE'">
                    <button class="button is-default" @click="$router.push('observacao')">I</button>
                    <button class="button is-default">D</button>
                </div>
                <div v-if="item.statusFrete === 'DESCARGA'">
                    <button class="button is-default">F</button>
                </div>
                <div v-if="item.statusFrete === 'INTERROMPIDO'">
                    <button class="button is-default" @click="$router.push('canceladointerrompidofrete')">C</button>
                </div>
                <div v-if="item.statusFrete === 'FATURADO'">
                    <span >Faturado</span>
                </div>
                <div v-if="item.statusFrete === 'CANCELADO'">
                    <span >Cancelado</span>
                </div>
              </th>

            </tr>
          </tbody>
        </table>

      </div>
      <div class="botondiv">
        <button
          class="button is-black is-focused"
          @click="$router.push('fretecadastrar')"
        >
          cadastrar novo frete
        </button>
      </div>
    </div>



  </div>
</template>

<script lang="ts">
import { Vue, Component} from "vue-property-decorator";
import { FreteClient } from "@/client/Frete.client";
import { Frete } from "@/model/Frete";

@Component
export default class FreteListView extends Vue {
[x: string]: any;
    
  private freteClient: FreteClient = new FreteClient();
  public freteList: Frete[] = [];
  

  public mounted(): void {
    this.listarFretes();
  }

  public onClickPaginaDetalhar(idFrete: number){
      this.$router.push({ name: 'transportadocarga-frete', params: { id: idFrete, model: 'detalhar' } })
    }

  private listarFretes(): void {
    this.freteClient.findAll().then(
      (success) => {
        this.freteList = success;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
</script>

<style>
.contenedor{
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
}

.modale{
    width: 500px;
    margin: 40px auto;
    background-color: white;
}

.derecha{
    float: right;
}

.izquierda{
    float: left;
}
  
.clear{
    clear: both;
}

.cabezal {
  background-color: #41b883;
  border: solid;
}

.table {
  margin-top: 5px;
}

.principaldiv {
  margin-top: 20px;
}

.contenido {
  border: solid;
}

.botondiv {
  margin-top: 10px;
}
</style>
