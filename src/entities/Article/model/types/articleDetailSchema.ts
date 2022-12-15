import { Article } from './article';

export interface ArticleDetatailSchema {
    isLoading: boolean;
    isError?: string;
    data?: Article
}