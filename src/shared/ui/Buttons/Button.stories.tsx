import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children:'Text',
   
};



export const Clear = Template.bind({});
Clear.args = {
    children:'Text',
    theme:ThemeButton.CLEAR
};


export const Outlined = Template.bind({});
Outlined.args = {
    children:'Text',
    theme:ThemeButton.OUTLINE
};



export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children:'Text',
    theme:ThemeButton.OUTLINE
};
OutlinedDark.decorators = [
    ThemeDecorator(Theme.DARK)
]

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children:'Text',
    theme:ThemeButton.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children:'Text',
    theme:ThemeButton.BACKGROUND_INVERTED
};

export const Square = Template.bind({});
Square.args = {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square: true
};

// export const SquareSizeM = Template.bind({});
// SquareSizeM.args = {
//     children:'>',
//     theme:ThemeButton.BACKGROUND,
//     square: true,
//     size: ButtonSize.M
// };

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children:'>',
    theme:ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.XL
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    size: ButtonSize.L
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children:'>',
    theme:ThemeButton.BACKGROUND,
    size: ButtonSize.XL
};