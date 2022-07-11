<script setup lang="ts">
import FingerprintInfo from '@/components/FingerprintInfo.vue'
</script>

<template>
  <div class="container">
    <fingerprint-info />
  </div>
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  align-items: center;
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 30px;
  background-color: #000;
  color: #fff;
  font-size: 30px;
}
</style>
