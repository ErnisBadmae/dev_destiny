import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import 'app/styles/index.scss';
import './shared/config/i18n/i18n';


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