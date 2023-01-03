/* eslint-disable i18next/no-literal-string */
import { Comment } from '../../model/types/comment';
import { memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './CommentCard.module.scss';


interface CommentCardProps {
 className?: string;
 comment: Comment;
 isLoading?: boolean
}

export const CommentCard=memo((props:CommentCardProps)=>  {
    const {
        className,
        comment,
        isLoading
    } = props

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            Comment
        </div>
    );
})