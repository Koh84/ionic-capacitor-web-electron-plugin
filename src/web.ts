import { WebPlugin } from '@capacitor/core';

import type { ApiPluginPlugin } from './definitions';

export class ApiPluginWeb extends WebPlugin implements ApiPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
