<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

import type { Ref } from 'vue'

const getVisitor = async () => {
  const fp = await FingerprintJS.load()
  return await fp.get()
}

const visitorId: Ref<string> = ref('')

onMounted(async () => {
  const visitor = await getVisitor()
  visitorId.value = visitor.visitorId
})
</script>

<template>
  <h2>{{ visitorId }}</h2>
</template>
