<script>
import { ref } from 'vue';
import Popup from './Popup.vue';
import ContainerItem from './ContainerItem.vue';

export default {
  components: {
    Popup,
    ContainerItem
  },
  setup() {
    const mapa = ref([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 1, 1, 1, 1, 0],
      [0, 0, 2, 0, 2, 1, 1, 0, 1, 0],
      [0, 0, 2, 0, 2, 1, 1, 0, 1, 0],
      [0, 0, 2, 0, 2, 0, 0, 0, 1, 0],
      [3, 0, 2, 0, 2, 2, 2, 0, 0, 0],
      [0, 0, 2, 0, 2, 0, 2, 2, 2, 2],
      [0, 0, 2, 0, 2, 0, 2, 0, 0, 0],
      [0, 0, 2, 0, 2, 2, 2, 2, 0, 0],
      [0, 3, 2, 2, 2, 2, 2, 2, 2, 2]
    ]);

    const showPopup = ref(false);

    const recolherItem = (row, col) => {
      if (mapa.value[row][col] === 3) {
        console.log('Item coletado!');
        showPopup.value = true;
      }
    };

    return {
      mapa,
      recolherItem,
      showPopup
    };
  }
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
          grama: cell === 0,
          pista: cell === 1,
          agua: cell === 2,
          item: cell === 3
        }"
        @click="recolherItem(rowIndex, colIndex)"
      ></div>
    </div>
  </div>
  <ContainerItem v-if="showPopup" />
</template>


<style scoped>
.mapa {
  display: grid;
  grid-template-columns: repeat(10, 80px); 
  width: 800px;
  gap: 0px; /* Adiciona espaçamento entre as células */
  background-color: transparent;
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
  color: white;
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
.cell.item {
  background-color: yellow;
}
</style>
