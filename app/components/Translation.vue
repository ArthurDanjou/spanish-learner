<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const mode = useCookie('mode')
const sent = ref(false)

const schema = z.object({
  text: z.string(),
})

type Schema = z.output<typeof schema>
const state = reactive({
  text: undefined,
})

const response = ref()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const body = {
    text: event.data.text,
    target_lang: mode.value === 'Spanish' ? 'French' : 'Spanish',
    source_lang: mode.value === 'Spanish' ? 'Spanish' : 'French',
  }
  sent.value = true
  response.value = await $fetch('/api/translate', {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

function resetForm() {
  response.value = null
  sent.value = false
  state.text = undefined
}
</script>

<template>
  <UCard class="md:row-span-1 md:col-span-5 order-first">
    <template #header>
      <h1>Translation</h1>
    </template>
    <template #default>
      <UForm v-if="!sent" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Text to translate" name="text">
          <UTextarea v-model="state.text" type="text" />
        </UFormGroup>
        <UButton type="submit">
          Translate in {{ mode === 'Spanish' ? 'French' : 'Spanish' }}
        </UButton>
      </UForm>
      <div v-else>
        <div v-if="response" class="mb-4 flex gap-2">
          <h1 class="font-bold">
            Translated Text:
          </h1>
          <p class="italic">
            {{ response.translated_text }}
          </p>
        </div>
        <h1 v-else class="mb-4 italic">
          Loading translation...
        </h1>
        <UButton label="Translate again" @click.prevent="resetForm()" />
      </div>
    </template>
  </UCard>
</template>
