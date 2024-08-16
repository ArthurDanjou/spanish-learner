<script setup lang="ts">
const VerbRows = [
  {
    person: 'yo',
    er: 'o',
    ir: 'o',
    ar: 'o',
  },
  {
    person: 'tu',
    er: 'es',
    ir: 'es',
    ar: 'as',
  },
  {
    person: 'el/ella/usted',
    er: 'e',
    ir: 'e',
    ar: 'a',
  },
  {
    person: 'nosotros/nosotras',
    er: 'emos',
    ir: 'imos',
    ar: 'amos',
  },
  {
    person: 'vosotros/vosotras',
    er: 'éis',
    ir: 'ís',
    ar: 'áis',
  },
  {
    person: 'ellos/ellas/ustedes',
    er: 'en',
    ir: 'en',
    ar: 'an',
  },
]

const VerbColumns = [
  {
    key: 'person',
  },
  {
    key: 'er',
    label: '-ER',
  },
  {
    key: 'ir',
    label: '-IR',
  },
  {
    key: 'ar',
    label: '-AR',
  },
]
</script>

<template>
  <UCard class="md:col-span-4 md:row-span-2">
    <template #header>
      <h1>Terminaisons</h1>
    </template>
    <UTable :columns="VerbColumns" :rows="VerbRows" />
  </UCard>
</template>
