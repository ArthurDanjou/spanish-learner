import { z, zh } from 'h3-zod'

export default defineEventHandler(async (event) => {
  const ai = hubAI()

  const { source_lang, target_lang, text } = await zh.useValidatedBody(event, z.object({
    source_lang: z.enum(['French', 'Spanish']),
    target_lang: z.enum(['French', 'Spanish']),
    text: z.string(),
  }))

  return await ai.run('@cf/meta/m2m100-1.2b', {
    source_lang: source_lang.toLowerCase(),
    target_lang: target_lang.toLowerCase(),
    text,
  })
})
