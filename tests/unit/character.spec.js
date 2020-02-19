import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Character from '@/components/characters/Character.vue'
import { BootstrapVue } from 'bootstrap-vue'

// create an extended `Vue` constructor
const localVue = createLocalVue()
// install BootstrapVue plugins
localVue.use(BootstrapVue)

describe('Character.vue', () => {

  it('renders the correct markup', () => {
    // Mount the component.
    const wrapper = mount(Character, localVue)
    expect(wrapper.html()).toContain('<div class="character">')
  })

  it('has a created function', () => {
    expect(typeof Character.created).toBe('function')
  })

  it('sets the correct default data', () => {
    const defaultData = Character.data()
    expect(defaultData.loading).toBe(true)
    expect(defaultData.characterData).toEqual([]);
  })

})
