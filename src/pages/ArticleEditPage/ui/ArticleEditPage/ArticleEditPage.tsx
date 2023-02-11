import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {classNames} from 'shared/lib/className/className';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleEditPage.module.scss';


interface ArticleEditPageProps {
 className?: string;
}

const ArticleEditPage = memo((props:ArticleEditPageProps)=>  {
    const {
        className
    } = props

    const {id} = useParams<{id: string}>()
    const isEdit = Boolean(id)
    const { t} = useTranslation()

    return (

        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            { isEdit ?t( "Редактировать статью - ") + id :t( "Создать статью")
            }
        </Page>
    );
})

export default ArticleEditPage;
