/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LOREM_IPSUM } from '../../utils/constants';
import Comment from './Comment';

export default {
  component: Comment,
  title: 'components/Comment',
  args: {
    comment: {
      postId: 1,
      id: 1,
      name: 'sample user',
      body: LOREM_IPSUM,
      email: 'comment@example.com',
    },
  },
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Default = Template.bind({});

export const List: ComponentStory<typeof Comment> = (args) => (
  <>
    <Comment {...args} />
    <Comment {...args} />
    <Comment {...args} />
    <Comment {...args} />
    <Comment {...args} />
  </>
);
