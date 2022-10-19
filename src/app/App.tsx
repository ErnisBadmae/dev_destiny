import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { classNames } from 'shared/lib/className/className';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app',{}, [theme])}>
            <Navbar />
            <AppRouter />
           
        </div>
    );
}

export default App;
