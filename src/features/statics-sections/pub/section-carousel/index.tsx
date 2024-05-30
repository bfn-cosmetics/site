'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { cn } from '@/shared/lib/class-names'
import { useDotsButton } from '@/shared/lib/embla'
import { MEDIA_DESK, MEDIA_TABLE } from '@/shared/modal/constant.media'

import styles from './section.module.scss'

export function SectionCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			watchDrag: false
		},
		[Autoplay({ delay: 6000 })]
	)

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotsButton(emblaApi)

	return (
		<section className='overflow-hidden'>
			<div
				className='embla relative'
				ref={emblaRef}
			>
				<div className='embla__container'>
					<div className={cn(styles.slide, 'pointer-events-none relative')}>
						<picture className='absolute left-0 top-0 h-full w-full'>
							<source
								srcSet='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png, https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png x2, https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png x3'
								media={`(min-width: ${MEDIA_DESK}px)`}
							/>
							<source
								srcSet='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-tb.png'
								media={`(min-width: ${MEDIA_TABLE}px)`}
							/>
							<img
								src='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-phone.png'
								alt=''
								className='h-full w-full object-cover'
							/>
						</picture>
					</div>
					<div className={cn(styles.slide, 'pointer-events-none relative')}>
						<picture className='absolute left-0 top-0 h-full w-full'>
							<source
								srcSet='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png, https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png x2, https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png x3'
								media={`(min-width: ${MEDIA_DESK}px)`}
							/>
							<source
								srcSet='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-tb.png'
								media={`(min-width: ${MEDIA_TABLE}px)`}
							/>
							<img
								src='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-phone.png'
								alt=''
								className='h-full w-full object-cover'
							/>
						</picture>
					</div>
					<div className={cn(styles.slide, 'pointer-events-none relative')}>
						<picture className='absolute left-0 top-0 h-full w-full'>
							<source
								srcSet='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png, https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png x2, https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-comp.png x3'
								media={`(min-width: ${MEDIA_DESK}px)`}
							/>
							<source
								srcSet='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-tb.png'
								media={`(min-width: ${MEDIA_TABLE}px)`}
							/>
							<img
								src='https://bfn-cosmetics.github.io/site/assets/home/slider/slide-1-phone.png'
								alt=''
								className='h-full w-full object-cover'
							/>
						</picture>
					</div>
				</div>
				<div
					className={cn(
						styles.dots,
						'absolute left-1/2 z-[1] flex -translate-x-1/2 justify-center text-accent'
					)}
				>
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							className={cn(
								styles.buttonDot,
								selectedIndex === index && styles.buttonDotActive
							)}
							onClick={onDotButtonClick.bind(null, index)}
							style={
								{
									transform: 'rotate(-90deg)'
								} as React.CSSProperties
							}
						>
							<SVGDot />
						</button>
					))}
				</div>
			</div>
		</section>
	)
}

function SVGDot({
	className,
	style
}: {
	className?: string
	style?: React.CSSProperties
}) {
	return (
		<svg
			width='35'
			height='35'
			viewBox='0 0 35 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			style={style}
		>
			<circle
				cx='17.5'
				cy='17.5'
				r='17'
				stroke='currentColor'
				strokeDasharray='106.76'
				style={{
					strokeDashoffset: 'var(--stroke-offset)'
				}}
			/>
			<circle
				cx='17.5'
				cy='17.5'
				r='6.5'
				fill='currentColor'
			/>
		</svg>
	)
}
