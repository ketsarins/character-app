import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Character from '@/components/characters/Character.vue'
import { BootstrapVue } from 'bootstrap-vue'
import CharacterService from "@/services/api/CharacterService"

// create an extended `Vue` constructor
const localVue = createLocalVue()
// install BootstrapVue plugins
localVue.use(BootstrapVue)

describe('Character.vue', () => {
  it('has a mounted function', () => {
    expect(typeof Character.mounted).toBe('function')
  })

  it('renders the correct markup', () => {
    // Mount the component.
    const wrapper = mount(Character, localVue)
    expect(wrapper.html()).toContain('<div class="character">')
  })

  it('sets the correct default data', () => {
    const defaultData = Character.data()
    expect(defaultData.loading).toBe(true)
    expect(defaultData.characterData).toEqual([]);
  })

  it('should call getCharacters() when mounted hook', () => {
    const getCharacters = jest.fn()
    const wrapper = shallowMount(Character, {
      localVue,
      methods: {
        getCharacters
      }
    })

    expect(getCharacters).toHaveBeenCalled()
  });

})
