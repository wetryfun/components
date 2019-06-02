
import { createProviderConsumer } from '@stencil/state-tunnel';

/**
 * Config object
 */
export type Config = { [key: string]: any }

interface ConfigState {
  config?: Config;
}

/**
 * Config loader
 */
export type ConfigLoader = (config: Config) => Config | PromiseLike<Config>;

export const ConfigProviderConsumer = createProviderConsumer<ConfigState>({}, (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />);

/**
 * Loads meta tags into configuration
 * @param config Current configuration
 * @returns Current configuration merged with meta key/values
 */
export const metaLoader: ConfigLoader = (config: Config) => {
  const conf = { ...config };
  document
    .querySelectorAll('meta[name][content]')
    .forEach(meta => conf[meta.getAttribute('name')] = meta.getAttribute('content'))
  return conf;
}
