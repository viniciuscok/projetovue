export default class Mae {
    constructor(id=null, nome=null, dataNascimento=null, gesta=null, pari= null, aborta=null, hiv=null, fumante=null, etilista=null) {
        if (this.id)
            this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.gesta = gesta;
        this.pari = pari;
        this.aborta = aborta;
        this.hiv = hiv;
        this.fumante = fumante;
        this.etilista = etilista;
    }
}