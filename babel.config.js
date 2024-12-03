module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }], // Transpila código moderno para Node.js
      '@babel/preset-react' // Soporte para React JSX
    ],
  };
  