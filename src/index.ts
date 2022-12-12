import { registerPlugin } from '@capacitor/core';

import type { ApiPluginPlugin } from './definitions';

const ApiPlugin = registerPlugin<ApiPluginPlugin>('ApiPlugin', {
  web: () => import('./web').then(m => new m.ApiPluginWeb()),
});

export * from './definitions';
export { ApiPlugin };
