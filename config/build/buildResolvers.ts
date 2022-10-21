import { BuildOptions } from './types/config';
import { ResolveOptions } from 'webpack';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    // const {paths} = options
    // const {src} = paths
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        // alias: {"@":src},
    };
}
