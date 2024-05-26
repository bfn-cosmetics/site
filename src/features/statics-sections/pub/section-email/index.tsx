import Image from 'next/image'

import { cn } from '@/shared/lib/class-names'

import styles from './section.module.scss'

export function SectionEmail() {
	return (
		<section className={styles.section}>
			<div className='container'>
				<h2 className={cn(styles.titleSection)}>
					<span>
						Узнавайте первыми <i>о новинках</i>
					</span>
					<span>
						и специальных <i>акциях!</i>
					</span>
				</h2>
			</div>
			<form
				action=''
				className={styles.form}
			>
				<div className='container'>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<input
								type='text'
								placeholder='E-mail'
								className={styles.input}
							/>
							<label className={styles.checkbox}>
								<input type='checkbox' />
								<div className={styles.checkboxBlock} />
								<div>Я согласен на обработку персональных данных</div>
							</label>
						</div>
						<button className={styles.button}>
							<span>Подписаться</span>
							<SVGArrow />
						</button>
					</div>
				</div>
			</form>
			<Image
				src='/assets/leafs/12.png'
				alt=''
				className={cn(styles.leaf12, 'leaf')}
				width={267}
				height={214}
			/>
			<Image
				src='/assets/leafs/13.png'
				alt=''
				className={cn(styles.leaf13, 'leaf')}
				width={337}
				height={220}
			/>
		</section>
	)
}

function SVGArrow() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='72'
			height='72'
			viewBox='0 0 72 72'
			fill='none'
		>
			<path
				d='M30.1667 36.5831H41.8334M41.8334 36.5831L38.0805 32.4998M41.8334 36.5831L38.0805 40.6665M71 36C71 55.33 55.33 71 36 71C16.67 71 1 55.33 1 36C1 16.67 16.67 1 36 1C55.33 1 71 16.67 71 36Z'
				stroke='currentColor'
			/>
		</svg>
	)
}
