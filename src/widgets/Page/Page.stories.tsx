/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Page } from './Page';



export default {
    title: 'pages/Page',
    component: Page,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) =>
    <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)]
