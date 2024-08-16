<script setup lang="ts">
const { data: verb, refresh: refreshVerbData } = await useAsyncData('verb', async () => $fetch('/api/verb'))

const revealedVerb = ref(false)
async function refreshVerb() {
  revealedVerb.value = false
  await refreshVerbData()
}
const mode = useCookie('mode')
</script>

<template>
  <UCard class="md:col-span-2 md:row-span-1">
    <template #header>
      <h1>Verbos</h1>
    </template>
    <div v-if="verb" class="space-y-4 flex flex-col justify-center">
      <div class="flex gap-2 items-center">
        <h3 class="text-neutral-500">
          Verbos:
        </h3>
        <h1 v-if="mode === 'Spanish'" class="font-bold">
          {{ verb.verb }}
        </h1>
        <h1 v-else class="font-bold p-1 rounded-md" :class="revealedVerb ? 'duration-300' : 'bg-gray-700 text-gray-700'">
          {{ verb.verb }}
        </h1>
      </div>
      <div class="flex gap-2 items-end">
        <h3 class="text-neutral-500">
          Typo:
        </h3>
        <h1 class="font-bold">
          -{{ verb.verb.slice(-2) }}
        </h1>
      </div>
      <div class="flex gap-2 items-center">
        <h3 class="text-neutral-500">
          Traduccion:
        </h3>
        <h1 v-if="mode === 'Spanish'" class="font-bold p-1 rounded-md" :class="revealedVerb ? 'duration-300' : 'bg-gray-700 text-gray-700'">
          {{ verb.translation }}
        </h1>
        <h1 v-else class="font-bold">
          {{ verb.translation }}
        </h1>
      </div>
      <UButton
        :color="revealedVerb ? 'green' : 'red'"
        variant="solid"
        :label="revealedVerb ? 'Change Verb' : 'Reveal Verb'"
        :block="true"
        @click.prevent="revealedVerb ? refreshVerb() : revealedVerb = true"
      />
    </div>
  </UCard>
</template>
