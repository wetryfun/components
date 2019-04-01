/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface WtfTimelineBlock {
    /**
    * Content color
    */
    'colorContent': string;
    /**
    * Content background color
    */
    'colorContentBg': string;
    /**
    * Content shadow color
    */
    'colorContentShadow': string;
    /**
    * Date color
    */
    'colorDate': string;
    /**
    * Icon background color
    */
    'colorIconBg': string;
    /**
    * Icon shadow color
    */
    'colorIconShadow': string;
    /**
    * Date
    */
    'date': string;
  }
  interface WtfTimelineBlockAttributes extends StencilHTMLAttributes {
    /**
    * Content color
    */
    'colorContent'?: string;
    /**
    * Content background color
    */
    'colorContentBg'?: string;
    /**
    * Content shadow color
    */
    'colorContentShadow'?: string;
    /**
    * Date color
    */
    'colorDate'?: string;
    /**
    * Icon background color
    */
    'colorIconBg'?: string;
    /**
    * Icon shadow color
    */
    'colorIconShadow'?: string;
    /**
    * Date
    */
    'date'?: string;
  }

  interface WtfTimeline {
    /**
    * Background color
    */
    'colorTimelineBg': string;
    /**
    * Separator color
    */
    'colorTimelineSeparator': string;
  }
  interface WtfTimelineAttributes extends StencilHTMLAttributes {
    /**
    * Background color
    */
    'colorTimelineBg'?: string;
    /**
    * Separator color
    */
    'colorTimelineSeparator'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WtfTimelineBlock': Components.WtfTimelineBlock;
    'WtfTimeline': Components.WtfTimeline;
  }

  interface StencilIntrinsicElements {
    'wtf-timeline-block': Components.WtfTimelineBlockAttributes;
    'wtf-timeline': Components.WtfTimelineAttributes;
  }


  interface HTMLWtfTimelineBlockElement extends Components.WtfTimelineBlock, HTMLStencilElement {}
  var HTMLWtfTimelineBlockElement: {
    prototype: HTMLWtfTimelineBlockElement;
    new (): HTMLWtfTimelineBlockElement;
  };

  interface HTMLWtfTimelineElement extends Components.WtfTimeline, HTMLStencilElement {}
  var HTMLWtfTimelineElement: {
    prototype: HTMLWtfTimelineElement;
    new (): HTMLWtfTimelineElement;
  };

  interface HTMLElementTagNameMap {
    'wtf-timeline-block': HTMLWtfTimelineBlockElement
    'wtf-timeline': HTMLWtfTimelineElement
  }

  interface ElementTagNameMap {
    'wtf-timeline-block': HTMLWtfTimelineBlockElement;
    'wtf-timeline': HTMLWtfTimelineElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}