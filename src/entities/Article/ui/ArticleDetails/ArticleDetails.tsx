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
import { AlignText, Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';


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
    
    const {t} = useTranslation('article')
    const data = useSelector(getArticleDetailData)
    const isError = useSelector(getArticleDetailIsError)
    // const isLoading = useSelector(getArticleDetailIsLoading)
    const isLoading = true

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchArticleById(id))
    },[dispatch, id])

    let content 
    if(isLoading) {
        content = (
            <div>

            
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
            </div>
        )
    } else if(isError) {
        content = (
            <Text 
                align={AlignText.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />

        )
    } else {
        content = (
            <div>Article Detail...</div>
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