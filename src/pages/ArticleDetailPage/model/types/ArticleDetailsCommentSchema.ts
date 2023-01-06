import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";

export interface ArticleDetailsCommentSchema extends EntityState<Comment>{
    isLoading?: boolean;
    isError?: string;
    ids: string[];
    entities: Record<any, any>
}