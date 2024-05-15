import localFont from 'next/font/local'

export const RalewayWeb = localFont({
	src: [
		{
			path: './assets/Raleway-Regular.woff',
			weight: '400',
			style: 'normal'
		},
		{
			path: './assets/Raleway-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: './assets/Raleway-Light.woff',
			weight: '300',
			style: 'normal'
		},
		{
			path: './assets/Raleway-Light.woff2',
			weight: '300',
			style: 'normal'
		},
		{
			path: './assets/Raleway-Thin.woff',
			weight: '100',
			style: 'normal'
		},
		{
			path: './assets/Raleway-Thin.woff2',
			weight: '100',
			style: 'normal'
		}
	]
})
