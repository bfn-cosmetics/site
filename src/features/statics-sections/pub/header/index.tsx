import Link from 'next/link'

import { cn } from '@/shared/lib/class-names'
import { Image } from '@/shared/lib/next'

import styles from './header.module.scss'

export function Header() {
	return (
		<header className={cn(styles.wrapper)}>
			<div
				className={cn(
					styles.header,
					'container grid items-center uppercase leading-[1.1428]',
					'absolute left-0 right-0 top-0 z-30',
					'text-reverse-words'
				)}
			>
				<div className={cn(styles.leftActions, 'flex items-center')}>
					<button className={cn(styles.burger, 'flex items-center uppercase')}>
						<SVGBurger className={cn('h-[.76em] w-[1.19em]')} />
						Меню
					</button>
					<Link
						href='/'
						className='hidden sm:block'
					>
						Магазин
					</Link>
				</div>
				<div className={cn('relative aspect-[135/91] shrink-0')}>
					<Image
						src='/assets/logo.png'
						alt=''
						fill
						sizes='135px'
						className='shrink-0 object-cover'
					/>
				</div>
				<div
					className={cn(styles.rightActions, 'flex items-center justify-end')}
				>
					<Link
						href='/'
						className='hidden md:block'
					>
						+7 (925) 230 85 25
					</Link>
					<div className={cn(styles.listButtons, 'flex')}>
						<button className='relative'>
							<SVGFavorite className={cn(styles.listButtonsIcon)} />
						</button>
						<button className='relative'>
							<SVGUser className={cn(styles.listButtonsIcon)} />
						</button>
						<button className='relative'>
							<SVGStore className={cn(styles.listButtonsIcon)} />
							<span
								className={cn(
									styles.listButtonsNum,
									'absolute flex items-center justify-center rounded-full bg-accent text-center font-light leading-none text-reverse-words'
								)}
							>
								10
							</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

function SVGBurger({ className }: { className?: string }) {
	return (
		<svg
			width='25'
			height='16'
			viewBox='0 0 25 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			style={{ strokeWidth: 2 }}
		>
			<path
				d='M25 1H0M25 8H0M25 15H0'
				stroke='currentColor'
			/>
		</svg>
	)
}

function SVGFavorite({ className }: { className?: string }) {
	return (
		<svg
			width='37'
			height='32'
			viewBox='0 0 37 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			style={{ strokeWidth: 2 }}
		>
			<path
				d='M5.26995 4.40204C4.55029 5.16357 3.97942 6.06765 3.58994 7.06264C3.20046 8.05764 3 9.12406 3 10.201C3 11.278 3.20046 12.3444 3.58994 13.3394C3.97942 14.3344 4.55029 15.2385 5.26995 16L18.5 30L31.7301 16C33.1835 14.462 34 12.3761 34 10.201C34 8.02599 33.1835 5.94003 31.7301 4.40204C30.2767 2.86405 28.3054 2.00002 26.25 2.00002C24.1946 2.00002 22.2233 2.86405 20.7699 4.40204L18.5 6.80402L16.2301 4.40204C15.5105 3.6405 14.6561 3.03641 13.7158 2.62427C12.7756 2.21213 11.7678 2 10.75 2C9.73229 2 8.72451 2.21213 7.78423 2.62427C6.84395 3.03641 5.9896 3.6405 5.26995 4.40204Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function SVGUser({ className }: { className?: string }) {
	return (
		<svg
			width='37'
			height='32'
			viewBox='0 0 37 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M32.0743 24.8798L32.5416 24.7019L32.0743 24.8798ZM18.5 15.01V15.51V15.01ZM4.9258 24.8798L4.45851 24.7019L4.9258 24.8798ZM3.84748 29.8178L4.34633 29.8518L3.84748 29.8178ZM4.9608 30.9982V31.4982H4.9608L4.9608 30.9982ZM33.1526 29.8178L32.6537 29.8518L33.1526 29.8178ZM32.0393 30.9982V30.4982V30.9982ZM33.6514 29.7839C33.5328 28.0398 33.159 26.324 32.5416 24.7019L31.607 25.0576C32.1888 26.5862 32.5417 28.2049 32.6537 29.8518L33.6514 29.7839ZM32.5416 24.7019C31.7813 22.7046 30.666 20.8872 29.2575 19.3545L28.5211 20.0311C29.8413 21.4677 30.8905 23.1754 31.607 25.0576L32.5416 24.7019ZM29.2575 19.3545C27.8488 17.8217 26.1743 16.6033 24.3281 15.7712L23.9172 16.6828C25.6362 17.4577 27.2011 18.5947 28.5211 20.0311L29.2575 19.3545ZM24.3281 15.7712C22.4818 14.939 20.5013 14.51 18.5 14.51V15.51C20.3577 15.51 22.1983 15.9081 23.9172 16.6828L24.3281 15.7712ZM18.5 14.51C16.4988 14.51 14.5182 14.939 12.6719 15.7712L13.0829 16.6828C14.8018 15.9081 16.6424 15.51 18.5 15.51V14.51ZM12.6719 15.7712C10.8258 16.6033 9.15122 17.8217 7.74261 19.3545L8.47892 20.0311C9.79898 18.5947 11.3638 17.4577 13.0829 16.6828L12.6719 15.7712ZM7.74261 19.3545C6.33408 20.8872 5.21877 22.7046 4.45851 24.7019L5.39309 25.0576C6.10957 23.1754 7.15877 21.4677 8.47892 20.0311L7.74261 19.3545ZM4.45851 24.7019C3.84105 26.324 3.46728 28.0398 3.34863 29.7839L4.34633 29.8518C4.45836 28.2049 4.81122 26.5863 5.39309 25.0576L4.45851 24.7019ZM3.34863 29.7839C3.28397 30.7345 4.04533 31.4982 4.9608 31.4982V30.4982C4.60224 30.4982 4.32244 30.2029 4.34633 29.8518L3.34863 29.7839ZM32.6537 29.8518C32.6776 30.2029 32.3978 30.4982 32.0393 30.4982V31.4982C32.9547 31.4982 33.7161 30.7345 33.6514 29.7839L32.6537 29.8518ZM4.9608 31.4982L32.0393 31.4982V30.4982L4.9608 30.4982L4.9608 31.4982ZM24.7241 8.22414C24.7241 11.6616 21.9375 14.4483 18.5 14.4483V15.4483C22.4897 15.4483 25.7241 12.2139 25.7241 8.22414H24.7241ZM18.5 14.4483C15.0625 14.4483 12.2758 11.6616 12.2758 8.22414H11.2758C11.2758 12.2139 14.5102 15.4483 18.5 15.4483V14.4483ZM12.2758 8.22414C12.2758 4.78664 15.0625 2 18.5 2V1C14.5102 1 11.2758 4.23436 11.2758 8.22414H12.2758ZM18.5 2C21.9375 2 24.7241 4.78664 24.7241 8.22414H25.7241C25.7241 4.23436 22.4897 1 18.5 1V2Z'
				stroke='currentColor'
			/>
		</svg>
	)
}

function SVGStore({ className }: { className?: string }) {
	return (
		<svg
			width='37'
			height='32'
			viewBox='0 0 37 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			style={{ strokeWidth: 2 }}
		>
			<path
				d='M1.01083 29.3931L3.12943 12.0228C3.20064 11.4389 3.69633 11 4.2845 11H32.7155C33.3037 11 33.7994 11.4389 33.8706 12.0228L35.9892 29.3931C36.0933 30.2469 35.4331 31 34.5805 31H19.1098H2.41945C1.56686 31 0.906692 30.2469 1.01083 29.3931Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.0222 13C11.8259 9 12.8466 1 18.4996 1C24.1526 1 25.1741 9 24.9778 13'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</svg>
	)
}
