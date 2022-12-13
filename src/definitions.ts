export interface ApiPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  openMap(options: OpenMapOptions): Promise<OpenMapOptions>;
  handleSocketConnect(): Promise<void>;
  handleSocketSend(): Promise<void>;
  handleSocketClose(): Promise<void>;
}

export interface OpenMapOptions {
  latitude: number;
  longitude: number;
}