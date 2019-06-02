# wtf-config

A custom element for putting configuration. More or less just [`@stencil/state-tunnel`](https://github.com/ionic-team/stencil-state-tunnel/) with some sugar.

## Usage

```
<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
    />
    <meta name="DSN" content="https://123.123.123.123" />
    
    <title>WeTry.fun config demo</title>
    <link rel="apple-touch-icon" href="../assets/icon/favicon.png" />
    <link rel="icon" type="image/x-icon" href="../assets/icon/favicon.ico" />
    <script src="../build/wtf.js"></script>
  </head>
  <body>
    <wtf-config>
      <wtf-config-test></wtf-config-test>
    </wtf-config>
  </body>
</html>
```

```
import { Component, Element, Prop, ComponentInterface } from '@stencil/core';
import { ConfigProviderConsumer, Config } from '@wtf/components/types/components/wtf-config'

@Component({
  tag: 'wtf-config-test'
})
export class WtfConfigTest implements ComponentInterface {
  @Element() el: HTMLWtfConfigElement;

  @Prop({ mutable: true }) config: Config;

  render() {
    return (
      <span>{this.config.DSN}</span>
    )
  }
}

ConfigProviderConsumer.injectProps(WtfConfigTest, ['config']);
```


<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description          | Type                                                | Default      |
| -------- | --------- | -------------------- | --------------------------------------------------- | ------------ |
| `config` | --        | Configuration object | `{ [key: string]: any; }`                           | `undefined`  |
| `load`   | --        | Config loader        | `(config: Config) => Config \| PromiseLike<Config>` | `metaLoader` |


## Events

| Event    | Description                        | Type                  |
| -------- | ---------------------------------- | --------------------- |
| `loaded` | Triggers when the config is loaded | `CustomEvent<Config>` |


## Methods

### `getValue(key: string) => Promise<any>`

Gets value from config

#### Parameters

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| `key` | `string` | Key         |

#### Returns

Type: `Promise<any>`

value from config

### `setValue(key: string, value: any) => Promise<Config>`

Sets config value

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `key`   | `string` | Key         |
| `value` | `any`    | Value       |

#### Returns

Type: `Promise<Config>`

New config object


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
