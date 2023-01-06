import { classNames } from "shared/lib/className/className";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";
import { Suspense, useEffect } from "react";


function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch()

    const inited = useSelector(getUserInited) 

    useEffect(() => {
        dispatch(userActions.initAuthData())
    },[dispatch])

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    { inited &&  <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
