import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'wtf-timeline',
  styleUrl: 'wtf-timeline.css'
})
export class WtfTimeline {
  @Element() el: HTMLElement;

  /**
   * Background color
   */
  @Prop() colorTimelineBg: string;

  /**
   * Separator color
   */
  @Prop() colorTimelineSeparator: string;

  componentWillLoad() {
    const style = this.el.style;

    if (this.colorTimelineBg) {
      style.setProperty('--color-timeline-bg', this.colorTimelineBg);
    }
    if (this.colorTimelineSeparator) {
      style.setProperty('--color-timeline-separator', this.colorTimelineSeparator);
    }
  }

  render() {
    return (
      <div class='container'>
        <slot />
      </div>
    );
  }
}
