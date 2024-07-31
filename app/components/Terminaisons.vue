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
  <UDivider class="mt-12 mb-8" size="lg" label="Terminaisons" />
  <UTable :columns="VerbColumns" :rows="VerbRows" />
</template>

<style scoped>

</style>
