/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import {{pascalCase}} from './{{pascalCase}}';


export default {
    title: 'pages/{{pascalCase}}',
    component: {{pascalCase}},
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof {{pascalCase}}>;

const Template: ComponentStory<typeof {{pascalCase}}> = (args) =>
    <{{pascalCase}} {...(args as typeof {{pascalCase}})} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)]
