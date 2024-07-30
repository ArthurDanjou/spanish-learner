export default defineAppConfig({
  ui: {
    gray: 'neutral',
    primary: 'red',
    container: {
      constrained: 'max-w-xl',
      padding: 'px-4 sm:px-6 lg:px-8 py-4',
    },
    divider: {
      base: 'flex border-gray-700',
    },
  },
  icon: {
    collections: ['heroicons', 'ph'],
  },
})
