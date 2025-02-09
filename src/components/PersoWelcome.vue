<script setup>
import { defineProps } from 'vue'

defineProps({
    image: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="character-container">
        <div class="image-container">
            <img :src="image" alt="Personagem" />
        </div>
    </div>
</template>

<style scoped>
.character-container {
    justify-content: center;
    align-items: center;
    height: 100%;
}

.image-container img {
    width: 100%;
    height: auto;
    opacity: 1;
}
</style>
