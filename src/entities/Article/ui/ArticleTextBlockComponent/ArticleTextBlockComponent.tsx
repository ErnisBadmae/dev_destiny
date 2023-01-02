/* eslint-disable i18next/no-literal-string */
import { ArticleTextBlock } from '../../model/types/article';
import { memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleTextBlockComponent.module.scss';
import { Text } from 'shared/ui/Text/Text';


interface ArticleTextBlockComponentProps {
 className?: string;
 block:ArticleTextBlock
}

export const ArticleTextBlockComponent=memo((props:ArticleTextBlockComponentProps)=>  {
    const {
        className,
        block
    } = props
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title}/>
            )}
            {block.paragraphs.map((paragraph, i)=> (
                <Text key={i} text={paragraph} className={cls.paragraph}/>
            ))}
        </div>
    );
})