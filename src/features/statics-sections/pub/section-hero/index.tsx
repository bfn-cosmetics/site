import { cn } from '@/shared/lib/class-names'

import styles from './section.module.scss'

export function SectionHero() {
	return (
		<section
			className={cn(
				styles.section,
				'relative z-0 flex flex-col items-center overflow-hidden bg-green-700 text-reverse-words'
			)}
		>
			<div className='container my-auto'>
				<h1
					className={cn(
						styles.title,
						'flex flex-col font-light uppercase leading-[1.1809] text-accent sm:flex-row sm:items-end sm:justify-between'
					)}
				>
					<SVGSign className={cn(styles.titleSign, 'shrink-0')} />{' '}
					<span className={cn(styles.titleText)}>Nature</span>
				</h1>
				<div className={cn(styles.text, 'uppercase leading-[1.3]')}>
					Симбиоз корнеотерапевтических разработок и&nbsp;натуральных природных
					ингредиентов
				</div>
			</div>
			<video
				// src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
				className='absolute left-0 top-0 -z-[1] h-full w-full object-cover'
			></video>
			<button className={cn(styles.buttonPlayer, 'text-accent')}>
				<SVGPlay className='h-full w-full' />
			</button>
		</section>
	)
}

function SVGSign({ className }: { className?: string }) {
	return (
		<svg
			width='804'
			height='333'
			viewBox='0 0 804 333'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			preserveAspectRatio='xMidYMid'
		>
			<title>Best of</title>
			<path
				d='M301.15 136.03C298.315 129.73 292.96 125.005 286.66 122.17C273.43 116.815 257.68 119.65 244.45 123.745C235.315 126.58 226.495 129.73 217.99 133.825C219.565 132.25 221.14 130.675 222.4 128.785C227.755 123.115 232.165 116.815 236.575 110.2C240.67 103.585 245.08 96.34 246.97 88.465C248.86 81.85 247.6 74.605 241.615 70.195C236.575 67.045 229.96 66.415 224.29 67.045C217.675 67.99 211.06 70.195 204.76 72.4C197.515 75.235 190.585 78.07 183.655 81.22C174.52 85.315 165.385 89.725 156.565 94.765C169.165 72.085 183.025 49.72 195.94 27.04C200.35 19.165 204.76 11.29 209.8 3.41499C210.745 1.83999 208.225 0.264994 206.965 1.83999C197.2 16.96 189.01 32.71 179.875 48.145C171.37 62.005 163.18 75.865 154.99 90.04C153.415 92.875 151.84 95.71 150.265 98.545C136.09 107.05 122.23 116.5 109.315 127.21C87.58 145.48 68.365 166.585 51.985 189.58C35.92 212.575 23.005 237.46 13.555 263.605C8.83 275.89 4.735 288.805 2.845 301.72C1.585 310.225 0.324997 325.345 10.405 328.81C20.485 332.275 29.935 321.565 35.29 314.95C44.74 303.925 52.3 291.325 59.545 279.04C76.555 250.06 92.305 220.765 107.425 191.155C121.915 162.175 136.09 133.51 151.21 104.845C151.525 104.215 151.84 103.585 152.155 102.64C154.36 101.695 156.25 100.435 158.14 99.175C170.74 92.245 183.655 85.945 196.885 80.59C203.5 77.755 210.115 75.235 216.73 73.345C222.4 71.77 229.015 70.825 234.685 72.4C252.01 77.125 237.835 99.175 232.165 107.995C223.975 120.91 213.895 132.25 202.24 142.015C201.61 142.33 201.295 142.645 200.665 142.96C198.775 144.22 196.885 145.48 194.995 146.425C191.215 148.945 187.435 151.465 183.97 154.3C181.45 156.19 183.655 160.285 186.49 158.71C191.53 155.56 196.57 152.41 201.295 148.63C210.745 142.96 220.51 138.235 230.905 134.14C244.135 128.785 258.94 123.745 273.43 124.375C279.415 125.005 285.715 126.58 290.755 130.36C296.11 134.77 298.945 141.385 298.945 148.315C298.945 156.19 296.425 163.75 293.275 170.995C290.125 177.925 286.345 184.855 282.565 191.47C267.13 217.615 245.395 240.295 220.195 257.62C207.91 265.81 193.42 274.945 177.985 274.63C170.74 274.63 163.81 271.48 159.4 265.81C154.99 260.14 152.785 252.895 152.155 245.965C149.95 218.875 168.535 192.1 194.05 182.65C197.2 181.705 200.35 180.76 203.815 180.13C206.02 179.815 205.075 176.35 202.87 176.665C188.38 179.185 175.15 186.115 165.07 197.14C155.305 207.535 148.69 221.395 147.115 235.885C145.54 250.375 149.32 268.015 162.865 275.89C177.355 284.395 195.31 278.095 208.54 270.85C237.205 254.785 262.09 230.845 280.36 203.755C285.085 196.825 289.18 189.58 292.96 182.335C296.74 175.09 300.205 167.53 302.41 159.655C304.3 151.78 304.615 143.275 301.15 136.03ZM118.45 160.285C104.275 188.005 90.1 216.04 74.98 243.13C67.105 257.305 59.23 271.165 50.725 284.71C43.795 296.05 36.55 308.02 26.785 317.47C23.635 320.62 19.855 324.085 15.445 324.715C11.665 325.345 8.83 322.825 7.885 319.36C6.31 314.635 6.625 308.965 7.255 303.925C8.2 297.625 9.46 291.64 11.035 285.655C18.28 260.455 29.305 235.885 42.85 212.89C56.395 189.895 73.09 168.475 92.305 149.26C108.37 133.195 126.325 119.02 145.855 106.735C136.405 124.375 127.27 142.33 118.45 160.285ZM384.824 215.41C378.524 217.93 372.539 222.025 366.554 225.175C360.569 228.01 354.269 230.53 347.969 232.42C338.519 234.94 327.494 236.2 317.729 234.625C313.949 233.995 309.854 232.735 307.334 229.585C304.499 225.805 305.129 221.08 307.334 217.3C312.374 220.135 317.729 221.395 323.399 220.765C330.014 220.135 336.314 217.615 341.354 212.89C346.079 208.48 347.654 199.66 339.464 197.77C331.274 196.195 322.769 199.66 315.839 203.755C309.854 207.535 303.239 212.575 301.349 219.82C300.089 224.86 301.349 230.845 305.759 234.31C313.634 240.925 326.549 240.295 336.314 239.035C345.134 238.09 353.639 235.885 361.829 232.105C366.239 230.215 370.334 228.325 374.114 225.805C378.209 223.285 382.619 220.765 386.084 217.3C386.714 216.67 386.084 215.095 384.824 215.41ZM324.344 204.7C327.494 203.44 330.959 202.18 334.109 202.18C335.999 202.18 337.889 202.18 339.464 202.81C341.354 203.44 341.039 205.33 340.409 206.905C337.889 212.575 330.329 216.04 324.659 216.985C319.304 218.245 313.319 217.93 308.279 216.04L308.594 215.725C312.689 210.685 318.674 207.22 324.344 204.7ZM460.786 201.865C441.886 199.345 422.356 203.125 406.291 211.945C400.936 214.78 396.211 217.615 391.171 220.765C390.856 216.67 390.541 212.575 390.856 208.48C390.856 200.29 393.691 193.045 399.361 187.06C405.031 180.76 413.221 176.665 421.726 176.35C425.821 176.35 430.546 177.61 430.546 182.65C430.231 186.115 428.341 189.58 426.451 192.415C426.136 193.045 426.766 193.675 427.081 193.36C431.806 190.21 435.586 184.54 433.696 178.87C431.491 171.625 422.041 171.31 415.741 172.57C401.881 175.405 389.596 187.06 386.761 200.92C385.186 208.795 386.446 216.355 386.761 223.915C385.501 224.86 384.241 225.805 383.296 226.75C376.996 231.475 370.066 237.46 368.176 245.335C367.231 248.485 367.546 251.95 370.066 254.47C373.216 256.99 377.311 256.36 380.461 254.785C387.076 251.005 390.226 242.815 391.171 235.885C391.801 232.42 391.801 229.27 391.486 226.12C394.321 223.915 397.156 222.34 400.306 220.45C409.126 215.095 417.946 211 428.026 208.165C437.476 205.645 449.761 205.33 460.786 204.385C462.361 204.385 462.361 201.865 460.786 201.865ZM379.201 249.745C377.941 250.69 375.736 251.95 374.161 251.32C372.271 250.375 372.271 248.17 372.901 246.595C373.846 242.5 376.681 239.035 379.201 236.2C381.721 233.68 384.241 231.475 386.761 229.585C386.761 236.515 385.186 245.02 379.201 249.745ZM559.066 119.335C551.191 117.13 542.056 116.815 533.866 117.13C525.676 117.13 517.486 117.76 509.611 119.335C510.241 118.075 511.186 116.815 511.816 115.87C516.226 109.57 520.636 103.585 525.046 97.915C527.251 94.765 529.456 91.93 531.661 88.78C533.866 85.945 536.071 82.795 537.646 79.33C537.961 78.7 536.701 77.755 536.071 78.385C533.551 80.275 531.661 82.48 529.456 85C527.251 87.835 524.731 90.67 522.526 93.505C518.116 99.175 514.021 104.53 509.926 110.2C507.406 113.665 505.201 117.13 502.681 120.28C487.876 123.43 473.071 128.155 460.156 135.4C459.211 135.715 459.841 137.29 460.786 136.975C473.386 131.935 486.301 127.84 499.531 125.005C495.121 131.935 490.711 138.865 486.616 145.795C472.756 169.735 460.156 195.25 456.691 222.97C455.746 230.215 455.431 237.775 457.636 244.705C459.526 250.375 462.991 256.045 469.291 257.305C470.236 257.305 470.866 256.045 469.921 255.415C457.951 250.06 459.526 232.735 461.101 222.025C462.991 209.11 467.086 196.195 472.441 183.91C481.576 162.805 493.231 142.645 506.461 123.745C507.091 123.745 507.721 123.43 508.666 123.43C516.856 122.17 525.361 121.54 533.866 121.225C542.056 121.225 550.561 122.17 558.751 121.855C560.326 121.855 560.641 119.65 559.066 119.335ZM711.654 200.92C692.754 205.645 675.744 215.725 658.104 223.6C649.284 227.38 640.149 230.845 630.699 232.735C625.029 233.68 618.729 234.625 612.744 233.68C616.839 231.16 620.619 228.01 624.084 224.23C627.549 220.45 631.329 216.04 633.219 211C635.109 205.96 632.589 201.235 627.864 199.03C624.399 197.14 620.619 197.455 616.839 198.4C608.019 199.03 599.199 203.44 592.584 208.795C585.654 214.465 574.629 226.12 581.244 235.57C587.229 244.705 599.199 240.925 607.704 236.83C618.099 239.665 630.069 237.46 640.464 234.625C665.664 227.38 687.714 211.945 712.284 202.81C713.544 202.495 712.914 200.605 711.654 200.92ZM629.124 205.645C630.384 208.48 628.494 211.315 627.234 213.52C624.714 217.3 621.564 220.765 618.099 224.23C614.949 227.38 611.169 229.9 607.074 232.105C605.814 231.79 604.554 230.845 603.294 230.215C600.144 228.01 597.309 224.545 597.624 220.45C597.624 216.985 599.829 214.15 602.349 211.63C607.389 206.275 616.839 200.29 624.399 202.18C626.289 202.495 628.494 203.755 629.124 205.645ZM591.324 236.83C588.804 236.515 585.969 235.255 584.394 233.05C583.134 230.53 583.449 227.695 584.394 225.175C586.284 220.135 590.379 216.04 594.159 212.575C595.734 211.315 596.994 210.37 598.569 209.425C596.679 211.63 595.104 213.835 594.159 216.67C591.639 224.23 596.364 230.845 602.349 234.31C598.884 235.885 595.104 237.145 591.324 236.83ZM801.446 54.445C796.721 59.485 792.941 65.785 788.846 71.455C784.436 77.755 780.026 83.74 775.931 90.04C767.111 103.27 758.291 116.185 750.101 129.415C734.036 154.93 718.916 181.075 705.686 208.165C701.591 209.425 697.811 211.315 694.031 212.89C692.771 213.52 692.456 216.04 694.031 216.67C696.236 217.615 698.126 218.875 699.701 220.135C694.976 230.53 690.251 240.925 686.156 251.32C680.486 265.18 674.816 279.04 672.296 293.845C671.036 299.515 669.776 306.13 672.296 311.8C674.501 316.84 680.171 319.045 685.211 316.84C690.881 314.32 694.976 308.335 698.441 303.295C702.221 297.625 705.371 291.64 708.206 285.34C715.766 266.755 721.121 236.2 705.686 219.82C707.261 216.985 708.521 213.835 710.096 211C734.666 202.18 763.016 199.975 786.641 210.37C788.531 211.315 789.791 208.795 788.216 207.85C774.356 199.975 757.661 198.4 741.596 199.975C731.831 200.605 722.066 202.81 712.616 205.645C724.586 181.705 737.816 158.71 751.676 136.03C760.181 122.485 768.686 108.94 777.191 95.395C781.601 88.78 786.011 82.165 790.106 75.55C794.201 69.565 797.666 62.95 801.761 57.28C802.391 56.65 802.706 56.02 803.021 55.705C803.651 54.76 802.391 53.5 801.446 54.445ZM706.316 277.15C704.426 283.45 701.906 289.435 698.441 294.79C695.606 300.145 692.141 305.5 687.731 309.595C685.841 311.485 682.691 314.005 679.541 312.745C677.336 312.115 676.391 309.28 676.076 306.76C675.446 301.09 677.021 294.475 678.596 288.805C682.061 275.26 687.416 262.03 692.456 249.115C695.921 240.925 699.701 232.42 703.481 224.23C714.821 237.775 711.671 261.4 706.316 277.15ZM701.591 216.04C700.961 215.725 700.331 215.41 700.016 215.095C700.961 214.465 701.906 214.15 702.851 213.835C702.221 214.465 701.906 215.41 701.591 216.04Z'
				fill='#CB9E76'
			/>
		</svg>
	)
}

function SVGPlay({ className }: { className?: string }) {
	return (
		<svg
			width='80'
			height='80'
			viewBox='0 0 80 80'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<circle
				cx='40'
				cy='40'
				r='39.5'
				stroke='currentColor'
			/>
			<path
				d='M37 33.0718L49 40L37 46.9282L37 33.0718Z'
				fill='CurrentColor'
				stroke='currentColor'
			/>
		</svg>
	)
}