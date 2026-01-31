import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'mohitraipr/NorthAI',
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        publishedDate: fields.date({
          label: 'Published Date',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'NorthAI Team',
        }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: (props) => props.value }
        ),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
