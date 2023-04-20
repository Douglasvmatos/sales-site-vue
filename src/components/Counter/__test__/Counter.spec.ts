import { mount } from '@vue/test-utils'
import Counter from '../../Counter/Counter.vue'

describe('Counter.vue', () => {
  test('clicking button increments the counter value by 1', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('Challenge')
    wrapper.find('button').trigger('click')
  })
})