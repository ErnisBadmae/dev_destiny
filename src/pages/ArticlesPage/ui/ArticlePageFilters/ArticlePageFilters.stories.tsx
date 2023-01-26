import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticlePageFilters } from './ArticlePageFilters';


export default {
    title: 'pages/Article/ArticlePageFilters',
    component: ArticlePageFilters,
  
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        view: ArticleView.BIG,
    },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) =>
    <ArticlePageFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    
};

