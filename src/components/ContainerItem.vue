<template>
  <div>
    <!-- ...existing code... -->
    <div class="popup-container">
      <div class="popup-content">
        <h3>{{ itemDescription }}</h3>
        <p>{{ question }}</p>
        <div class="options">
          <button @click="selectOption(option)" v-for="option in options" :key="option.id">{{ option.text }}</button>
        </div>
        <button @click="closePopup">Fechar</button>
      </div>
    </div>
    <!-- ...existing code... -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {

    const props = {
      itemDescription: {
        type: String,
        required: false,
        default: 'Descrição do item'
      },
        question: {
            type: String,
            required: false,
            default: 'Qual é a sua resposta?'
        },
        options: {
            type: Array,
            required: false,
            default: () => [
                { id: 1, text: 'Opção 1' },
                { id: 2, text: 'Opção 2' },
                { id: 3, text: 'Opção 3' }
            ]
        }

    };
   
   
  

    const selectOption = (option) => {
      console.log('Opção selecionada:', option);
      closePopup();
    }; 

    return {
      showPopup,
      itemDescription,
      question,
      options,
      openPopup,
      closePopup,
      selectOption
    };
  }
};
</script>

<style scoped>
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.options button {
  margin: 5px;
}
</style>
