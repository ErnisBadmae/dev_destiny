import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import AddCommentForm from './AddCommentForm';
import {action} from '@storybook/addon-actions'



export default {
    title: 'features/addCommentForm',
    component: AddCommentForm,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment')
};
Normal.decorators = [
    StoreDecorator({})
]




