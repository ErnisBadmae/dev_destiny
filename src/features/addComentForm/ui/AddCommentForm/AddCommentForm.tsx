import { 
    getAddCommentFormIsError, 
    getAddCommentFormText 
} from '../../model/selectors/getLoginIsError/addCommentFormSelectors';
import { useTranslation } from 'react-i18next';
import {  useSelector } from 'react-redux';
import {classNames} from 'shared/lib/className/className';
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './AddCommentForm.module.scss';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { 
    addCommentFormActions,
    addCommentFormReducer } from 'features/addComentForm/model/slice/addCommentFormSlice';
import { 
    DynamicModuleLoader,
    ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
 className?: string;
 onSendComment: (text: string) => void;
}

const reducers: ReducerList ={
    addComentForm: addCommentFormReducer
} 


const AddCommentForm=memo((props:AddCommentFormProps)=>  {
    const {t} = useTranslation()
    const {
        className,
        onSendComment
    } = props

    const text = useSelector(getAddCommentFormText)
    const isError = useSelector(getAddCommentFormIsError)
    const dispatch = useAppDispatch()

    const onCommentTextChange =useCallback((value:string) => {
        dispatch(addCommentFormActions.setText(value))
    },[dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);
 
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input  
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button 
                    theme={ThemeButton.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
})

export default AddCommentForm