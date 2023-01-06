import { Comment } from '../../model/types/comment';
import { memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './CommentList.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';


interface CommentListProps {
 className?: string;
 comments?: Comment[];
 isLoading?: boolean
}

export const CommentList=memo((props:CommentListProps)=>  {
    const {
        className,
        comments,
        isLoading 
    } = props

    const {t} = useTranslation()

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length 
                ? comments.map((comment,i) => (
                   
                    <CommentCard 
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}  
                        key={i}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')}/>
            }
        </div>
    );
})