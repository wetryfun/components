import { Component, Prop, ComponentInterface, Method, Event, EventEmitter } from '@stencil/core';
import { ConfigProviderConsumer, Config, ConfigLoader, metaLoader } from './index'

@Component({
  tag: 'wtf-config'
})
export class WtfConfig implements ComponentInterface {
  /**
   * Configuration object
   */
  @Prop({ mutable: true }) config?: Config;

  /**
   * Config loader
   */
  @Prop({ mutable: true }) load: ConfigLoader = metaLoader;

  /**
   * Triggers when the config is loaded
   */
  @Event() loaded: EventEmitter<Config>;

  /**
   * Gets value from config
   * @param key Key
   * @returns value from config
   */
  @Method()
  async getValue(key: string) {
    return await this.config[key];
  }

  /**
   * Sets config value
   * @param key Key
   * @param value Value
   * @returns New config object
   */
  @Method()
  async setValue(key: string, value: any): Promise<Config> {
    return this.config = { [key]: value, ...this.config };
  }

  async componentWillLoad() {
    this.loaded.emit(this.config = await this.load(this.config));
  }

  render() {
    return (
      <ConfigProviderConsumer.Provider state={{ config: this.config }}>
        <slot />
      </ConfigProviderConsumer.Provider>
    )
  }
}
