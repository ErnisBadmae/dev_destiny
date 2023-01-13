/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import ernis from './ernis.jpeg';



export default {
    title: 'shared/Avatar',
    component: Avatar,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size:100,
    src: ernis
};

export const Big = Template.bind({});
Big.args = {
    size:200, 
    src: ernis
};

