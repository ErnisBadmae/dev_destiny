import { ArticleList, ArticleView } from "entities/Article";
import { memo } from "react";
import { classNames } from "shared/lib/className/className";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}


const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList 
                isLoading
                view={ArticleView.BIG}
                articles={[]} 
            />
        </div>
    );
};
export default memo(ArticlesPage);


