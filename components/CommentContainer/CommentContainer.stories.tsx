/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommentContainer from './CommentContainer';
import * as CommentStories from '../Comment/Comment.stories';

export default {
  component: CommentContainer,
  title: 'components/CommentContainer',
} as ComponentMeta<typeof CommentContainer>;

const Template: ComponentStory<typeof CommentContainer> = (args) => <CommentContainer {...args} />;

export const NoComment = Template.bind({});

export const FewComments = Template.bind({});
FewComments.args = {
  comments: [
    { ...CommentStories.default.args!.comment!, id: 1 },
    { ...CommentStories.default.args!.comment!, id: 2 },
    { ...CommentStories.default.args!.comment!, id: 3 },
  ],
};

export const ManyComments = Template.bind({});
ManyComments.args = {
  comments: [
    { ...CommentStories.default.args!.comment!, id: 1 },
    { ...CommentStories.default.args!.comment!, id: 2 },
    { ...CommentStories.default.args!.comment!, id: 3 },
    { ...CommentStories.default.args!.comment!, id: 4 },
    { ...CommentStories.default.args!.comment!, id: 5 },
    { ...CommentStories.default.args!.comment!, id: 6 },
    { ...CommentStories.default.args!.comment!, id: 7 },
  ],
};
