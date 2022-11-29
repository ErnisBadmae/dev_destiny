import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

import  './shared/config/i18n/i18n'
import "app/styles/index.scss";

render(
    <BrowserRouter>
        <StoreProvider>   
            <ErrorBoundary>
                <ThemProvider>
                    <App />
                </ThemProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
);