module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '/',
          alias: {
            '<core>': './core'
          }
        }
      ]
    ]
  };
};

// require('@babel/polyfill');
// module.exports = {
//   plugins: [
//     [
//       'module-resolver',
//       {
//         root: '/',
//         alias: {
//           '<drivers>': './src/drivers/',
//           '<storybook>': './storybook',
//           '~': './src'
//         },
//         extensions: ['.android.js', '.ios.js', '.js']
//       }
//     ],
//     [
//       'transform-inline-environment-variables',
//       {
//         include: ['NODE_ENV', 'STORYBOOK_ENABLED', 'SENTRY_DSN', 'HIVE_APP_DEFAULT_ENVIRONMENT', 'HIVE_APP_ENABLE_AUTO_LOGIN_CREDENTIALS', 'QA_MODE']
//       }
//     ],
//     '@babel/plugin-syntax-do-expressions',
//     '@babel/plugin-proposal-function-bind',
//     '@babel/plugin-proposal-export-default-from',
//     '@babel/plugin-proposal-export-namespace-from',
//     '@babel/plugin-transform-exponentiation-operator',
//     ['@babel/plugin-proposal-decorators', { legacy: true }],
//     'babel-plugin-styled-components'
//   ],
//   presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
//   env: {
//     production: {
//       plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]]
//     },
//     development: {
//       sourceMap: 'inline'
//     }
//   }
// };
