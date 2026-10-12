import { collection, config, fields } from '@keystatic/core';

const postFields = () => ({
	title: fields.slug({ name: { label: 'Title' } }),
	description: fields.text({ label: 'Description', multiline: true }),
	pubDate: fields.date({ label: 'Publication date' }),
	updatedDate: fields.date({ label: 'Updated date' }),
	heroImage: fields.image({
		label: 'Hero image',
		directory: 'src/assets',
		publicPath: '../../assets/',
	}),
});

export default config({
	storage: { kind: 'local' },
	collections: {
		blog: collection({
			label: 'Blog posts (Markdown)',
			path: 'src/content/blog/*',
			slugField: 'title',
			format: { contentField: 'content' },
			schema: {
				...postFields(),
				content: fields.markdoc({ label: 'Content', extension: 'md' }),
			},
		}),
		blogMdx: collection({
			label: 'Blog posts (MDX)',
			path: 'src/content/blog/*',
			slugField: 'title',
			format: { contentField: 'content' },
			schema: {
				...postFields(),
				content: fields.mdx({ label: 'Content', extension: 'mdx' }),
			},
		}),
	},
});