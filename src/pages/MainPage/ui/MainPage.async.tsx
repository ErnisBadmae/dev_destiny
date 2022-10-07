import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve(
                        // @ts-ignore
                        import('./MainPage')
                    ),
                1500
            );
        })
);
