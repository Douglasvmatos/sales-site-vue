import { mount } from '@vue/test-utils'
import FormComponent from '../../Form/Form.vue'

test('submits a form', async () => {
  const wrapper = mount(FormComponent)

  await wrapper.find('input[type=name]').setValue('John')
  await wrapper.find('input[type=lastName]').setValue('Doe')
  await wrapper.find('input[type=email]').setValue('name@mail.com')
  await wrapper.find('input[type=phone]').setValue('(22)99999-0000')
  await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
})