import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import { cn } from '@/shared/lib/class-names'

import './globals.scss'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

const raleway = Raleway({
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
	weight: ['100', '300', '400']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={cn(raleway.className, 'text-default-words bg-background')}
			>
				{children}
			</body>
		</html>
	)
}
