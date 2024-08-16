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
      <div class="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-max">
        <UCard
          class="order-first"
          @click="mode === 'Spanish' ? mode = 'French' : mode = 'Spanish'"
        >
          <p class="text-lg font-bold uppercase" :class="mode === 'Spanish' ? 'text-red-500' : 'text-blue-500'">
            Mode: {{ mode }}
          </p>
        </UCard>
        <Translation />
        <Verbs />
        <Words />
        <Modals />
        <Demonstratifs />
        <Prononciation />
        <Terminaisons />
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
