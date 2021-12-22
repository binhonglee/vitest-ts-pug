/// <reference types="vitest/global.d.ts" />

import { mount } from '@vue/test-utils';
import HelloWorld from '../components/HelloWorld.vue';
import HelloWorldPug from '../components/HelloWorldPug.vue';

test('HelloWorld', async () => {
  expect(HelloWorld).toBeTruthy();
  const wrapper = mount(HelloWorld, {});
  expect(wrapper.text()).toEqual('Hello World');
});

test('HelloWorldPug', async () => {
  expect(HelloWorldPug).toBeTruthy();
  const wrapper = mount(HelloWorldPug, {});
  expect(wrapper.text()).toEqual('Hello World');
});
