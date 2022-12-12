export interface ApiPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
