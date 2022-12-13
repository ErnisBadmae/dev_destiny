/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleDetailPage.module.scss';


interface ArticleDetailPageProps {
 className?: string;
}

const ArticleDetailPage=({className}:ArticleDetailPageProps)=>  {

    const { t} = useTranslation('article')

    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            Article Details
        </div>
    );
}
export default memo(ArticleDetailPage)