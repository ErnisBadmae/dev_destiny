import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemProvider from './theme/ThemeProvider';

render(
    <BrowserRouter>
        <ThemProvider>
            <App />
        </ThemProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
