const handlerBabelSpread = require('s2s-handler-babel-object-rest-spread').default

module.exports = {
  watch: './**/*.ts',
  plugins: [
    {
      test: /src\/actions\/(?!.*index).*\.ts/,
      plugin: ['s2s-redux-actions', {autocomplete: false}]
    },
    {
      test: /src\/actions\/(?!.*index).*\.ts/,
      output: "index.ts",
      plugin: ['s2s-redux-actions-root',
      { input: 'src/actions/*.ts', output: "src/actions/index.ts" }]
    },
    {
      test: /src\/reducers\/(?!.*index).*\.ts/,
      handler: handlerBabelSpread,
      plugin: ['s2s-redux-actions-reducers', {autocomplete: false}]
     },
     {
       test: /src\/reducers\/(?!.*index).*\.ts/,
       output: "index.ts",
       handler: handlerBabelSpread,
       plugin: ['s2s-redux-actions-reducers-root',
       { input: 'src/reducers/*.ts', output: "src/reducers/index.ts",router: true }]
     },
    {
       test: /src\/sagas\/(?!.*index).*\.ts/,
       plugin: ['s2s-redux-sagas']
    },
    {
      test: /src\/sagas\/(?!.*index).*\.ts/,
      output: "index.ts",
      plugin: ['s2s-redux-sagas-root',
      { input: 'src/sagas/*.ts', output: "src/sagas/index.ts" }]
    },
    {
      test: /src\/api\/(?!.*index).*\.ts/,
      plugin: ['s2s-axios-api']
    },
    {
      test: /src\/api\/(?!.*index).*\.ts/,
      output: "index.ts",
      plugin: ['s2s-axios-api-root',
      { input: 'src/api/*.ts', output: "src/api/index.ts" }]
    },
    {
      test: /src\/builders\/.*\.ts/,
      plugin: ['s2s-action-builders']
    },
    {
      test: /src\/builders\/.*\.ts/,
      plugin: ['s2s-redux-actions-manager',
      { input: 'src/builders/*.ts', output: "src/actions/*.ts" }]
    },
    {
      test: /src\/builders\/.*\.ts/,
      plugin: ['s2s-redux-actions-reducers-manager',
      { input: 'src/builders/*.ts', output: "src/reducers/*.ts" }]
    },
    {
      test: /src\/builders\/.*\.ts/,
      plugin: ['s2s-redux-sagas-manager',
      { input: 'src/builders/*.ts', output: "src/sagas/*.ts" }]
    },
    {
      test: /src\/builders\/.*\.ts/,
      plugin: ['s2s-axios-api-manager',
      { input: 'src/builders/*.ts', output: "src/api/*.ts" }]
    }
  ],
  templates: [
    {
      test: /src\/actions\/.*\.ts/, input: 'redux-action.ts'
    },
    {
      test: /src\/reducers\/.*\.ts/, input: 'reducer.ts'
    },
    {
      test: /src\/sagas\/.*\.ts/, input: 'saga.ts'
    },
    {
      test: /src\/containers\/.*\.ts/, input: 'container.ts'
    },
    {
      test: /src\/api\/.*\.ts/, input: 'axios-api.ts'
    }
  ]
}