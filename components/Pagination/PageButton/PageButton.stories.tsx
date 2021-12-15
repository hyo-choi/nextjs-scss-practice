/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageButton from './PageButton';

export default {
  component: PageButton,
  title: 'components/PageButton',
  args: {
    children: 1,
    href: '#',
  },
} as ComponentMeta<typeof PageButton>;

const Template: ComponentStory<typeof PageButton> = (args) => <PageButton {...args} />;

export const Button = Template.bind({});

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  href: '/1',
};
ActiveButton.story = {
  parameters: {
    nextRouter: {
      path: '/[page]',
      asPath: '/1',
    },
  },
};

export const Buttons: ComponentStory<typeof PageButton> = (args) => {
  const { children, href } = args;
  const array = Array(10).fill(Number(children)).map((num, idx) => num + idx);
  return (
    <>
      {array.map((num) => <PageButton href={`${href}/${num}`} key={num}>{num}</PageButton>)}
    </>
  );
};
