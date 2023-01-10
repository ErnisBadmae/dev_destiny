import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean;
    isError?: string;

    view: ArticleView
}
