/* eslint-disable linebreak-style */
/* eslint-disable lines-between-class-members */

export default class Popover {
  constructor(containerHTML) {
    if (!(containerHTML instanceof HTMLElement)) {
      throw new Error('Передайте HTML элемент');
    }
    this.container = containerHTML;
  }

  bind() {
    this.container.insertAdjacentHTML('beforeend',
      ` <div class="popover hidden">
        <h3 class="popover-title"></h3>
        <div class="popover-body"></div>
        <div class="arrow"></div>
      </div>
    `);
  }

  getContainer() {
    return this.container.querySelector('.popover');
  }
  getTitle() {
    return this.container.querySelector('.popover-title');
  }
  getBody() {
    return this.container.querySelector('.popover-body');
  }

  showPopover(element) {
    const popover = this.getContainer();
    const title = this.getTitle();
    const body = this.getBody();
    if (popover.className.includes('hidden')) {
      popover.classList.remove('hidden');
      popover.classList.add('show');
      title.textContent = element.dataset.title;
      body.textContent = element.dataset.text;
      const baseElementCoord = element.getBoundingClientRect();
      const tooltipElementCoord = popover.getBoundingClientRect();
      popover.style.top = `
        ${baseElementCoord.top - tooltipElementCoord.height - 10}px
      `;
      popover.style.left = `
        ${baseElementCoord.left + baseElementCoord.width / 2 - tooltipElementCoord.width / 2}px
      `;
    } else if (popover.className.includes('show')) {
      popover.classList.remove('show');
      popover.classList.add('hidden');
      title.textContent = '';
      body.textContent = '';
    }
  }
}
