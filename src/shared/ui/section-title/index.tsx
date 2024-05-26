'use client'

import { useEffect, useId, useState } from 'react'

import { cn } from '../../lib/class-names'

export function SectionTitle({
	className,
	words
}: {
	className?: string
	words: {
		word: string
		media?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
		stroke?: boolean
	}[]
}) {
	const [showSVG, setShowSVG] = useState(false)
	useEffect(() => {
		setShowSVG(true)
	}, [])
	return (
		<h2
			className={cn(
				className,
				'title-section title-section-sizes',
				'pointer-events-none flex flex-col items-start'
			)}
		>
			{words.map((data, index) => {
				return (
					<SectionTitleSpan
						key={index}
						data={data}
						showSVG={showSVG}
					/>
				)
			})}
		</h2>
	)
}

function SectionTitleSpan({
	data,
	showSVG
}: {
	data: {
		word: string
		media?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
		stroke?: boolean
	}
	showSVG: boolean
}) {
	const idSVGMask = useId()
	return (
		<span>
			{data.stroke && showSVG && (
				<svg
					className={cn(
						!data.media && 'opacity-100',
						data.media &&
							`opacity-0 data-[media=sm]:sm:opacity-100 data-[media=md]:md:opacity-100 data-[media=lg]:lg:opacity-100 data-[media=xl]:xl:opacity-100 data-[media=2xl]:2xl:opacity-100`
					)}
					data-media={data.media}
				>
					<text y='0.85em'>{data.word}</text>
				</svg>
			)}
			<span
				className={cn(
					data.stroke && showSVG && !data.media && 'opacity-0',
					data.stroke &&
						showSVG &&
						data.media &&
						`opacity-100 data-[media=sm]:sm:opacity-0 data-[media=md]:md:opacity-0 data-[media=lg]:lg:opacity-0 data-[media=xl]:xl:opacity-0 data-[media=2xl]:2xl:opacity-0`
				)}
				data-media={data.media}
			>
				{data.word}
			</span>
			{data.stroke && showSVG && (
				<svg
					className={cn(
						!data.media && 'opacity-100',
						data.media &&
							`opacity-0 data-[media=sm]:sm:opacity-100 data-[media=md]:md:opacity-100 data-[media=lg]:lg:opacity-100 data-[media=xl]:xl:opacity-100 data-[media=2xl]:2xl:opacity-100`
					)}
					data-media={data.media}
				>
					<defs>
						<mask id={idSVGMask}>
							<rect
								x={0}
								width={2000}
								y={0}
								height={2000}
								fill='#fff'
							/>
							<text
								y='0.85em'
								fill='#000'
							>
								{data.word}
							</text>
						</mask>
					</defs>
					<g mask={`url(#${idSVGMask})`}>
						<text y='0.85em'>{data.word}</text>
					</g>
				</svg>
			)}
		</span>
	)
}
