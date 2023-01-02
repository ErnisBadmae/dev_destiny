import { ArticleDetatailSchema } from './../types/articleDetailSchema';
import { articleDetailsReducer,articleDetailsActions, fetchArticleById  } from 'entities/Article';

describe('articleDetailSlice.test', ()=>{
    const data =  {
        id: "1",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
    }    

    test('test article pending', () => {
        const state: DeepPartial<ArticleDetatailSchema> = { 
            isLoading: false,
        };

        expect(articleDetailsReducer(
            state as ArticleDetatailSchema,
            fetchArticleById.pending
        )).toEqual({
            isLoading: true,
        });
    });


    test('test article fullfiled', () => {
        const state: DeepPartial<ArticleDetatailSchema> = { 
            isLoading: true,
        };

        expect(articleDetailsReducer(
            state as ArticleDetatailSchema,
            fetchArticleById.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            data
        });
    });
})