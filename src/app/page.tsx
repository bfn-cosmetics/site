import { Header } from '@/features/statics-sections/pub/header'
import { SectionAdvantages } from '@/features/statics-sections/pub/section-advantages'
import { SectionCarousel } from '@/features/statics-sections/pub/section-carousel'
import { SectionHero } from '@/features/statics-sections/pub/section-hero'
import { SectionVideo } from '@/features/statics-sections/pub/section-video'

export default function Home() {
	return (
		<main>
			<Header />
			<SectionHero />
			<SectionCarousel />
			<SectionAdvantages />
			<SectionVideo />
		</main>
	)
}
