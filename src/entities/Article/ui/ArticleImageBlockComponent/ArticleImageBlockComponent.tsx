/* eslint-disable i18next/no-literal-string */
import { ArticleImageBlock } from '../../model/types/article';
import { memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleImageBlockComponent.module.scss';
import { AlignText, Text } from 'shared/ui/Text/Text';


interface ArticleImageBlockComponentProps {
 className?: string;
 block: ArticleImageBlock
}

export const ArticleImageBlockComponent= memo((props:ArticleImageBlockComponentProps)=>  {
    const {
        className,
        block,
    } = props
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src}  className={cls.img}/>
            {block.title && (
                <Text text={block.title} align={AlignText.CENTER}/>
            )}
        </div>
    );
})