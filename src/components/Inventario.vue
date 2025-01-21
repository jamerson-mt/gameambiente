<script setup>
import { ref } from 'vue';
import itensBanco, { getItemImage, atualizarInventario as atualizarInventarioBanco } from '../data/itensBanco';

const inventario = ref(itensBanco.slice(0, 7));

function coletarItem(itemId) {
  const item = itensBanco.find(i => i.id === itemId);
  if (item) {
    const index = inventario.value.findIndex(slot => slot === null);
    if (index !== -1) {
      inventario.value.splice(index, 1, item);
      item.coletado = true;
      item.imagem = getItemImage(itemId);
      inventario.value = atualizarInventarioBanco(); // Atualiza o inventário
    }
  }
}

function atualizarInventario() {
  inventario.value = [...inventario.value]; 
}

defineExpose({
  atualizarInventario
});

</script>

<template>
  <div class="inventario">
    <div v-for="(item, index) in inventario" :key="index" class="slot">
      <img v-if="item && item.coletado" :src="item.imagem" :alt="item.nome" />
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
