export {
    ArticleDetails
} from './ui/ArticleDetails/ArticleDetails'

export  { Article, ArticleView} from './model/types/article'

export type {
    ArticleDetatailSchema,
} from './model/types/articleDetailSchema'

export {
    articleDetailsActions,
    articleDetailsReducer
} from './model/slice/articleDetailSlice'

export {
    fetchArticleById
} from './model/services/fetchArticleById/fetchArticleById'

export {
    getArticleDetailData
} from './model/selectors/articleDetails'

export {
    ArticleViewSelector
} from './ui/ArticleViewSelector/ArticleViewSelector'

export { ArticleList} from './ui/ArticleList/ArticleList'