import Vue from 'vue'
import VueResource from 'vue-resource';

Vue.use(VueResource)

Vue.http.options.root = 'https://app-4neo.herokuapp.com';
//Vue.http.options.root = 'http://localhost:8081';
Vue.prototype.$api = {
    cidades: Vue.resource('cidades{/id}'),
    estados: Vue.resource('estados{/id}'),
    //pacientesSexo: Vue.resource('pacientes/sexo'),
    pacientes: Vue.resource('pacientes{/id}')

}
