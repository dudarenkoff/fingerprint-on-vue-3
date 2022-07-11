<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

import type { Ref } from 'vue'

const getVisitor = async () => {
  const fp = await FingerprintJS.load()
  return await fp.get()
}

const visitorId: Ref<string> = ref('0')

onMounted(async () => {
  const visitor = await getVisitor()
  visitorId.value = visitor.visitorId
})
</script>

<template>
  <p class="fp_right">your current id is :</p>
  <p class="fp_left">{{ visitorId }}</p>
</template>

<style lang="scss">
.fp {
  &_left {
    text-align: left;
  }
  &_right {
    text-align: right;
  }
}
</style>
