import ImageNext, { type ImageProps } from 'next/image'

function prefixedAsset(src: ImageProps['src']) {
	if (process.env.GITHUB_REPOSITORY) {
		return '/' + process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') + src
	}
	return src
}

export const Image = ({ src, ...props }: ImageProps) => {
	return (
		<ImageNext
			src={prefixedAsset(src)}
			{...props}
		/>
	)
}
