/* eslint-disable i18next/no-literal-string */
import { 
    getArticleDetailData, 
    getArticleDetailIsError,
    getArticleDetailIsLoading
} from '../../model/selectors/articleDetails';
import { 
    fetchArticleById 
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {classNames} from 'shared/lib/className/className';
import { 
    DynamicModuleLoader, ReducerList 
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ArticleDetails.module.scss';
import {  AlignText, Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent';
import { 
    ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';


interface ArticleDetailsProps {
 className?: string;
 id: string
}

const reducers:ReducerList ={
    articleDetails: articleDetailsReducer
}
 
export const ArticleDetails=memo((props:ArticleDetailsProps)=>  {
    const {
        className,
        id
    } = props
    
    const dispatch = useAppDispatch()

    const {t} = useTranslation()
    const isError = useSelector(getArticleDetailIsError)
    const isLoading = useSelector(getArticleDetailIsLoading)
    const article = useSelector(getArticleDetailData)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>

        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>

        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>

        default:
            return null
        }
    },[])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    },[dispatch, id])

    let content 
    if(isLoading) {
        content = (
            <>
                <Skeleton 
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border={'50%'}
                />
                <Skeleton 
                    className={cls.title}
                    width={300}
                    height={32}
                
                />
                <Skeleton 
                    className={cls.skeleton}
                    width={600}
                    height={24}
           
                />
                <Skeleton 
                    className={cls.skeleton}
                    width="100%"
                    height={200}
          
    
                />
            </>
        )
    } else if(isError) {
        content = (
            <Text
                align={AlignText.CENTER}
                title='Произошла ошибка при загрузке статьи.'
            />
        );
    } else {
        content = (
            <>
                <Avatar 
                    size={200} src={article?.img}
                    className={cls.avatar}
                />
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon}/>
                    <Text 
                        text={String(article?.views)}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon}/>
                    <Text 
                        text={article?.createdAt}
                    />
                </div>
                {article?.blocks.map(renderBlock)}
            </>

        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
})