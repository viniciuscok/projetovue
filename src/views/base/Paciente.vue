<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show">
            <div slot="header">
              <i class="fa fa-edit"></i> Cadastro de Paciente
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
                
                <b-tabs content-class="mt-3">
                  <b-tab title="Paciente" active>
                    <b-tabs content-class="mt-3">
                      <b-tab title="Informações" active> 
                        <b-row>
                          <b-col sm="10">
                            <b-form-group>
                              <label for="pacienteNome">Nome</label>
                              <b-form-input type="text" id="pacienteNome" placeholder="Informe o nome do Paciente" v-model="estado.id"></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col sm="2">
                            <b-form-group>
                              <label for="pacienteIdade">Idade</label>
                              <b-form-input type="text" id="pacienteIdade" placeholder="Idade" v-model="estado.nome"></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row>  
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteNascimento">Nascimento</label>
                              <b-form-input type="date" id="pacienteNascimento" v-model="estado.nome"></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteAdmissao">Admissão</label>
                              <b-form-input type="date" id="pacienteAdmissao" v-model="estado.nome"></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacientePeso">Peso</label>
                              <b-form-input type="text" id="pacientePeso" placeholder="informe o peso do paciente" v-model="estado.sigla" ></b-form-input>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="3">
                            <b-form-group>
                              <label for="pacienteSexo">Sexo</label>
                              <b-form-select id="pacienteSexo" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="3">
                            <b-form-group>
                              <label for="pacienteProcedencia">Procedência</label>
                              <b-form-select id="pacienteProcedencia" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                        </b-row>
                      </b-tab>
                      <b-tab title="Capurro">
                        <b-row>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteTextura">Textura da Pele</label>
                              <b-form-select id="pacienteTextura" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteOrelha">Forma da Orelha</label>
                              <b-form-select id="pacienteOrelha" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteMamaria">Glândula Mamária</label>
                              <b-form-select id="pacienteMamaria" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteMamilo">Formação Mamilo</label>
                              <b-form-select id="pacienteMamilo" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacientePlantar">Prega Plantar</label>
                              <b-form-select id="pacientePlantar" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                        </b-row>
                      </b-tab>
                      <b-tab title="Reanimação">
                        <b-row>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteApagar1">Teste Apagar(1 minuto)</label>
                              <b-form-select id="pacienteApagar1" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteApagar5">5 minutos</label>
                              <b-form-select id="pacienteApagar5" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteApagar10">10 minutos</label>
                              <b-form-select id="pacienteApagar10" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteRespiratorio">Respiratório</label>
                              <b-form-select id="pacienteRespiratorio" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteHemodonamico">Hemodonámico</label>
                              <b-form-select id="pacienteHemodonamico" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteEstabilizacao">T.Estabilização</label>
                              <b-form-select id="pacienteEstabilizacao" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                value="Please select">
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                        </b-row>
                      </b-tab>
                      <b-tab title="Admissão">
                        <b-row>
                          <b-col sm="12">
                            <label for="pacienteSituacao">Situação</label>
                            <b-form-textarea id="pacienteSituacao" size="lg" placeholder="Teste"></b-form-textarea>
                          </b-col> 
                          <b-col sm="12">
                            <label for="pacienteSuspeita">Suspeita Inicial</label>
                            <b-form-textarea id="pacienteSuspeita" size="lg" placeholder="Teste"></b-form-textarea>
                          </b-col>  
                        </b-row>  
                      </b-tab>
                    </b-tabs>
                  </b-tab>  
                    <b-tab title="Mae">
                      <b-form-group>
                        <label for="id">Id</label>
                        <b-form-input type="text" id="id" placeholder="informe o id do estado" v-model="estado.id"></b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <label for="nome">Nome</label>
                        <b-form-input type="text" id="nome" placeholder="informe o nome da Mãe" v-model="estado.nome"></b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <label for="sigla">Sigla</label>
                        <b-form-input type="text" id="sigla" placeholder="informe a sigla do estado" v-model="estado.sigla" ></b-form-input>
                      </b-form-group>
                    </b-tab>
                    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
                  </b-tabs>
                <div class="form-actions">
                  <b-button type="submit" variant="primary">Save changes</b-button>
                  <b-button type="button" variant="secondary">Cancel</b-button>
                </div>
               
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
