import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import Coffee from '@/components/Coffee.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue();

localVue.use(Vuetify);

describe('Coffee.vue', () => {
  it('shows coffee card which activates modal', () => {
    const wrapper = mount(Coffee, { localVue })
    const span = wrapper.find('span')
    expect(span.text()).to.contain('Connect with your coworkers')
  })
})