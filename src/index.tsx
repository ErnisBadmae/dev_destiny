import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

import  './shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemProvider>
                <App />
            </ThemProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
);

//для заливки