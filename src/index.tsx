import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import ThemProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

render(
    <BrowserRouter>
        <ThemProvider>
            <App />
        </ThemProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
