/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const ArticleTextBlockComponentAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./ArticleTextBlockComponent')),1500)
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
   
}));

//check storybook