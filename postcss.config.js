import autoprefixer from 'autoprefixer';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssPresetEnv from 'postcss-preset-env';

const config = {
    plugins: [
        postcssSimpleVars,
        autoprefixer,
        postcssPresetEnv({
            stage: 1,
        }),
    ],
}

export default config;