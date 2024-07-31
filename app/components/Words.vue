<script setup lang="ts">
const { data: word, refresh: refreshWordData } = await useAsyncData('word', async () => $fetch('/api/word'))
const revealedWord = ref(false)
async function refreshWord() {
  revealedWord.value = false
  await refreshWordData()
}
</script>

<template>
  <UDivider class="mt-12 mb-8" size="lg" label="Palabras" />
  <div v-if="word" class="space-y-4 mx-auto flex flex-col justify-center">
    <div class="flex gap-2 items-end">
      <h3 class="text-neutral-500">
        Palabra:
      </h3>
      <h1 class="font-bold">
        {{ word.word }}
      </h1>
    </div>
    <div class="flex gap-2 items-end">
      <h3 class="text-neutral-500">
        Typo:
      </h3>
      <h1 class="font-bold">
        {{ word.type }}
      </h1>
    </div>
    <div class="flex gap-2 items-end cursor-pointer" @click.prevent="revealedWord = true">
      <h3 class="text-neutral-500">
        Traducción:
      </h3>
      <h1 class="font-bold" :class="revealedWord ? 'duration-300' : 'bg-black text-black'">
        {{ word.translation }}
      </h1>
    </div>
    <UButton
      :color="revealedWord ? 'green' : 'blue'"
      variant="solid"
      :label="revealedWord ? 'Change Word' : 'Reveal Word'"
      :block="true"
      @click.prevent="revealedWord ? refreshWord() : revealedWord = true"
    />
  </div>
</template>

<style scoped>

</style>
