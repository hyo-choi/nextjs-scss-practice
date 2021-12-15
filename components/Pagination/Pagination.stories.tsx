/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination from './Pagination';

export default {
  component: Pagination,
  title: 'components/Pagination',
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;
Default.args = {
  path: '/',
  start: 11,
  end: 20,
  prev: true,
  next: true,
};
Default.story = {
  parameters: {
    nextRouter: {
      path: '/[page]',
      asPath: '/11',
    },
  },
};
