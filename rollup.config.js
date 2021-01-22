import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
// import { terser } from 'rollup-plugin-terser';

// const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    output: {
        file: 'lib/bundle.js',
        // immediately-invoked function expression — suitable for <script> tags
        format: 'iife',
        sourcemap: true,
        // variable value 'main' is exported into Browser
        // name: 'CookieBar',
    },
    plugins: [
        resolve(), // tells Rollup how to find commonjs in node_modules
        alias({
            entries: [
                { find: 'react', replacement: 'preact/compat' },
                { find: 'react-dom', replacement: 'preact/compat' }
            ]
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react']
        }),
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
        }),
        commonjs({extensions: ['.js']}), // converts commonjs to ES modules
        // production && terser(), // minify, but only in production
    ]
};