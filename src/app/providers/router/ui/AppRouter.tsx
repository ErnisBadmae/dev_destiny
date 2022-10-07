import React from 'react';

function AppRouter(props) {
    return (
        <div>
            <Suspense fallback={<div> Loading ...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default AppRouter;
