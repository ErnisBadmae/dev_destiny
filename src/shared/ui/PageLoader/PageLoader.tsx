import {classNames} from 'shared/lib/className/className';
import { Loader } from '../Loader/Loader';
import cls from './PageLoader.module.scss';


interface PageLoaderProps {
 className?: string;
}

export const PageLoader=({className}:PageLoaderProps)=>  {

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
}