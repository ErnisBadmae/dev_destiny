import { ThemProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

import  './shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <ThemProvider>
            <App />
        </ThemProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
