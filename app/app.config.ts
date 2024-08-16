export default defineAppConfig({
  ui: {
    gray: 'neutral',
    primary: 'red',
    container: {
      padding: 'px-4 sm:px-6 lg:px-8 py-4',
    },
    card: {
      background: 'bg-neutral-900',
      header: {
        base: 'uppercase font-bold tracking-widest text-white',
      },
    },
  },
  icon: {
    collections: ['heroicons', 'ph'],
  },
})
