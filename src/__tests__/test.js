/* eslint-disable no-undef */
import Popover from '../js/Popover.js';

const testPopover = new Popover(document.createElement('div'));
testPopover.bind();

test('throw_error_test', () => {
  expect(() => new Popover('text')).toThrow();
});

test('bind_test', () => {
  expect(testPopover.container.innerHTML).toEqual(` <div class="popover hidden">
        <h3 class="popover-title"></h3>
        <div class="popover-body"></div>
        <div class="arrow"></div>
      </div>
    `);
});

test('getContainer_test', () => {
  const popover = testPopover.getContainer();
  expect(popover.className.includes('popover')).toBeTruthy();
});

test('getTitle_test', () => {
  const title = testPopover.getTitle();
  expect(title.className.includes('popover-title')).toBeTruthy();
});

test('getBody_test', () => {
  const body = testPopover.getBody();
  expect(body.className.includes('popover-body')).toBeTruthy();
});

test('Метод showPopover меняет класс и показывает окно Popover', () => {
  const popover = testPopover.getContainer();
  const newDiv = document.createElement('div');
  newDiv.dataset.title = 'title';
  newDiv.dataset.text = 'text';
  testPopover.showPopover(newDiv);
  expect(popover.className.includes('show')).toBe(true);
});
test('Метод showPopover, при повторном вызове меняет класс и скрывает окно Popover', () => {
  const popover = testPopover.getContainer();
  const newDiv = document.createElement('div');
  newDiv.dataset.title = 'title';
  newDiv.dataset.text = 'text';
  testPopover.showPopover(newDiv);
  expect(popover.className.includes('hidden')).toBe(true);
});
