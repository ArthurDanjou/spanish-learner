<script setup lang="ts">
const columns = [
  {
    key: 'french',
    label: 'French',
  },
  {
    key: 'proche',
    label: 'Proche',
  },
  {
    key: 'loin',
    label: 'Loin',
  },
  {
    key: 'lointain',
    label: 'Très éloigné',
  },
]

const rows = [
  {
    french: 'ce / cet',
    proche: 'este',
    loin: 'ese',
    lointain: 'aquel',
  },
  {
    french: 'cette',
    proche: 'esta',
    loin: 'esa',
    lointain: 'aquella',
  },
  {
    french: 'ces',
    proche: 'estos / estas',
    loin: 'esos / esas',
    lointain: 'aquellos / aquellas',
  },
]
</script>

<template>
  <UCard class="md:col-span-4">
    <template #header>
      <h1>Démonstratifs</h1>
    </template>
    <UTable :rows="rows" :columns="columns" />
  </UCard>
</template>
