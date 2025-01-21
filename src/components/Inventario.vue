<script setup>
import { defineProps, ref, watch, onMounted, onUnmounted } from "vue";
import { selectOption, atualizarInventario } from "../data/itensBanco";

const props = defineProps({
  itens: {
    required: true,
  },
});

const inventario = ref(props.itens);

watch(props.itens, (newItens) => {
  inventario.value = newItens;
});

function handleSelectOption(itemId) {
  selectOption(itemId);
  const updatedInventario = atualizarInventario();
  if (Array.isArray(updatedInventario)) {
    inventario.value = updatedInventario;
  }
}

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    inventario.value = atualizarInventario();
  }, 500);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script> 

<template>
  <div class="inventario" v-if="Array.isArray(inventario)">
    <div v-for="(item, index) in inventario" :key="index" class="slot" @click="handleSelectOption(item.id)">
      <img v-if="item.coletado" :src="item.imagem" :alt="item.nome" />
    </div>
  </div>
</template>

<style scoped>
.inventario {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
}

.slot {
  width: 50px;
  height: 50px;
  margin: 0 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.slot img {
  max-width: 100%;
  max-height: 100%;
}
</style>
