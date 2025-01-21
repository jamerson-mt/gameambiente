<script>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import { ref } from 'vue';

const isPressed = ref(false);

const pressButton = () => {
  isPressed.value = true;
  setTimeout(() => {
    isPressed.value = false;
  }, 100);
};

export default {
  setup() {
    onMounted(() => {
      const audio = new Audio('/musics/music1.mp3');
      audio.play();
    });
  },
};
</script>

<template>
    <div class="welcome-container">
        <div class="overlay"></div>
        <h1>GEME SUSTENTABILIDADE</h1>
        <h2>Nos ajude a coletar os materiais e colocá-los em seus devidos lugares</h2>
        <div class="gameboy-container">
            <RouterLink to="/start" class="start-link gameboy-button">
                Iniciar
                <span class="glow"></span>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;700&display=swap');

.welcome-container {
    position: relative;
    background-image: url('@/assets/floresta.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-family: 'Pixelify Sans', sans-serif;
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
    border-radius: 2rem;
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
  border-radius: 2rem;
  color: rgb(14, 14, 14);
  overflow: hidden;
  transition: all 0.3s ease;
}

.gameboy-button:hover {
    background-color: #9bbc0f;
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
