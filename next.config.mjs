/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = 'https://cdn.mydomain.com'
let basePath = ''

if (isGithubActions) {
	// trim off `<owner>/`
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

	assetPrefix = `/${repo}/`
	basePath = `/${repo}`
}

const nextConfig = {
	output: 'export',
	basePath: basePath,
	assetPrefix: assetPrefix,
	webpack: config => {
		config.resolve.alias['@shared'] = '/src/shared'
		return config
	},
	images: {
		unoptimized: true
	}
}

export default nextConfig
