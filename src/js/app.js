/* eslint-disable linebreak-style */
import Popover from './Popover.js';

const mainHTML = document.querySelector('.container');

const newPopover = new Popover(mainHTML);

newPopover.bind();
const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', () => {
  newPopover.showPopover(buttonElement);
});
