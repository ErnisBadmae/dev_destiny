import { ArticleView } from '../../model/types/article';
import { memo } from 'react';
import {classNames} from 'shared/lib/className/className';
import cls from './ArticleViewSelector.module.scss';
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Button, ThemeButton } from 'shared/ui/Buttons/Button';
import { Icon } from 'shared/ui/Icon/Icon';



interface ArticleViewSelectorProps {
 className?: string;
 view: ArticleView,
 onViewClick?: (view:ArticleView) => void
}

const viewTypes = [
    {
        id:1,
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },

    {
        id:2,
        view: ArticleView.BIG,
        icon: ListIcon,
    }
]



export const ArticleViewSelector=memo((props:ArticleViewSelectorProps)=>  {
    const {
        className,
        view,
        onViewClick
    } = props

    const onClick = (newView: ArticleView) =>() =>  onViewClick?.(newView)
    
    

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button 
                    theme={ThemeButton.CLEAR} 
                    onClick={onClick(viewType.view)}
                  
                    key={viewType.id}
                >
                    <Icon 
                        Svg={viewType.icon }
                        className={classNames('', {[cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
})