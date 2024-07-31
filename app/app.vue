<script lang="ts" setup>
useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
  title: 'Spanish Learning Process • By Arthur Danjou',
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <UContainer>
      <div class="bg-neutral-900 rounded-lg max-h-[96vh] h-[96vh] overflow-scroll p-4">
        <Verbs />
        <Words />
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
