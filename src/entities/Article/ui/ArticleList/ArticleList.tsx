import { Article, ArticleView } from '../../model/types/article';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleList.module.scss';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { SizeText, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';



interface ArticleListProps {
 className?: string;
 articles: Article[];
 isLoading?: boolean;
 target?: HTMLAttributeAnchorTarget;
 view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return  new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton 
                className={cls.card}
                view={view} 
                key={index}
            /> 
        ))
}

export const ArticleList=memo((props:ArticleListProps)=>  {
    const {
        className,
        articles,
        isLoading,
        target,
        view = ArticleView.SMALL
    } = props

    const { t } = useTranslation()

    const renderArticle =(article:Article) => {
        return (
            <ArticleListItem 
                article={article} 
                view={view}
                className={cls.card}
                key={article.id}
                target = {target}
            />
        )
    }


    if(!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text 
                    title = {t('Статьи не найдены')}
                    size = {SizeText.L}
                />
            </div>
        )
    }


    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 
                ? articles.map(renderArticle )
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
})