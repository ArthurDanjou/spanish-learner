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
  <UDivider class="mt-12 mb-8" size="lg" label="Démonstratifs" />
  <UTable :rows="rows" :columns="columns" />
</template>
