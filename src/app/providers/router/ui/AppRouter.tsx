import { getUserAuthData } from 'entities/User';
import  { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

function AppRouter() {

    const isAuth = useSelector(getUserAuthData)
    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) =>{
            if(route.authOnly && !isAuth) {
                return false
            }
            return true
        } )
    },[isAuth ])

    return (
        <Routes>
            {routes.map(({ element, path }) => {
                return <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader/>}>
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        </Suspense>
                    )}
                />;
                        
            })}
        </Routes>
    );
}

export default memo(AppRouter);
