import localFont from 'next/font/local'

export const MadeTheArtist = localFont({
	variable: '--font-accent',
	src: [
		{
			path: './assets/MADETheArtistScript.woff',
			weight: '400',
			style: 'normal'
		},
		{
			path: './assets/MADETheArtistScript.woff2',
			weight: '400',
			style: 'normal'
		}
	]
})
