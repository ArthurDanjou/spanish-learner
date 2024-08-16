<script setup lang="ts">
const { data: word, refresh: refreshWordData } = await useAsyncData('word', async () => $fetch('/api/word'))

const revealedWord = ref(false)
async function refreshWord() {
  revealedWord.value = false
  await refreshWordData()
}

const mode = useCookie('mode')
</script>

<template>
  <UCard class="md:col-span-2 md:row-span-1">
    <template #header>
      <h1>Palabras</h1>
    </template>
    <div v-if="word" class="space-y-4 mx-auto flex flex-col justify-center">
      <div class="flex gap-2 items-center">
        <h3 class="text-neutral-500">
          Palabra:
        </h3>
        <h1 v-if="mode === 'Spanish'" class="font-bold">
          {{ word.word }}
        </h1>
        <h1 v-else class="font-bold p-1 rounded-md" :class="revealedWord ? 'duration-300' : 'bg-gray-700 text-gray-700'">
          {{ word.word }}
        </h1>
      </div>
      <div class="flex gap-2 items-center cursor-pointer" @click.prevent="revealedWord = true">
        <h3 class="text-neutral-500">
          Traducción:
        </h3>
        <h1 v-if="mode === 'Spanish'" class="font-bold p-1 rounded-md" :class="revealedWord ? 'duration-300' : 'bg-gray-700 text-gray-700'">
          {{ word.translation }}
        </h1>
        <h1 v-else class="font-bold">
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
  </UCard>
</template>
