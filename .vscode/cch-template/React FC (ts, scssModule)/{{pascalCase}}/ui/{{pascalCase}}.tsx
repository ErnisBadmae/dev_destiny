import {classNames} from 'shared/lib/className/className';
import cls from './{{pascalCase}}.module.scss';


interface {{pascalCase}}Props {
 className?: string;
}

export const {{pascalCase}}=({className}:{{pascalCase}}Props)=>  {

 return (
        <div className={classNames(cls.{{pascalCase}}, {}, [className])}>
        </div>
    );
}