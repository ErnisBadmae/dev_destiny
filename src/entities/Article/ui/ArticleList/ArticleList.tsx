import { Article, ArticleView } from '../../model/types/article';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleList.module.scss';
import { memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';



interface ArticleListProps {
 className?: string;
 articles: Article[];
 isLoading?: boolean;
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
        view = ArticleView.SMALL
    } = props

    if(isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                { getSkeletons(view) }
            </div>
        )
    }

    const renderArticle =(article:Article) => {
        return (
            <ArticleListItem 
                article={article} 
                view={view}
                className={cls.card}
                key={article.id}

            />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 
                ? articles.map(renderArticle )
                : null
            }
        </div>
    );
})