<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              <i class="fa fa-edit"></i> Cadastro de estado
              <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting">
                  <i class="icon-settings"></i>
                </b-link>
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
                <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <form @submit.prevent="gravar()">
                <b-form-group>
                  <label for="id">Id</label>
                  <b-form-input type="text" id="id" placeholder="informe o id do estado" v-model="estado.id"></b-form-input>
                </b-form-group>
                <b-form-group>
                  <label for="nome">Nome</label>
                  <b-form-input type="text" id="nome" placeholder="informe o nome do estado" v-model="estado.nome"></b-form-input>
                </b-form-group>
                <b-form-group>
                  <label for="sigla">Sigla</label>
                  <b-form-input type="text" id="sigla" placeholder="informe a sigla do estado" v-model="estado.sigla" ></b-form-input>
                </b-form-group>
                <div class="form-actions">
                  <b-button type="submit" variant="primary">Save changes</b-button>
                  <b-button type="button" variant="secondary">Cancel</b-button>
                </div>
                </form>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Estado from '../../domain/estado/Estado'
export default {
  name: 'forms',
  data () {
    return {
      estado: new Estado(),
      selected: [], // Must be an array reference!
      show: true,
      
    }
  },
  methods: {
    gravar () {
      this.$http.post('http://localhost:8081/estados', this.estado)
        .then(() => this.estado = new Estado(), err => console.log(err));
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
