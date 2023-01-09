import { Article, ArticleView } from '../../../model/types/article';
import { memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleListItem.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'

interface ArticleListItemProps {
 className?: string;
 article: Article;
 view: ArticleView
}

export const ArticleListItem=memo((props:ArticleListItemProps)=>  {
    const {
        className,
        article,
        view
    } = props

    if(view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                {article.title}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article.type.join(', ')} className={cls.types}/>
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={EyeIcon}/>
                </div>
                <Text text={article.title} className={cls.title}/>
            </div>
        </div>
    );
})