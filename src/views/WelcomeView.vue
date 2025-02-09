<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import { ref } from 'vue';
import PersoWelcome from '@/components/PersoWelcome.vue';

import asunaImg from '@/assets/personagens/per2.gif';

const isPressed = ref(false);

const pressButton = () => {
  isPressed.value = true;
  setTimeout(() => {
    isPressed.value = false;
  }, 100);
};

  onMounted(() => {
    const audio = new Audio('/musics/music1.mp3');
    audio.play();
  });
</script>

<template>
    <div class="welcome-container">
        <div class="overlay"></div>

        <div class="content">
            <h1>GAME AMBIENTE</h1>
        </div>

        <div class="main-content">
            <div class="options">
              <RouterLink to="/start" class="start-link gameboy-button" @click="pressButton">
                Continuar
                <span class="glow" :class="{ active: isPressed }"></span>
              </RouterLink>
              <RouterLink to="/start" class="start-link gameboy-button" @click="pressButton">
                Novo Jogo
                <span class="glow" :class="{ active: isPressed }"></span>
              </RouterLink>
              <RouterLink to="/personagens" class="start-link gameboy-button" @click="pressButton">
                Personagens
                <span class="glow" :class="{ active: isPressed }"></span>
              </RouterLink>
            </div>
            <div class="personagem">
                <PersoWelcome :image="asunaImg" />
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
    margin: 10px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
}

.personagem {
    width: 30%;
    margin: 0 auto;
    position: relative;
    top: -3rem;
    z-index: 3; 
}

.main-content {
    display: flex;
    flex-grow: 1;
    margin-top: 2rem;
}

h1, h2 {
    flex-grow: 1;
}

.options {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

h1,
h2,
.start-link {
    text-transform: uppercase;
    position: relative;
    z-index: 2;
}

h1 {
    font-size: 5em;
    margin-bottom: 0.1em;
}

h2 {
    font-size: 2em;
    margin-bottom: 1em;
}

.start-link {
    display: flex;
    background-color: yellow;
    width: 30rem;
    height: 4rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    cursor: pointer;
    text-decoration: none;
    color: black;
    margin-top: 1em;
}

.gameboy-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gameboy-button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.5rem;
  text-decoration: none;
  color: #0f380f;
  background-color: #ccbf07;
  border: 2px solid #0f380f;
  color: rgb(14, 14, 14);
  overflow: hidden;
  transition: all 0.3s ease;
}

.gameboy-button:hover {
    background-color: #6c8306;
}

.gameboy-button:active {
  transform: translateY(2px);
}

.glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(45deg);
  animation: glow-animation 3s infinite;
  pointer-events: none;
}

@keyframes glow-animation {
  0% {
    transform: rotate(180deg) translateX(-100%);
  }
  100% {
    transform: rotate(180deg) translateX(100%);
  }
}

.gameboy-button:active .glow {
  animation-play-state: paused;
}
</style>
