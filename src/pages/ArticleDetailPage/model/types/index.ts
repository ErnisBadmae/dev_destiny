import { ArticleDetailsRecommendationSchema } from './ArticleDetailsRecommendationSchema';
import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';


export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsRecommendationSchema
}