import Vue from 'vue';
import Character from './Character';
import DetailLink from './DetailLink';
import CharacterInfo from './CharacterInfo';
import Filters from './Filters';


// Register the components
Vue.component('character', Character);
Vue.component('detail-link', DetailLink);
Vue.component('character-info', CharacterInfo);
Vue.component('ct-filters', Filters);