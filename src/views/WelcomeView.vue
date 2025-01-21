<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="welcome-container">
        <div class="overlay"></div>
        <h1>GEME SUSTENTABILIDADE</h1>
        <h2>Nos ajude a coletar os materiais e colocá-los em seus devidos lugares</h2>
        <RouterLink to="/start" class="start-link">Iniciar</RouterLink>
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
</style>
