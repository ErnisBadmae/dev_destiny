import {classNames} from 'shared/lib/className/className';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm';
import cls from './LoginModal.module.scss';


interface LoginModalProps {
    className?: string;
    isOpen: boolean,
    onClose: ()=> void
}

export const LoginModal=(props:LoginModalProps)=>  {

    const {
        className,
        isOpen,
        onClose
    } = props

    return (
        <Modal 
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm/>
        </Modal>
    );
}