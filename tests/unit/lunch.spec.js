import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import Lunch from '@/components/Lunch.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue();

localVue.use(Vuetify);

describe('Lunch.vue', () => {
  it('shows lunch card which activates modal', () => {
    const wrapper = mount(Lunch, { localVue })
    const span = wrapper.find('span')
    expect(span.text()).to.contain('Grab a bite with your officemates')
  })
})