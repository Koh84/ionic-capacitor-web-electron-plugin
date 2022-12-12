export interface ApiPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  openMap(options: OpenMapOptions): Promise<OpenMapOptions>;
}

export interface OpenMapOptions {
  latitude: number;
  longitude: number;
}