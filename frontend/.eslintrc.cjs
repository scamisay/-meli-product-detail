module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true, // si usás Vitest en vez de Jest, reemplazá esto por `globals: true`
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  rules: {
    // Podés personalizar tus reglas aquí
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
