import { defineConfig } from '@umijs/max';
import { routes } from './src/config/config';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: routes,
  proxy: {
    '/mock': {
      target: 'https://console-mock.apipost.cn',
      changeOrigin: true,
      pathRewrite: {
        '/mock': '/app/mock/project/be0a5711-adf4-4a36-b6ce-0773641e31e7',
      },
    },
    // '/api': {
    //   target: 'http://jsonplaceholder.typicode.com/',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api': '' },
    // },
  },
  npmClient: 'npm',
});
