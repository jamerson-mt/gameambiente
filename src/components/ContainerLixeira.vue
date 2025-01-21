<script setup>
import { ref, defineProps, defineEmits, computed, watch } from "vue";
import {
  getItemImage,
  coletarItem,
  guardarItemNaLixeira,
  itensBanco,
} from "../data/itensBanco";
import { getRandomQuestion } from "../data/questions";

const props = defineProps({
  lixeira: {
    type: Object,
    required: true,
  },
  showPopupLixeira: Boolean,
  item: {
    type: Object,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["close", "update:showPopupLixeira"]);
const selectedOptionId = ref(null);
const isCorrect = ref(null);

const questionData = ref(getRandomQuestion());

watch(
  () => props.showPopupLixeira,
  (newVal) => {
    if (newVal) {
      questionData.value = getRandomQuestion();
      selectedOptionId.value = null;
      isCorrect.value = null;
    }
  }
);

const buttonState = ref(null);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const selectOption = async (option) => {
  selectedOptionId.value = option.id;
  isCorrect.value = option.id === questionData.value.correctOptionId;
  buttonState.value = isCorrect.value ? "correct" : "incorrect";

  await delay(1000);

  buttonState.value = null;

  if (isCorrect.value && props.item) {
    coletarItem(props.item.id);
    closePopup();
  }
};

const closePopup = () => emit("update:showPopupLixeira", false);

const slots = ref([]); 

const addItemToSlot = () => {
  const coletados = itensBanco.filter(
    (iten) => iten.coletado && iten.tipo === props.item.tipo
  );

  coletados.forEach((item) => {
    if (slots.value.length < 5) {
      slots.value.push(item);
      guardarItemNaLixeira(props.item.id, item.id);
      item.coletado = false; 
    }
  });
};


</script>

<template>
  <div>
    <div class="container" v-if="props.showPopupLixeira">
      <div class="content">
        <div class="descricao-lixeira" v-if="props.item">
          <img :src="'../../' + props.item.imagem" alt="Lixeira" />
          <div class="descricao-lixeira-text">
            <h2>{{ props.item.nome }}</h2>
            <p>{{ props.item.descricao }}</p>
          </div>
          <button class="close-button" @click="closePopup">X</button>
        </div>
        <div class="slots">
          <div v-for="(slot, index) in slots" :key="index" class="slot">
            <img v-if="slot && slot.tipo === props.item.tipo" :src="'../../' + slot.imagem" alt="Item" />
          </div>
        </div>
        <button class="guardar" @click="addItemToSlot()" v-if="itensBanco">Guardar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

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
  color: #242424;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 700px;
  height: 700px;
  background-color: white;
  opacity: 0.8;
  font-family: "Inter", sans-serif;
}

.close-button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: darkred;
}

.close-button:focus {
  outline: none;
}

.correct {
  background-color: green !important;
  color: white;
}

.incorrect {
  background-color: red !important;
  color: white;
}

.descricao-lixeira {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  opacity: 1;
}

.descricao-lixeira-text {
  display: flex;
  flex-direction: column;
  opacity: 1;
}

b {
  font-weight: bold;
}

.question {
  display: flex;
  position: relative;
  left: 3.8rem;
  margin: 20px;
  width: 100%;
  justify-content: left;
  text-align: justify;
}

.question b {
  color: #369046;
  font-size: 1.3rem;
  display: block;
  width: 50%;
}

.descricao-lixeira img {
  width: 70px;
  height: 100px;
  margin-right: 10px;
}

img {
  width: 50px;
  height: 50px;
}

.itens {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.options {
  display: flex;
  position: relative;
  left: 3.8rem;
  flex-wrap: wrap;
  width: 60%;
}

.options button {
  margin: 5px;
  background-color: yellow;
  width: 10rem;
  height: 2.5rem;
  font-weight: bold;
  border: none;
  font-size: 0.98rem;
}

.slots {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px 10px;
}

.guardar{
  position: relative;
  left: 15%;
  margin: 5px;
  background-color: #369046;
  color: #e1e2e1;
  font-size: large;
  width: 70%;
  height: 2.3rem;
  border-radius: 20px;
  opacity: 1;
  font-weight: bold;
}

.lixeira {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  padding: 10px;
  border-radius: 15px;
  width: 30%;
}

.lixeira img {
  width: 100px;
  height: 100px;
}
</style>
