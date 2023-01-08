import { ComponentStory, ComponentMeta } from '@storybook/react';
import {CommentList} from './CommentList';


export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) =>
    <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id:'1',
            text:'test text from storybook',
            user: {id:'1', username:'Stroybook user'}
        },
        {
            id:'2',
            text:'test text from storybook2',
            user: {id:'2', username:'Stroybook user2'}
        }
    ]
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading:true
};


