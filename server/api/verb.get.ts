export default defineEventHandler(async () => {
  const verbs = await useDB().query.verbs.findMany()
  return verbs[Math.floor(Math.random() * verbs.length)]
})
