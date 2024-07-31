<script setup lang="ts">
const { data: verb, refresh: refreshVerbData } = await useAsyncData('verb', async () => $fetch('/api/verb'))

const revealedVerb = ref(false)
async function refreshVerb() {
  revealedVerb.value = false
  await refreshVerbData()
}
</script>

<template>
  <div v-if="verb" class="space-y-4 mx-auto flex flex-col justify-center">
    <div class="flex gap-2 items-end">
      <h3 class="text-neutral-500">
        Verbos:
      </h3>
      <h1 class="font-bold">
        {{ verb.verb }}
      </h1>
    </div>
    <div class="flex gap-2 items-end">
      <h3 class="text-neutral-500">
        Typo:
      </h3>
      <h1 class="font-bold">
        {{ verb.type }}
      </h1>
    </div>
    <div class="flex gap-2 items-end cursor-pointer" @click.prevent="revealedVerb = true">
      <h3 class="text-neutral-500">
        Traduccion:
      </h3>
      <h1 class="font-bold" :class="revealedVerb ? 'duration-300' : 'bg-black text-black'">
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
</template>

<style scoped>

</style>
