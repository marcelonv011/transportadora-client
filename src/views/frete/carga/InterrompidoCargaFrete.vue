<template>
  <div class="columns">
    <div class="column is-10 is-offset-1">
      
                    <div class="column" >
                <label> observacao </label>
                    <input class="input is-rounded" type="text"  v-model="frete.observacao" placeholder="observacao"/>      
                    </div>
                </div>
      <button class="button is-black is-focused" @click="onclickActualizar()"></button>
    </div>
  
</template>

<script lang="ts">
import { Vue, Component, Model } from "vue-property-decorator";
import { FreteClient } from "@/client/Frete.client";
import { Frete } from "@/model/Frete";

@Component
export default class InterrompidoCargaFrete extends Vue {
  private freteClient: FreteClient = new FreteClient();
  public freteList: Frete[] = [];

  public frete: Frete = new Frete();

  public mounted(): void {
    
    this.onclickActualizar();
  }


  

  public onclickActualizar(): void {
    this.freteClient.atualizarStatusInterrompido(this.frete).then(
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
