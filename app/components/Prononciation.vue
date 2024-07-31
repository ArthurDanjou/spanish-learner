<script setup lang="ts">
const PrononciationRows = [
  {
    sound: 'ca co cu',
    pronunciation: '/k/',
    ejemplos: 'casa, coco, cucaracha',
  },
  {
    sound: 'ce ci',
    pronunciation: '/θ/',
    ejemplos: 'cena, cine',
  },
  {
    sound: 'ga go',
    pronunciation: '/g/',
    ejemplos: 'gato, gorra',
  },
  {
    sound: 'ge gi',
    pronunciation: '/x/',
    ejemplos: 'gente, gira',
  },
  {
    sound: 'z',
    pronunciation: '/θ/',
    ejemplos: 'zapato',
  },
  {
    sound: 's',
    pronunciation: '/s/',
    ejemplos: 'sol',
  },
  {
    sound: 'rr',
    pronunciation: '/r/',
    ejemplos: 'perro',
  },
  {
    sound: 'j',
    pronunciation: '/x/',
    ejemplos: 'jirafa',
  },
  {
    sound: 'll',
    pronunciation: '/ʎ/',
    ejemplos: 'llama',
  },
  {
    sound: 'e',
    pronunciation: '/e/',
    ejemplos: 'elefante',
  },
  {
    sound: 'ñ',
    pronunciation: '/ɲ/',
    ejemplos: 'niño',
  },
]
</script>

<template>
  <UDivider class="mt-12 mb-8" size="lg" label="Prononciation" />
  <UTable :rows="PrononciationRows" />
</template>

<style scoped>

</style>
