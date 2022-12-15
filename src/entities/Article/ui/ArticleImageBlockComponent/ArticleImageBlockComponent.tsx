/* eslint-disable i18next/no-literal-string */
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleImageBlockComponent.module.scss';


interface ArticleImageBlockComponentProps {
 className?: string;
}

export const ArticleImageBlockComponent=({className}:ArticleImageBlockComponentProps)=>  {

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
}