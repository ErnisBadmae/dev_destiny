
import { useTranslation } from 'react-i18next';

function MainPage() {
    
    //не отрисовывает эти компоненты
    //
    const {t} = useTranslation()


    return (
    <div style={{background:"red"}}>
       {t('Главная страница')}   
    </div>)
}

export default MainPage;
