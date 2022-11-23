import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Error = Template.bind({});
Error.args = {
    title:'Title lorem ipsun',
    text: 'lorem ipsun text',
    theme: TextTheme.ERROR
};

export const Primary = Template.bind({});
Primary.args = {
    title:'Title lorem ipsun',
    text: 'lorem ipsun text'
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title:'Title lorem ipsun', 
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'lorem ipsun text' 
};


export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title:'Title lorem ipsun',
    text: 'lorem ipsun text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title:'Title lorem ipsun', 
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'lorem ipsun text' 
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
