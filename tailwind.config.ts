import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			screens: {
				DEFAULT: '100%'
			}
		},
		screens: {
			xs: '480px',
			sm: '600px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1440px'
		},
		extend: {
			spacing: {
				'container-xs': 'calc(30vw / var(--coff-xs))',
				'container-sm': 'calc(30vw / var(--coff-sm))',
				'container-md': 'calc(30vw / var(--coff-md))',
				'container-lg': 'calc(70vw / var(--coff-lg))',
				'container-xl': 'calc(160vw / var(--coff-xl))'
				// 'container-2xl': 'calc(160vw / var(--coff-2xl))'
			},
			colors: {
				'reverse-words': '#FFFFFF',
				'default-words': '#2F3338',
				background: '#FEFDFC',
				accent: '#CB9E76'
			}
		}
	},
	plugins: []
}
export default config
