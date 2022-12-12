/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import ProfilePage from './ProfilePage';


export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: 
    ComponentStory<typeof ProfilePage> = () =>
        <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [ StoreDecorator({
  
    profile: {
        form: {
  
            username:'admin',
            age:22,
            country:Country.RUSSIA,
            first: 'Erni',
            last: 'Badmaev',
            city:'spb',
            currency:Currency.RUB,
     
        
        }
    }
    
})]


export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
  
            username:'admin',
            age:22,
            country:Country.RUSSIA,
            first: 'Erni',
            last: 'Badmaev',
            city:'spb',
            currency:Currency.RUB,
     
        
        }
    }
})]
