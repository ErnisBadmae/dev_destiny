import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Suspense, useContext, useState } from 'react';

import { Theme, ThemeContext } from '../shared/config/theme/ThemeContext';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';

import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../helpers/className/className';
import './styles/index.scss';

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>переключить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div> Loading ...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
