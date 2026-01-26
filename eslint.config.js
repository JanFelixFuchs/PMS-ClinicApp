import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-redux',
              importNames: ['useDispatch', 'useSelector'],
              message:
                "Only use custom typed hooks' (useAppDispatch/useAppSelector)",
            },
          ],
        },
      ],
    },
    overrides: [
      {
        files: [
          'src/utils/hooks/useDispatch.ts',
          'src/utils/hooks/useSelector.ts',
        ],
        rules: {
          'no-restricted-imports': 'off',
        },
      },
    ],
  },
]);
