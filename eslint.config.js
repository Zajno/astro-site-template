import config from '@zajno/eslint-config';
import astroPlugin from 'eslint-plugin-astro';

const zajnoConfig = Array.isArray(config) ? config : [config];

// Apply zajno config only to non-Astro files
const zajnoConfigForNonAstro = zajnoConfig.map(c => ({
    ...c,
    files: c.files || ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
}));

export default [
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.eslintrc.cjs',
        ],
    },
    ...zajnoConfigForNonAstro,
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        rules: {
            // Override indent to 4 spaces (zajno disables @typescript-eslint/indent)
            indent: ['warn', 4, { SwitchCase: 1 }],
        },
    },
    ...astroPlugin.configs['flat/recommended'],
    // TypeScript rules are not applied by astro-eslint-parser
];
