import { Article, ArticleView } from '../../model/types/article';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleList.module.scss';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { SizeText, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';




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


    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);


    const rowRender = ({
        index, isScrolling, key, style, 
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={`str${i}`}
                    className={cls.card}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };


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
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRender}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
})