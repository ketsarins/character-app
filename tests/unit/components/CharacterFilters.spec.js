import { createLocalVue, mount } from '@vue/test-utils';
import CharacterFilters from '../../../src/components/characters/CharacterFilters.vue';
import { BootstrapVue } from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Character.vue', () => {
    it('renders character filter', async () => {
        const wrapper = mount(CharacterFilters, { localVue });
        wrapper.setData({
            genderSelected: "",
            gender: [
                { text: "All", value: "" },
                { text: "Female", value: "female" },
                { text: "Male", value: "male" },
                { text: "Genderless", value: "genderless" },
                { text: "Unknown", value: "unknown" }
            ],
            statusSelected: "",
            status: [
                { text: "All", value: "" },
                { text: "Alive", value: "alive" },
                { text: "Dead", value: "dead" },
                { text: "Unknown", value: "unknown" }
            ]
        });

        await wrapper.vm.$nextTick();

        const status = wrapper.find('#radio-status');
        const gender = wrapper.find('#radio-gender');

        expect(status.html()).toContain('value="alive"');
        expect(status.html()).toContain('value="dead"');
        expect(status.html()).toContain('value="unknown"');

        expect(gender.html()).toContain('value="male"');
        expect(gender.html()).toContain('value="female"');
        expect(gender.html()).toContain('value="genderless"');
        expect(gender.html()).toContain('value="unknown"');
    });
});