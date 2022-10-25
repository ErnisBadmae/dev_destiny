import { classNames } from 'shared/lib/className/className';
import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';


import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const Component = () =>  {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language ==='ru' ? 'en' : 'ru')
    }
   
    return (
      <div>
        <button onClick={toggle}>{t("Перевести")}</button>
        {t("Тестовый пример")}
      </div>
    );
  }

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app',{}, [theme])}>
            <Suspense fallback="">
            <Navbar />
            <Component/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter />
            </div>
            </Suspense>
        </div>
    );
}

export default App;
