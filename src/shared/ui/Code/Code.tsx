import { memo, useCallback } from 'react';
import {classNames} from 'shared/lib/className/className';
import { Button, ThemeButton } from '../Buttons/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'
import cls from './Code.module.scss';



interface CodeProps {
 className?: string;
 text: string
}

export const Code=memo((props:CodeProps)=>  {
    const {
        className,
        text
    } = props

    const onCopy =useCallback(() => {
        navigator.clipboard.writeText(text)
    },[text])

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button 
                className={cls.copyBtn} 
                theme={ThemeButton.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon className={cls.copyIcon}/>
            </Button>
            <code >
                {text}
            </code>
        </pre>
    );
})