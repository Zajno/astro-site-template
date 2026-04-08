import config from '@zajno/eslint-config';
import astroPlugin from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';

const zajnoConfig = Array.isArray(config) ? config : [config];

/**
 * typescript-eslint v8+: `project` conflicts with `projectService` (project is ignored).
 * @zajno/eslint-config still sets both; strip `project` so parsing does not fail.
 */
function stripRedundantParserProject(conf) {
    const po = conf.languageOptions?.parserOptions;
    if (!po || po.projectService !== true || po.project === undefined) {
        return conf;
    }
    const { project: _removed, ...parserOptions } = po;
    return {
        ...conf,
        languageOptions: {
            ...conf.languageOptions,
            parserOptions,
        },
    };
}

// Apply zajno config only to non-Astro files
const zajnoConfigForNonAstro = zajnoConfig.map(c => {
    const withFiles = {
        ...c,
        files: c.files || ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    };
    return stripRedundantParserProject(withFiles);
});

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
    {
        files: ['**/*.{jsx,tsx}'],
        ...reactHooks.configs.flat.recommended,
    },
    ...astroPlugin.configs['flat/recommended'],
    // Hooks in frontmatter, JSX-like template expressions, and virtual `<script>` blocks (*.astro/*.js|*.ts from the processor).
    {
        files: ['**/*.astro', '**/*.astro/*.js', '**/*.astro/*.ts'],
        ...reactHooks.configs.flat.recommended,
    },
];
