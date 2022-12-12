import { WebPlugin } from '@capacitor/core';

import type {
  ApiPluginPlugin,
  OpenMapOptions
} from './definitions';

export class ApiPluginWeb extends WebPlugin implements ApiPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async openMap(location: OpenMapOptions): Promise<OpenMapOptions> {
    return location;
  }
}
