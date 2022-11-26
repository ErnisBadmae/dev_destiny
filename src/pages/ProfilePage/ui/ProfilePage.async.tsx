/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore 
    setTimeout(() => resolve(import('./ProfilePage')),1500)
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
   
}));

//check storybook