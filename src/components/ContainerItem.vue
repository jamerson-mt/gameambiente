<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  itemDescription: {
    type: String,
    required: false,
    default: "Descrição do item",
  },
  showPopup: {
    type: Boolean,
    required: false,
    default: false,
  },
  qtdd: {
    type: Number,
    required: false,
    default: 1,
  },
  question: {
    type: String,
    required: false,
    default: "Aqui estara uma pergunta para poder coletar o item?",
  },
  options: {
    type: Array,
    required: false,
    default: () => [
      { id: 1, text: "Opção 1" },
      { id: 2, text: "Opção 2" },
      { id: 3, text: "Opção 3" },
    ],
  },
});

const emit = defineEmits(['update:showPopup']);

const selectOption = (option) => {
  console.log("Opção selecionada:", option);
};

const closePopup = () => {
  emit('update:showPopup', false);
};
</script>
<template>
  <div>
    <!-- ...existing code... -->
    <div class="container" v-if="props.showPopup">
      <div class="content">
       
        <div class="descricao-item">
          <img src="../../public/cadeira.png" alt="cadeira" />
          <div class="descricao-item-text">
            <h2>{{ props.itemDescription }}</h2>
            <h2>
              existem: <b>{{ props.qtdd }}</b>
            </h2>
          </div>
          <button class="close-button" @click="closePopup">X</button>
        </div>

        <b>{{ props.question }}</b>
        <div class="options">
          <button
            @click="selectOption(option)"
            v-for="option in props.options"
            :key="option.id"
          >
            {{ option.text }}
          </button>
        </div>

        <div class="itens-existentes">
          <h3>itens semelhantes</h3>
          <img src="../../public/sacola plastica.png" alt="lixeira organica" />
          <img src="../../public/garrafaplastica.png" alt="lixeira organica" />
        </div>

        <div class="lixeira">
          <h3>Esta e a lixeira para esse tipo de material</h3>
          <img
            src="../../public/organicolixeira-removebg-preview.png"
            alt="lixeira organica"
          />
        </div>
      </div>
    </div>
    <!-- ...existing code... -->
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 700px;
  height: 700px;
  background-color: white;
}
.close-button {
    margin: 10px;
  cursor: pointer;
}

.descricao-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
}
.descricao-item-text {
  display: flex;
  flex-direction: column;
}
b {
  font-weight: bold;
}

.descricao-item img {
  width: 70px;
  height: 100px;
  margin-right: 10px;
}

img {
  width: 50px;
  height: 50px;
}

.options button {
  margin: 5px;
}

.itens-existentes {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: bisque;
  padding: 10px;
  border-radius: 15px;
  width: 50%;
  justify-content: center;
  align-items: center;
}
.itens-existentes img {
  width: 50px;
  height: 50px;
  margin: 0 10px;
}
.lixeira {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: bisque;
  padding: 10px;
  border-radius: 15px;
  margin-top: 20px;
  align-items: center;
}
.lixeira img {
  width: 100px;
  height: 100px;
}
</style>
