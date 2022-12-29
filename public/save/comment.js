import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'ProfileImage',
      type: 'string',
    }),
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference the Tweet the comment is associated to:',
      type: 'reference',
      to: {
        type: 'tweet'
      }
    }
  ]
})
