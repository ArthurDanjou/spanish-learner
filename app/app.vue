<script lang="ts" setup>
import { ModalColumns, ModalRows, VerbColumns, VerbRows } from '~~/types'

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
  title: 'Spanish Learning Process • By Arthur Danjou',
})

const { data: verb, refresh: refreshVerb } = await useAsyncData('verb', async () => $fetch('/api/verb'))
const { data: word, refresh: refreshWord } = await useAsyncData('word', async () => $fetch('/api/word'))

const revealedVerb = ref(false)
async function revealVerb() {
  revealedVerb.value = false
  await refreshVerb()
}

const revealedWord = ref(false)
async function revealWord() {
  revealedWord.value = false
  await refreshWord()
}
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <UContainer>
      <div class="bg-neutral-800 rounded-lg max-h-[96vh] h-[96vh] overflow-scroll">
        <div v-if="verb" class="space-y-4 h-1/2 w-2/3 mx-auto flex flex-col justify-center">
          <div class="flex gap-2 items-end">
            <h3 class="text-xl text-neutral-500">
              Verbos:
            </h3>
            <h1 class="text-3xl font-bold">
              {{ verb.verb }}
            </h1>
          </div>
          <div class="flex gap-2 items-end">
            <h3 class="text-xl text-neutral-500">
              Typo:
            </h3>
            <h1 class="text-3xl font-bold">
              {{ verb.type }}
            </h1>
          </div>
          <div class="flex gap-2 items-end cursor-pointer" @click.prevent="revealedVerb = true">
            <h3 class="text-xl text-neutral-500">
              Traducion:
            </h3>
            <h1 class="text-3xl font-bold" :class="revealedVerb ? '' : 'bg-black text-black'">
              {{ verb.translation }}
            </h1>
          </div>
          <UButton
            color="blue"
            variant="solid"
            label="Refresh"
            :block="true"
            @click.prevent="revealVerb()"
          />
        </div>
        <UDivider class="mt-8 mb-4" label="Palabras" />
        <div v-if="word" class="space-y-4 h-1/2 w-2/3 mx-auto flex flex-col justify-center">
          <div class="flex gap-2 items-end">
            <h3 class="text-xl text-neutral-500">
              Palabra:
            </h3>
            <h1 class="text-3xl font-bold">
              {{ word.word }}
            </h1>
          </div>
          <div class="flex gap-2 items-end">
            <h3 class="text-xl text-neutral-500">
              Tradución:
            </h3>
            <h1 class="text-3xl font-bold">
              {{ word.translation }}
            </h1>
          </div>
          <UButton
            color="red"
            variant="solid"
            label="Refresh"
            :block="true"
            @click.prevent="revealWord()"
          />
        </div>
        <UDivider class="mt-8 mb-4" label="Ser, Estar, Tener, Haber" />
        <UTable :columns="ModalColumns" :rows="ModalRows" />
        <UDivider class="mt-8 mb-4" label="Terminaisons" />
        <UTable :columns="VerbColumns" :rows="VerbRows" />
      </div>
    </UContainer>
  </div>
  <NuxtPage />
</template>

<style>
body {
  font-family: 'DM Sans', sans-serif;
  @apply h-full w-full text-neutral-300;
}
</style>
