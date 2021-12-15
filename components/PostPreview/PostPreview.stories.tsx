import { useCallback } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostPreview from './PostPreview';
import { LOREM_IPSUM } from '../../utils/constants';

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
