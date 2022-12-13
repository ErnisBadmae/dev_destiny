/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticlesPage.module.scss';


interface ArticlesPageProps {
 className?: string;
}

const ArticlesPage=({className}:ArticlesPageProps)=>  {

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ARTicles Page
        </div>
    );
}
export default memo(ArticlesPage)