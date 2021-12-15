/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Comment from './Comment';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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
