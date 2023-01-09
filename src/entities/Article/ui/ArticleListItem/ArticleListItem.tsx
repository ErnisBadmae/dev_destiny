/* eslint-disable i18next/no-literal-string */
import { 
    Article,
    ArticleBlockType, 
    ArticleTextBlock,
    ArticleView } from '../../model/types/article';
import { memo, useCallback } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleListItem.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import { useTranslation } from 'react-i18next';
import { 
    ArticleTextBlockComponent 
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

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

    const {t} = useTranslation()
    const navigate = useNavigate()

    const openArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id)
    },[article.id, navigate])

    const types = <Text text={article.type.join(', ')} className={cls.types}/>
    const views =(
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon}/>
        </>
    )

    if(view === ArticleView.BIG) {

        const textBlock = article.blocks.find(
            block=> block.type === ArticleBlockType.TEXT 
        ) as ArticleTextBlock

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={openArticle} theme={ThemeButton.OUTLINE}>
                            {t('Читать далее')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={openArticle}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </div>
    );
})