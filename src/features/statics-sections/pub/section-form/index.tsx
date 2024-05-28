import { cn } from '@/shared/lib/class-names'
import { Image } from '@/shared/lib/next'
import { SectionTitle } from '@/shared/ui/section-title'

import styles from './section.module.scss'

export function SectionForm() {
	return (
		<section className={cn(styles.section)}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<SectionTitle
							className={styles.title}
							words={[
								{ word: 'вам нужна', stroke: true },
								{ word: 'консультация?', stroke: true }
							]}
						/>
						<p className={styles.text}>
							Оставьте заявку и наши специалисты порекомендуют вам
							индивидуальный уход за кожей.
						</p>
						<form
							action=''
							className={styles.form}
						>
							<div className={styles.inputs}>
								<input
									type='text'
									placeholder='Ваше имя'
									className={styles.input}
								/>
								<input
									type='text'
									placeholder='Телефон'
									className={styles.input}
								/>
								<input
									type='text'
									placeholder='E-mail'
									className={styles.input}
								/>
							</div>
							<button className={styles.button}>
								<SVGArrow />
							</button>
						</form>
					</div>
					<div className={styles.image}>
						<Image
							src='/assets/home/form.png'
							alt=''
							fill
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

function SVGArrow({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='162'
			height='162'
			viewBox='0 0 162 162'
			fill='none'
			className={className}
		>
			<path
				d='M67.8228 81.5386H95.5455M95.5455 81.5386L86.6276 72.4297M95.5455 81.5386L86.6276 90.6475M161 81C161 125.183 125.183 161 81 161C36.8172 161 1 125.183 1 81C1 36.8172 36.8172 1 81 1C125.183 1 161 36.8172 161 81Z'
				stroke='currentColor'
			/>
		</svg>
	)
}
