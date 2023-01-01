/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/display-name */
import { 
    getArticleDetailData, 
    getArticleDetailIsError,
    getArticleDetailIsLoading
} from '../../model/selectors/articleDetails';
import { 
    fetchArticleById 
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailSlice';
import { memo, useEffect } from 'react';
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
                title={t('Произошла ошибка при загрузке статьи.')}
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
                    title={article?.title}
                    text={article?.subtitle}
                />
                <div>
                    <EyeIcon/>
                    <Text 
                        text={String(article?.views)}
                    />
                </div>
                <div>
                    <CalendarIcon/>
                    <Text 
                        text={article?.createdAt}
                    />
                </div>
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