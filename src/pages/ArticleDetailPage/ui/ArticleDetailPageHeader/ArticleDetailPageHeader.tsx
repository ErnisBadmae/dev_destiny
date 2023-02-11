import { getArticleDetailData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';
import { getCanEditArticle } from 'pages/ArticleDetailPage/model/selectors/article';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import {classNames} from 'shared/lib/className/className';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import cls from './ArticleDetailPageHeader.module.scss';


interface ArticleDetailPageHeaderProps {
 className?: string;
}

export const ArticleDetailPageHeader=({className}:ArticleDetailPageHeaderProps)=>  {
    const navigate = useNavigate()
    const {t} = useTranslation()

    const article = useSelector(getArticleDetailData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    },[navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details} ${article?.id}/edit`)
    },[article?.id, navigate])

    return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
            <Button 
                theme={ThemeButton.OUTLINE}
                onClick={onBackToList}

            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button 
                    theme={ThemeButton.OUTLINE}
                    onClick={onEditArticle}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
}