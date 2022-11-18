/* eslint-disable max-len */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    isOpen:true,
    children:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, earum! Iure, perspiciatis? Eos qui nisi, odio sint similique, eveniet, ea asperiores laboriosam neque fuga delectus unde impedit? Tempora, perferendis nisi!!',
};


export const Dark = Template.bind({});
Dark.args = {
    isOpen:true,
    children:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, earum! Iure, perspiciatis? Eos qui nisi, odio sint similique, eveniet, ea asperiores laboriosam neque fuga delectus unde impedit? Tempora, perferendis nisi!!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]