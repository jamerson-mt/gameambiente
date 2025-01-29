<script>
import { ref, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import Popup from "./Popup.vue";
import ContainerItem from "./ContainerItem.vue";
import ContainerLixeira from "./ContainerLixeira.vue";
import Inventario from "./Inventario.vue";
import itensBanco, { atualizarInventario } from "../data/itensBanco";
import { moviment } from "../utils/moviment";
import mapa from "../utils/mapa";

export default {
  components: {
    Popup,
    ContainerItem,
    ContainerLixeira,
    Inventario,
  },
  setup() {
    const itensBancoReativo = ref(itensBanco);
    const showPopupItem = ref(false);
    const showPopupLixeira = ref(false);
    const currentItem = ref(null);
    const position = ref({
      row: 10,
      col: 10,
      direction: "",
      lastDirection: "",
      lastPosition: { row: 10, col: 10 },
    });

    const recolherItem = (row, col) => {
      const itemId = mapa.value[row][col];
      const itemIndex = itensBanco.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1 && !itensBanco[itemIndex].coletado) {
        currentItem.value = itensBanco[itemIndex];
        if (itemId >= 20 || itemId <= 90) {
          showPopupLixeira.value = true;
        } else if (itemId >= 0 || itemId <= 19) {
          showPopupItem.value = true;
        }
      }
    };

    const closePopup = () => {
      showPopupItem.value = false;
      currentItem.value = null;
    };

    const coletarItem = (item) => {
      const itemIndex = itensBanco.findIndex((i) => i.id === item.id);
      if (itemIndex !== -1) {
        itensBanco[itemIndex].coletado = true;

        mapa.value[item.position.row][item.position.col] = 0; //
        atualizarInventario(itensBanco);
      }
    };

    const verificarItensColetados = () => {
      mapa.value.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          const itemIndex = itensBancoReativo.value.findIndex((item) => item.id === cell);
        });
      });
    };

    const handleKeydown = (event) => {
      const item = moviment(event, position);
     

      if (!item) {
        return 
      }else{
        ativarContainerItem(item);
      }
      //verificarItensColetados();
      // console.log(position.value.row);
    };

    const ativarContainerItem = (item) => {
      const itemIndex = itensBanco.findIndex((i) => i.id === item.valor);
      if (itemIndex !== -1) {
        currentItem.value = itensBanco[itemIndex];
      }
      if (item.valor >= 10 && item.valor <= 19) {
        
      
        showPopupLixeira.value = false;
        showPopupItem.value = true;
      
      } else if (item.valor >= 20 && item.valor <= 25) {
        
        showPopupItem.value = false;
        showPopupLixeira.value = true;
      }
    };

    onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleKeydown);
    });

    return {
      mapa,
      itensBanco: itensBancoReativo,
      recolherItem,
      showPopupItem,
      showPopupLixeira,
      closePopup,
      currentItem,
      position,
      handleKeydown,
      ativarContainerItem,
      coletarItem,
      verificarItensColetados,
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
          grama: cell === 3,
          agua: cell === 2,
          boneco: cell === 99,

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
  <ContainerItem v-model:showPopupItem="showPopupItem" :item="currentItem" />
  <ContainerLixeira v-model:showPopupLixeira="showPopupLixeira" :item="currentItem" />
  <Inventario :itens="itensBanco.value" />
</template>

<style scoped>
.mapa {
  display: grid;
  grid-template-columns: repeat(20, 20px);
  gap: 0px;
  background-size: cover;
  background-image: url("public/mapa/praia.jpg");
  padding: 0px;
  margin: 0px;
  flex-direction: column-reverse;
  z-index: 1;
  /* Adicione esta linha */
}

.row {
  display: contents;
}

.cell {
  width: 20px;
  position: relative;
  background-color: transparent;
  border: 0px solid black;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid transparent;
  z-index: 10;
}

.cell.grama {
  background-image: url("public/tiles/moita.svg");
}

.cell.agua {
  background-color: rgb(0, 218, 207);
  color: black;
}

.item-imagem {
  width: 20px;
  height: 20px;

  cursor: pointer;
}

.cell.lixeira {
  width: 20px;
  height: 20px;
}

.cell.boneco {
  position: absolute;
  background-image: url("public/personagem/w1.svg");
  width: 20px;
  height: 20px;
  position: relative;
}


</style>
