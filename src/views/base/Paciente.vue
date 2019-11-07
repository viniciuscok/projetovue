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
                <form @submit.prevent="gravar()">
                <b-tabs content-class="mt-3">
                  <b-tab title="Paciente" active>
                    <b-tabs content-class="mt-3">
                      <b-tab title="Informações" active> 
                        <b-row>
                          <b-col sm="10">
                            <b-form-group>
                              <label for="pacienteNome">Nome</label>
                              <b-form-input type="text" id="pacienteNome" placeholder="Informe o nome do Paciente" v-model="paciente.nome"></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col sm="2">
                            <b-form-group>
                              <label for="pacienteIdade">Idade</label>
                              <b-form-input type="text" id="pacienteIdade" placeholder="Idade" v-model="paciente.idade"></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row>  
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteNascimento">Nascimento</label>
                              <b-form-input type="date" id="pacienteNascimento" v-model="paciente.dataNascimento"></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteAdmissao">Admissão</label>
                              <b-form-input type="date" id="pacienteAdmissao" v-model="paciente.dataAdmissao"></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteLeito">Leito</label>
                              <b-form-input type="text" id="pacienteLeito" placeholder="Leito do paciente" v-model="paciente.leito"></b-form-input>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacientePesoNacimento">Peso Nascimento</label>
                              <b-form-input type="number" min="0" value="0.00" step=".01" id="pacientePesoNacimento" placeholder="0.00" v-model="paciente.pesoNascimento"></b-form-input>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacientePesoOntem">Peso Ontem</label>
                              <b-form-input type="number" min="0" value="0.00" step=".01" id="pacientePesoOntem" placeholder="0.00" v-model="paciente.pesoOntem"></b-form-input>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacientePesoHoje">Peso Hoje</label>
                              <b-form-input type="number" min="0" value="0.00" step=".01" id="pacientePesoHoje" placeholder="0.00" v-model="paciente.pesoHoje" ></b-form-input>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="3">
                            <b-form-group>
                              <label for="pacienteSexo">Sexo</label>
                              <b-form-select id="pacienteSexo" :plain="true" v-model="paciente.sexo">
                                <option  :value="null" disabled>Selecione o Sexo</option>
                                <option v-for="sexo of sexos" :value="sexo.value" :key="sexo.descricao"> 
                                  {{ sexo.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="3">
                            <b-form-group>
                              <label for="pacienteProcedencia">Procedência</label>
                              <b-form-select id="pacienteProcedencia" :plain="true" v-model="paciente.procedencia">
                                <option  :value="null" disabled>Selecione a Procedência</option>
                                <option v-for="procedencia of procedencias" :value="procedencia.value" :key="procedencia.descricao"> 
                                  {{ procedencia.descricao }}
                                </option>
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
                              <b-form-select id="pacienteTextura" :plain="true" v-model="paciente.texturaPele">
                                <option  :value="null" disabled>Selecione a Textura da Pele</option>
                                <option v-for="texturaPele of texturaDePeles" :value="texturaPele.value" :key="texturaPele.descricao"> 
                                  {{ texturaPele.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteOrelha">Forma da Orelha</label>
                              <b-form-select id="pacienteOrelha" :plain="true" v-model="paciente.formaOrelha">
                                <option  :value="null" disabled>Selecione a Forma da Orelha</option>
                                <option v-for="formaOrelha of formaOrelhas" :value="formaOrelha.value" :key="formaOrelha.descricao"> 
                                  {{ formaOrelha.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteMamaria">Glândula Mamária</label>
                              <b-form-select id="pacienteMamaria" :plain="true" v-model="paciente.glandulaMamaria">
                                <option  :value="null" disabled>Selecione a Glândula Mamária</option>
                                <option v-for="glandulaMamaria of glandulaMamarias" :value="glandulaMamaria.value" :key="glandulaMamaria.descricao"> 
                                  {{ glandulaMamaria.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteMamilo">Formação Mamilo</label>
                              <b-form-select id="pacienteMamilo" :plain="true" v-model="paciente.formacaoMamilo">
                                <option  :value="null" disabled>Selecione a formação do mamilo</option>
                                <option v-for="formaMamilo of formaMamilos" :value="formaMamilo.value" :key="formaMamilo.descricao"> 
                                  {{ formaMamilo.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacientePlantar">Prega Plantar</label>
                              <b-form-select id="pacientePlantar" :plain="true" v-model="paciente.pregaPlantar">
                                <option  :value="null" disabled>Selecione prega plantar</option>
                                <option v-for="pregaPlantar of pregas" :value="pregaPlantar.value" :key="pregaPlantar.descricao"> 
                                  {{ pregaPlantar.descricao }}
                                </option>
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
                              <b-form-select id="pacienteApagar1" :plain="true" v-model="paciente.apgarUmMinuto">
                                <option  :value="null" disabled>Selecione apgar um minuto</option>
                                <option v-for="apgarUmMinuto of apgas" :value="apgarUmMinuto.value" :key="apgarUmMinuto.descricao"> 
                                  {{ apgarUmMinuto.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteApagar5">5 minutos</label>
                               <b-form-select id="pacienteApagar5" :plain="true" v-model="paciente.apgarCincoMinuto">
                                <option  :value="null" disabled>Selecione apgar cinco minuto</option>
                                <option v-for="apgarCincoMinuto of apgas" :value="apgarCincoMinuto.value" :key="apgarCincoMinuto.descricao"> 
                                  {{ apgarCincoMinuto.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteApagar10">10 minutos</label>
                              <b-form-select id="pacienteApagar10" :plain="true" v-model="paciente.apgarDezMinuto">
                                <option  :value="null" disabled>Selecione apgar dez minuto</option>
                                <option v-for="apgarDezMinuto of apgas" :value="apgarDezMinuto.value" :key="apgarDezMinuto.descricao"> 
                                  {{ apgarDezMinuto.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteRespiratorio">Respiratório</label>
                              <b-form-select id="pacienteRespiratorio" :plain="true" v-model="paciente.respiratorio">
                                <option  :value="null" disabled>Selecione respiratório</option>
                                <option v-for="respiratorio of respitorios" :value="respiratorio.value" :key="respiratorio.descricao"> 
                                  {{ respiratorio.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteHemodinamico">Hemodonámico</label>
                              <b-form-select id="pacienteHemodinamico" :plain="true" v-model="paciente.hemodinamico">
                                <option  :value="null" disabled>Selecione hemodinamico</option>
                                <option v-for="hemodinamico of hemodinamicos" :value="hemodinamico.value" :key="hemodinamico.descricao"> 
                                  {{ hemodinamico.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="pacienteEstabilizacao">T.Estabilização</label>
                              <b-form-select id="pacienteEstabilizacao" :plain="true" v-model="paciente.tempoEstabilizacao">
                                <option  :value="null" disabled>Selecione estabilização</option>
                                <option v-for="tempoEstabilizacao of estabilizacoes" :value="tempoEstabilizacao.value" :key="tempoEstabilizacao.descricao"> 
                                  {{ tempoEstabilizacao.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                        </b-row>
                      </b-tab>
                      <b-tab title="Admissão">
                        <b-row>
                          <b-col sm="12">
                            <label for="pacienteSituacao">Situação</label>
                            <b-form-textarea id="pacienteSituacao" size="lg" placeholder="Situação" v-model="paciente.situacao"></b-form-textarea>
                          </b-col> 
                          <b-col sm="12">
                            <label for="pacienteSuspeita">Suspeita Inicial</label>
                            <b-form-textarea id="pacienteSuspeita" size="lg" placeholder="Suspeita Inicial" v-model="paciente.suspeitaInicial"></b-form-textarea>
                          </b-col>  
                        </b-row>  
                      </b-tab>
                    </b-tabs>
                  </b-tab>  
                    <b-tab title="Mae">
                      <b-tabs content-class="mt-3">
                        <b-tab title="Informação" active>
                          <b-row>
                            <b-col sm="12">
                              <b-form-group>
                                <label for="maeNome">Nome</label>
                                <b-form-input type="text" id="maeNome" placeholder="informe o nome da Mãe" v-model="paciente.mae.nome"></b-form-input>
                              </b-form-group>
                            </b-col>
                            <b-col sm="4">
                              <b-form-group>
                                <label for="maeDataNascimento">Data de Nascimento</label>
                                <b-form-input type="date" id="maeDataNascimento" v-model="paciente.mae.dataNascimento"></b-form-input>
                              </b-form-group>
                            </b-col>
                            <b-col sm="4">
                              <b-form-group>
                                <label for="maeGesta">Gesta</label>
                                <b-form-input type="text" id="maeGesta" placeholder="Mãe Gesta" v-model="paciente.mae.gesta"></b-form-input>
                              </b-form-group>
                            </b-col>
                            <b-col sm="4">
                              <b-form-group>
                                <label for="maePari">Pari</label>
                                <b-form-input type="text" id="maePari" placeholder="Mãe Pari" v-model="paciente.mae.pari"></b-form-input>
                              </b-form-group>
                            </b-col>
                            <b-col sm="4">
                              <b-form-group>
                                <label for="maeAborta">Aborta</label>
                                <b-form-input type="text" id="maeAborta" placeholder="Mãe Aborta" v-model="paciente.mae.aborta"></b-form-input>
                              </b-form-group>
                            </b-col>
                            <b-col sm="4">
                              <b-form-group>
                                <label for="maeHiv">HIV</label>
                                <b-form-input type="text" id="maeHiv" placeholder="Mãe HIV" v-model="paciente.mae.hiv"></b-form-input>
                              </b-form-group>
                            </b-col>
                            <b-col sm="4">
                            <b-form-group>
                              <label for="maeFumante">Fumante</label>
                              <b-form-select id="maeFumante" :plain="true" v-model="paciente.mae.fumante">
                                <option  :value="null" disabled>Selecione</option>
                                <option v-for="fumante of opcoes" :value="fumante.value" :key="fumante.descricao"> 
                                  {{ fumante.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          <b-col sm="4">
                            <b-form-group>
                              <label for="maeEtilista">etilista</label>
                              <b-form-select id="maeEtilista" :plain="true" v-model="paciente.mae.etilista">
                                <option  :value="null" disabled>Selecione</option>
                                <option v-for="etilista of opcoes" :value="etilista.value" :key="etilista.descricao"> 
                                  {{ etilista.descricao }}
                                </option>
                              </b-form-select>
                            </b-form-group>  
                          </b-col>
                          </b-row>
                        </b-tab>
                      </b-tabs>  
                    </b-tab>
                    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
                  </b-tabs>
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
import Paciente from '../../domain/paciente/Paciente'
export default {
  name: 'forms',
  data () {
    return {
      paciente: new Paciente(),
      selected: [], // Must be an array reference!
      show: true,
      
      sexos: [
        { value: 'MASCULINO', descricao: 'Masculino'},
        { value: 'FEMININO', descricao: 'Feminino'}
      ],
      procedencias: [
        { value: 'CO', descricao: 'CO' },
        { value: 'BERCARIO', descricao: 'Berçario' },
        { value: 'RESIDENCIA', descricao: 'Residência' },
        { value: 'EMERGENCIA', descricao: 'Emergência' },
        { value: 'OUTROS', descricao: 'Outros' }
      ],
      texturaDePeles: [
        { value: 'FINA_GELATINOSA', descricao: 'Fina/Gelationa' },
        { value: 'FINA_LISA', descricao: 'Fina/Lisa' },
        { value: 'DISCRETA_DESCAMACAO', descricao: 'Discreta descamação' },
        { value: 'DESCAMACAO_DE_MAO_E_PE', descricao: 'Descamação de Mão e Pé' },
        { value: 'GROSSA_APERGAMINHADA', descricao: 'Grossa Apergaminhada' }
      ],
      formaOrelhas: [
        { value: 'CHATA_DISFORME', descricao: 'Chata, Disforme' },
        { value: 'CURVADA_EM_BORDA', descricao: 'Curvada em Borda' },
        { value: 'CURVADA_PARTE_SUPERIOR', descricao: 'Curvada parte superior' }
      ],
      glandulaMamarias: [
        { value: 'NAO_PALPAVEL', descricao: 'Não Palpável' },
        { value: 'MENOS_DE_5MM', descricao: 'Menos de 5mm' },
        { value: 'ENTRE_10_5MM', descricao: 'Entre 10 a 5mm' },
        { value: 'Maior_DE_10MM', descricao: 'Maior de 10mm' }
      ],
      formaMamilos: [
        { value: 'APENAS_VISIVEL', descricao: 'Apenas Vísivel' },
        { value: 'MENOS_DE_7_5MM', descricao: 'Menos de 7,5mm' },
        { value: 'PONTIGUDO_MENOR_DE_7_5MM', descricao: 'Pontigudo menor de 7,5mm' },
        { value: 'BORDA_LEVANTADA_MAIOR_DE_7_5MM', descricao: 'Borda levantada maior de 7,5mm' }
      ],
      pregas: [
        { value: 'SEM_PREGAS', descricao: 'Sem Pregas' },
        { value: 'ANTERIOR', descricao: 'Anterior da Planta' },
        { value: 'DEFINIDA_NA_METADE_ANTERIOR', descricao: 'Definida na metade anterior' },
        { value: 'EM_MAIS_DA_METADE_DA_PLANTA', descricao: 'Em mais da metade da planta' }
      ],
      apgas: [
        { value: 'ZERO', descricao: '0' },
        { value: 'UM', descricao: '1' },
        { value: 'DOIS', descricao: '2' },
        { value: 'TRES', descricao: '3' },
        { value: 'QUATRO', descricao: '4' },
        { value: 'CINCO', descricao: '5' },
        { value: 'SEIS', descricao: '6' },
        { value: 'SETE', descricao: '7' },
        { value: 'OITO', descricao: '8' },
        { value: 'NOVE', descricao: '9' },
        { value: 'DEZ', descricao: '10' }
      ],
      respitorios: [
        { value: 'NAO_SE_APLICA', descricao: 'Não se Aplica' },
        { value: 'OXIGENIO_NASAL', descricao: 'Oxigênio Nasal' },
        { value: 'VPP', descricao: 'VPP' },
        { value: 'ENTUBACAO_EM_SP', descricao: 'Entubação em SP' }
      ],
      hemodinamicos: [
        { value: 'NAO_SE_APLICA', descricao: 'Não se Aplica' },
        { value: 'ESTIMULACAO_TACTIL', descricao: 'Estimulação Tactil' },
        { value: 'RCPR_MASSAGEM', descricao: 'RCPR(massagem)' },
        { value: 'RCPR_COM_DROGAS', descricao: 'RCPR com Drogas' }
      ],
      estabilizacoes: [
        { value: 'NAO_SE_APLICA', descricao: 'Não se Aplica' },
        { value: 'RECUPERACAO_RAPIDA', descricao: 'Recuperação Rápida' },
        { value: 'RECUPERACAO_DEMORADA', descricao: 'Recuperação Demorada' },
        { value: 'INSTAVEL', descricao: 'Instável' }
      ],
      opcoes: [
        { value: 'SIM', descricao: 'Sim' },
        { value: 'NAO', descricao: 'Não' },
        { value: 'INTERROMPEU', descricao: 'Interrompeu' }
      ],
    }
  },
  methods: {
    gravar () {
      
      this.$api.pacientes.save({}, this.paciente)
        .then(() => this.paciente = new Paciente(), err => console.log(err));
      
    }
  }/*,
  created () {
    this.$api.pacientesSexo.get().then(response => {
      this.sexos = response.body;
      console.log('teste ' + this.sexos);
    });
  }*/
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
