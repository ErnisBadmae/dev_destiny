import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {
        isDev 
    } = options
    
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const babelLoader = buildBabelLoader(options)

    const cssLoader = buildCssLoaders(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        cssLoader,
        babelLoader,
        svgLoader, 
        fileLoader, 
        typescriptLoader,
    ];
}
