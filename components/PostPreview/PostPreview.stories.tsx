import { useCallback } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostPreview from './PostPreview';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default {
  component: PostPreview,
  title: 'components/PostPreview',
  args: {
    title: 'Sample',
    body: LOREM_IPSUM,
    href: '#',
  },
} as ComponentMeta<typeof PostPreview>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof PostPreview> = (args) => <PostPreview {...args} />;

export const NoImage = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
  imgSrc: 'https://via.placeholder.com/600/9dbd11',
};

export const List: ComponentStory<typeof PostPreview> = (args) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const Component = useCallback(() => <PostPreview {...args} />, []);
  return (
    <>
      <Component />
      <Component />
      <Component />
      <Component />
    </>
  );
};
