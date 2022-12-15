/* eslint-disable i18next/no-literal-string */
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleTextBlockComponent.module.scss';


interface ArticleTextBlockComponentProps {
 className?: string;
}

export const ArticleTextBlockComponent=({className}:ArticleTextBlockComponentProps)=>  {

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            ArticleTextBlockComponent
        </div>
    );
}