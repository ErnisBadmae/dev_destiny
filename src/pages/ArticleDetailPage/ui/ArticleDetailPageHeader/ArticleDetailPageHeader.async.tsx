/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const ArticleDetailPageHeaderAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailPageHeader')),1500)
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
   
}));

//check storybook