<template>
  <div class="columns">
    <div class="column is-10 is-offset-1">
      <div v-for="item in freteList" :key="item.id">
        <div v-if="item.statusFrete === 'CARGA'">
          <h1>Id do frete: {{ item.id }}</h1>
          <h1>placa: {{ item.caminhao.placa }}</h1>
          <h1>selecione o id</h1>
          <div class="select is-normal is-rounded">
            <select v-model="frete.id">
              <option hidden disabled selected>Selecione o id</option>
              <option :value="item" v-for="item in freteList" :key="item.id">
                {{ item.id }}
              </option>
            </select>
          </div>
          <h1>Estado do frete: {{ item.statusFrete }}</h1>
          <h1>Voce esta querendo mudar para o estado do frete em transporte</h1>
        </div>
      </div>
      <textarea
        class="textarea is-primary"
        placeholder="deixe uma observacao porque quer mudar para em transporte"
        v-model="frete.observacao"
      ></textarea>
      <button class="button is-black is-focused" @click="onclickActualizar()">
        Aceptar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { FreteClient } from "@/client/Frete.client";
import { Frete } from "@/model/Frete";

@Component
export default class TransportadoCargaFrete extends Vue {
  private freteClient: FreteClient = new FreteClient();
  public freteList: Frete[] = [];

  public frete: Frete = new Frete();

  public mounted(): void {
    this.listarFretes();
    this.onclickActualizar();
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

  public onclickActualizar(): void {
    this.freteClient.atualizarStatusEmTransporte(this.frete).then(
      (success) => {
        console.log("registro actualizado com sucesso");
        this.frete.statusFrete;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
</script>

<style></style>
