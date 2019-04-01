import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'wtf',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  copy: [
    { src: 'examples' }
  ],
  devServer: {
    openBrowser: false
  }
};
