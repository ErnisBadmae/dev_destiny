// import { BugButton } from 'app/providers/ErrorBoundary';
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {

    const {t} = useTranslation()

    // const [value, setValue] = useState('')

    // const onChange = (val: string) => {
    //     setValue(val)
    // }

    return (
        <div style={{color:'red'}}>
            {t("Главная страница")}
        </div>
    );
}

export default MainPage;
