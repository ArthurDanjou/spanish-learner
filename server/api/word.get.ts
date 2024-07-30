export default defineEventHandler(async () => {
  const words = await useDB().query.words.findMany()
  return words[Math.floor(Math.random() * words.length)]
})
