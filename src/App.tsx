import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Suspense, useContext, useState } from 'react';

import { Theme, ThemeContext } from './theme/ThemeContext';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/className/className';

function App() {
    const { theme, toggleTheme } = useTheme();
    const bool = true;
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
