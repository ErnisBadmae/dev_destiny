import  { memo, Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

function AppRouter() {

    const renderWithRapper = useCallback((route:AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                <div className='page-wrapper'>
                    {route.element}
                </div>
            </Suspense>
        )
        return (
            <Route
                key={route.path} 
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    },[])
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithRapper)}
            {/* {routes.map(({ element, path }) => {
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
                        
            })} */}
        </Routes>
    );
}

export default memo(AppRouter);
