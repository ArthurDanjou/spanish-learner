<script lang="ts" setup>
useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
  title: 'Spanish Learning Process • By Arthur Danjou',
})

const mode = useCookie('mode')
mode.value = mode.value || 'Spanish'
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <UContainer>
      <div class="my-4 flex items-center justify-between">
        <p>Mode: {{ mode }}</p>
        <UButton
          :color="mode === 'Spanish' ? 'cyan' : 'yellow'"
          variant="solid"
          :label="mode === 'Spanish' ? 'Switch to French' : 'Switch to Spanish'"
          @click="mode === 'Spanish' ? mode = 'French' : mode = 'Spanish'"
        />
      </div>
      <div class="bg-neutral-900 rounded-lg max-h-[90vh] h-[90vh] overflow-scroll p-4">
        <Verbs />
        <Words />
        <Demonstratifs />
        <Modals />
        <Terminaisons />
        <Prononciation />
      </div>
    </UContainer>
  </div>
  <NuxtPage />
</template>

<style>
body {
  font-family: 'DM Sans', sans-serif;
  @apply h-full w-full text-neutral-400;
}
</style>
