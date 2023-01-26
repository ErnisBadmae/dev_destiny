import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';


export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        view: ArticleView.BIG,
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) =>
    <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    
};

