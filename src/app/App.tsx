import { classNames } from 'shared/lib/className/className';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';


import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app',{}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar/>
                <AppRouter />
            </div>

           
        </div>
    );
}

export default App;
