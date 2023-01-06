/* eslint-disable i18next/no-literal-string */
import { Comment } from '../../model/types/comment';
import { memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './CommentCard.module.scss';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';


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

    if(isLoading) {
        return(
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={"50%"}/>
                    <Skeleton height={16} width={100}/>
                </div>
                <Skeleton className={cls.text}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? 
                    <Avatar 
                        size={30}
                        src={comment.user.avatar} 
                    /> 
                    : null
                }
                <Text 
                    className={cls.username}
                    text={comment.user.username}
                />
            </div>
            <Text 
                className={cls.text}
                text={comment.text }
            />
        </div>
    );
})