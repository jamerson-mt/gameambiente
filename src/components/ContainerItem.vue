<script setup>
import { ref, defineProps, defineEmits, computed, watch, onMounted } from "vue";
import itensBanco, { getItemImage, coletarItem } from "../data/itensBanco";
import { getRandomQuestion } from "../data/questions";
import Inventario from "./Inventario.vue";

const inventarioRef = ref(null);

const props = defineProps({
  itemDescription: String,
  showPopupItem: Boolean,
  qtdd: Number,
  question: String,
  options: Array,
  item: {
    type: Object,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["close", "update:showPopupItem"]);
const selectedOptionId = ref(null);
const isCorrect = ref(null);

if (props.item && props.item.valor) {
  props.item.valor = itensBanco[props.item.valor];  
}
const questionData = ref(getRandomQuestion());

watch(
  () => props.showPopupItem,
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

  if (isCorrect.value) {
    const itemIndex = itensBanco.findIndex((i) => i.id === props.item.valor);
    if (itemIndex !== -1) {
      coletarItem(itensBanco[itemIndex]);
    }
    inventarioRef.value?.atualizarInventario();
    closePopup();
  }
};

const closePopup = () => emit("update:showPopupItem", false);

const similarItems = computed(() =>
  props.item
    ? itensBanco.filter(
        (bancoItem) => bancoItem.tipo === props.item.tipo && bancoItem.id !== props.item.id
      )
    : []
);



</script>

<template>
  <div>
    <div class="container" v-if="props.showPopupItem">
      <div class="content">
        <div class="descricao-item" v-if="props.item">
          <img :src="'../../' + props.item.imagem" alt="Item" />
          <div class="descricao-item-text">
            <h2>{{ props.item.nome }}</h2>
            <h2>existem: <b>{{ props.qtdd }}</b></h2>
          </div>
          <button class="close-button" @click="closePopup">X</button>
        </div>
      

        <div class="question" v-if="questionData">
          <b>{{ questionData.question }}</b>
        </div>

        <div class="itens" v-if="questionData">
          <div class="options">
            <button
              v-for="option in questionData.options"
              :key="option.id"
              @click="selectOption(option)"
              :class="{
                correct: buttonState === 'correct' && selectedOptionId === option.id,
                incorrect: buttonState === 'incorrect' && selectedOptionId === option.id,
              }"
            >
              {{ option.text }}
            </button>
          </div>

          <div class="lixeira">
            <img :src="questionData.image" alt="Question Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #242424;
  z-index: 100;
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
  font-family: 'Inter', sans-serif;
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

.descricao-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  opacity: 1;
}

.descricao-item-text {
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

.descricao-item img {
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

.itens-existentes {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: bisque;
  padding: 10px;
  border-radius: 15px;
  width: 50%;
  opacity: 1;
}

.similar-item {
  display: flex;
  align-items: center;
  margin: 5px 0;
  opacity: 1;
}

.similar-item img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>
