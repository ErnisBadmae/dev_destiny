import {classNames} from 'shared/lib/className/className';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm';
import cls from './LoginModal.module.scss';


interface LoginModalProps {
 className?: string;
}

export const LoginModal=({className}:LoginModalProps)=>  {

    return (
        <Modal 
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <LoginForm/>
        </Modal>
    );
}