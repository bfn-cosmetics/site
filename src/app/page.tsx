import { Footer } from '@/features/statics-sections/pub/footer'
import { Header } from '@/features/statics-sections/pub/header'
import { SectionAdvantages } from '@/features/statics-sections/pub/section-advantages'
import { SectionBlog } from '@/features/statics-sections/pub/section-blog'
import { SectionCarousel } from '@/features/statics-sections/pub/section-carousel'
import { SectionEmail } from '@/features/statics-sections/pub/section-email'
import { SectionForm } from '@/features/statics-sections/pub/section-form'
import { SectionHero } from '@/features/statics-sections/pub/section-hero'
import { SectionPickUp } from '@/features/statics-sections/pub/section-pick-up'
import { SectionProducts } from '@/features/statics-sections/pub/section-products'
import { SectionVideo } from '@/features/statics-sections/pub/section-video'

export default function Home() {
	return (
		<main>
			<Header />
			<SectionHero />
			<SectionCarousel />
			<SectionAdvantages />
			<SectionVideo />
			<SectionProducts />
			<SectionPickUp />
			<SectionForm />
			<SectionBlog />
			<SectionEmail />
			<Footer />
		</main>
	)
}
