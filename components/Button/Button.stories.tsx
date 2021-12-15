/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
  title: 'components/Button',
  args: {
    children: 1,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
