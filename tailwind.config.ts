import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },
      maxWidth: {
        app: '700px',
      },
      colors: {
        lazinho: '#00d3c3',
      },
    },
  },
  plugins: [],
}
export default config
