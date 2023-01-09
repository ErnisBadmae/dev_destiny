/* eslint-disable max-len */
import { classNames } from 'shared/lib/className/className';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentReducer, getArticleComments } from '../model/slice/articleDetailCommentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect';
import AddCommentForm from 'features/addComentForm/ui/AddCommentForm/AddCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';


interface ArticleDetailsPageProps {
    className?: string;
}
 
const reducers:ReducerList = {
    articleDetailsComment: articleDetailsCommentReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    },[navigate])
    
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button 
                    theme={ThemeButton.OUTLINE}
                    onClick={onBackToList}
                >
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text title={t('Комментарии')}/>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
