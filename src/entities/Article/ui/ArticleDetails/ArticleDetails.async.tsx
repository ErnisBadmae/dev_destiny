/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const ArticleDetailsAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./ArticleDetails')),1500)
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
   
}));

//check storybook