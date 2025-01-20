<script>
import { ref } from "vue";
import Popup from "./Popup.vue";
import ContainerItem from "./ContainerItem.vue";
import Inventario from "./Inventario.vue";
import itensBanco from "../data/itensBanco";

export default {
  components: {
    Popup,
    ContainerItem,
    Inventario,
  },
  setup() {
    const mapa = ref([
      [0, 13, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 10, 0, 0, 0, 0, 14],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 17, 0, 0, 0, 0, 15, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [13, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 20, 0, 0, 0, 0],
      [0, 14, 0, 0, 0, 0, 0, 19, 0, 0],
    ]);

    const showPopup = ref(false);
    const currentItem = ref(null);

    const recolherItem = (row, col) => {
      const itemId = mapa.value[row][col];
      const itemIndex = itensBanco.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1 && !itensBanco[itemIndex].coletado) {
        currentItem.value = itensBanco[itemIndex];
        showPopup.value = true;
      }
    };

    const closePopup = () => {
      showPopup.value = false;
      currentItem.value = null;
    };

    return {
      mapa,
      itensBanco,
      recolherItem,
      showPopup,
      closePopup,
      currentItem,
    };
  },
};
</script>

<template>
  <div class="mapa">
    <div v-for="(row, rowIndex) in mapa" :key="rowIndex" class="row">
      <div
        v-for="(cell, colIndex) in row"
        :key="colIndex"
        class="cell"
        :class="{
          null: cell === 0,
          pista: cell === 1,
          agua: cell === 2,
          item: itensBanco.some((item) => item.id === cell && !item.coletado),
        }"
        @click="recolherItem(rowIndex, colIndex)"
      >
        <img
          v-if="itensBanco.some((item) => item.id === cell && !item.coletado)"
          :src="itensBanco.find((item) => item.id === cell && !item.coletado).imagem"
          :alt="itensBanco.find((item) => item.id === cell && !item.coletado).nome"
          class="item-imagem"
        />
      </div>
    </div>
  </div>
  <ContainerItem v-model:showPopup="showPopup" :item="currentItem" />
  <Inventario />
</template>

<style scoped>
.mapa {
  display: grid;
  grid-template-columns: repeat(10, 80px);
  width: 800px;
  gap: 0px; /* Adiciona espaçamento entre as células */
  background-image: url("public/mapa.png");
  background-size: cover;
}
.row {
  display: contents;
}
.cell {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;

}
.cell.grama {
  background-color: green;
}
.cell.pista {
  background-color: gray;
}
.cell.agua {
  background-color: rgb(13, 218, 207);
  color: black; /* Ajusta a cor do texto para melhor contraste */
}

.item-imagem {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
