import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import  './shared/config/i18n/i18n'
import "app/styles/index.scss";

render(
    <StoreProvider>   
        <BrowserRouter>
            <ErrorBoundary>
                <ThemProvider>
                    <App />
                </ThemProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
);

