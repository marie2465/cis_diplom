import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/pages/Home.vue'
import Vuex from "vuex"

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({})
  })

  it('render without errors', () => {
    const wrapper = shallowMount(Home, {localVue, store})
    expect(wrapper.vm).toBeTruthy()
  })
})
