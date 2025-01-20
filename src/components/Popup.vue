<template>
  <div class="popup">
    <div class="popup-content">
      <span class="close" @click="$emit('close')">&times;</span>
      <p>Item coletado!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup'
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
}
</style>
