import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'wtf-timeline-block',
  styleUrl: 'wtf-timeline-block.css'
})
export class WtfTimelineBlock {
  @Element() el: HTMLElement;

  /**
   * Date
   */
  @Prop() date: string;

  /**
   * Date color
   */
  @Prop() colorDate: string;
  
  /**
   * Icon background color
   */
  @Prop() colorIconBg: string;

  /**
   * Icon shadow color
   */
  @Prop() colorIconShadow: string;

  /**
   * Content color
   */
  @Prop() colorContent: string;

  /**
   * Content background color
   */
  @Prop() colorContentBg: string;

  /**
   * Content shadow color
   */
  @Prop() colorContentShadow: string;

  componentWillLoad() {
    const style = this.el.style;

    if (this.colorDate) {
      style.setProperty('--color-date', this.colorDate);
    }
    if (this.colorIconBg) {
      style.setProperty('--color-icon-bg', this.colorIconBg);
    }
    if (this.colorIconShadow) {
      style.setProperty('--color-icon-shadow', this.colorIconShadow);
    }
    if (this.colorContent) {
      this.el.style.setProperty('--color-content', this.colorContent)
    }
    if (this.colorContentBg) {
      style.setProperty('--color-content-bg', this.colorContentBg);
    }
    if (this.colorContentShadow) {
      style.setProperty('--color-content-shadow', this.colorContentShadow);
    }
  }

  render() {
    return [
      <div class='icon'>
        <slot name='icon' />
      </div>,

      <div class='content'>
        <slot />

        <div class='footer'>
          <span class='date'>{this.date}</span>
          <slot name='footer' />
        </div>
      </div>
    ];
  }
}
