import {FC, lazy } from 'react';
import { LoginFormProps } from './loginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) =>{
   
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));