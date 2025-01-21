<script setup>
import { ref, defineProps, defineEmits, computed, watch } from "vue";
import itensBanco, { getItemImage, atualizarInventario as atualizarInventarioBanco } from "../data/itensBanco";
import { getRandomQuestion } from "../data/questions";
import Inventario from "./Inventario.vue";

const inventarioRef = ref(null);

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
  },
  options: {
    type: Object,
    required: false,
  },
  item: {
    type: Object,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["close", "update:showPopup"]);
const selectedOptionId = ref(null);
const isCorrect = ref(null);

const questionData = ref(getRandomQuestion()); 

watch(() => props.showPopup, (newVal) => {
  console.log("showPopup changed:", newVal); 
  if (newVal) {
    questionData.value = getRandomQuestion(); 
    selectedOptionId.value = null;
    isCorrect.value = null;
    console.log("Nova questão:", questionData.value); 
  }
});

const buttonState = ref(null); 

const selectOption = (option) => {
  selectedOptionId.value = option.id;
  isCorrect.value = option.id === questionData.value.correctOptionId;

  console.log("Opção selecionada:", option);
  console.log(isCorrect.value ? "Resposta correta!" : "Resposta incorreta!");

  buttonState.value = isCorrect.value ? 'correct' : 'incorrect';

  setTimeout(() => {
    buttonState.value = null;
  }, 1000);

  setTimeout(() => {
    if (isCorrect.value && props.item) {
      const itemIndex = itensBanco.findIndex((item) => item.id === props.item.id);
      if (itemIndex !== -1) {
        itensBanco[itemIndex].coletado = true;
        itensBanco[itemIndex].imagem = getItemImage(props.item.id);
        console.log("Imagem: " + itensBanco[itemIndex].imagem);
        console.log("Item coletado:", itensBanco[itemIndex].coletado);

        if (inventarioRef.value) {
          inventarioRef.value.atualizarInventario(); 
        }
        closePopup();
      }
    }
  }, 1000);
};

const closePopup = () => {
  emit("update:showPopup", false);
};

const similarItems = computed(() => {
  if (!props.item) return [];
  return itensBanco.filter(
    (bancoItem) => bancoItem.tipo === props.item.tipo && bancoItem.id !== props.item.id
  );
});

</script>

<template>
  <div>
    <div class="container" v-if="props.showPopup">
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
