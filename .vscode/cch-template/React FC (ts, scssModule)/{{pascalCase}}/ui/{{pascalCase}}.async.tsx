/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const {{pascalCase}}Async = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./{{pascalCase}}')),1500)
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
   
}));

//check storybook