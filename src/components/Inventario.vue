<template>
  <div class="inventario">
    <div v-for="(item, index) in inventario" :key="index" class="slot">
      <img v-if="item && item.coletado" :src="item.imagem" :alt="item.nome" />
    </div>
  </div>
</template>

<script>
import itensBanco from '../data/itensBanco';

export default {
  data() {
    return {
      inventario: itensBanco.slice(0, 7) // Inicializa o inventário com os primeiros 7 itens do itensBanco
    };
  },
  methods: {
    coletarItem(itemId) {
      const item = itensBanco.find(i => i.id === itemId);
      if (item) {
        const index = this.inventario.findIndex(slot => slot === null);
        if (index !== -1) {
          this.inventario.splice(index, 1, item);
          item.coletado = true; // Marca o item como coletado
        }
      }
    }
  }
};
</script>

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
