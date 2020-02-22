import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Character from '@/components/characters/Character.vue';
import Filters from '@/components/characters/Filters.vue'
import { BootstrapVue, BootstrapVueIcons, BSpinner } from 'bootstrap-vue';


// create an extended `Vue` constructor
const localVue = createLocalVue();
// Registered vuetify
// install BootstrapVue plugins
localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);
localVue.component('b-spinner', BSpinner);


describe('Character.vue', () => {
  it('has a created function', () => {
    expect(typeof Character.created).toBe('function')
  })

  it('renders the correct markup', () => {
    // Mount the component.
    const wrapper = mount(Character, localVue)
    expect(wrapper.html()).toContain('<div id="character" class="character">')
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
