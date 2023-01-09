import { Article, ArticleView } from '../../model/types/article';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleList.module.scss';
import { memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ui/ArticleListItem';


interface ArticleListProps {
 className?: string;
 articles: Article[];
 isLoading?: boolean;
 view?: ArticleView
}

export const ArticleList=memo((props:ArticleListProps)=>  {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL
    } = props

    const renderArticle =(article:Article) => {
        return (
            <ArticleListItem 
                article={article} 
                view={view}
            />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length > 0 
                ? articles.map(renderArticle )
                : null
            }
        </div>
    );
})