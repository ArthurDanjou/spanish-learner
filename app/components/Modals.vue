<script setup lang="ts">
const ModalColumns = [
  {
    key: 'ser',
    label: 'Ser',
  },
  {
    key: 'estar',
    label: 'Estar',
  },
  {
    key: 'tener',
    label: 'Tener',
  },
  {
    key: 'haber',
    label: 'Haber',
  },
]

const ModalRows = [
  {
    ser: 'soy',
    estar: 'estoy',
    tener: 'tengo',
    haber: 'he',
  },
  {
    ser: 'eres',
    estar: 'estás',
    tener: 'tienes',
    haber: 'has',
  },
  {
    ser: 'es',
    estar: 'está',
    tener: 'tiene',
    haber: 'ha',
  },
  {
    ser: 'somos',
    estar: 'estamos',
    tener: 'tenemos',
    haber: 'hemos',
  },
  {
    ser: 'sois',
    estar: 'estáis',
    tener: 'tenéis',
    haber: 'habéis',
  },
  {
    ser: 'son',
    estar: 'están',
    tener: 'tienen',
    haber: 'han',
  },
]
</script>

<template>
  <UDivider class="mt-12 mb-8" size="lg" label="Ser, Estar, Tener, Haber" />
  <UTable :columns="ModalColumns" :rows="ModalRows" />
</template>

<style scoped>

</style>
