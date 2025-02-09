<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import personagens from '@/data/personagens';
import PersoWelcome from '@/components/PersoWelcome.vue';

const indiceAtual = ref(0);

const proximoPersonagem = () => {
    indiceAtual.value = (indiceAtual.value + 1) % personagens.length;
};

const personagemAnterior = () => {
    indiceAtual.value = (indiceAtual.value - 1 + personagens.length) % personagens.length;
};

</script>

<template>
    <div class="welcome-container">
        <div class="overlay"></div>

        <div class="content">
            <h1>PERSONAGENS</h1>
        </div>

        <div class="container">
            <h2>{{ personagens[indiceAtual].nome }}</h2>
            <div class="personagem">
                <PersoWelcome :image="personagens[indiceAtual].imagem" />
            </div>

            <div class="botoes">
                <button @click="personagemAnterior">Anterior</button>
                <button @click="proximoPersonagem">Próximo</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&display=swap');

.welcome-container {
    position: relative;
    background-image: url('@/assets/fundo-floresta.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    font-family: 'Pixelify Sans', sans-serif;
    padding: 10px;
}

h1 {
    font-size: 5em;
    margin-bottom: 1px;
}

.personagem {
    width: 25%;
    margin: 0 auto;
    position: relative;
    z-index: 3;
}

.botoes {
    display: flex;
    justify-content: center;
    margin-top: 5px;
}

button {
    width: 10rem;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: yellow;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
}

button:hover {
    background-color: orange;
}
</style>
