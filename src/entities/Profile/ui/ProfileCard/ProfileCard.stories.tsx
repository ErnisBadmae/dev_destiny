import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from 'shared/ui/Avatar/ernis.jpeg'


export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username:'admin',
        age:22,
        country:Country.RUSSIA,
        first: 'Erni',
        last: 'Badmaev',
        city:'spb',
        currency:Currency.RUB,
        avatar
    }
};


export const WithError = Template.bind({});
WithError.args = {
    isError: 'true'
};


export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};

