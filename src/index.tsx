import { ThemProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';

render(
    <BrowserRouter>
        <ThemProvider>
            <App />
        </ThemProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
