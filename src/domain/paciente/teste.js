export default class teste {
    constructor(
        id=null, nome=null, dataNascimento=null,dataAdmissao =null,
        idade=null, pesoNascimento=null, pesoOntem=null, pesoHoje=null, leito=null, situacao=null,
        suspeitaInicial=null, sexo =null, procedencia =null, texturaPele=null, formacaoMamilo=null,
        formaOrelha=null, glandulaMamaria=null, pregaPlantar=null, apgarUmMinuto=null, apgarCincoMinuto=null,
        apgarDezMinuto=null, respiratorio=null, hemodinamico=null, tempoEstabilizacao=null, mae=null) {
        
        if (this.id)
            this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.dataAdmissao = dataAdmissao;
        this.idade =idade;
        this.pesoNascimento = pesoNascimento;
        this.pesoOntem = pesoOntem;
        this.pesoHoje = pesoHoje;
        this.leito = leito;
        this.situacao = situacao;
        this.suspeitaInicial = suspeitaInicial;
        this.sexo = sexo;
        this.procedencia = procedencia;
        this.texturaPele = texturaPele;
        this.formacaoMamilo = formacaoMamilo;
        this.formaOrelha = formaOrelha;
        this.glandulaMamaria = glandulaMamaria;
        this.pregaPlantar = pregaPlantar;
        this.apgarUmMinuto = apgarUmMinuto;
        this.apgarCincoMinuto = apgarCincoMinuto;
        this.apgarDezMinuto = apgarDezMinuto;
        this.respiratorio = respiratorio;
        this.hemodinamico = hemodinamico;
        this.tempoEstabilizacao = tempoEstabilizacao;
        this.mae = mae;
    }
}