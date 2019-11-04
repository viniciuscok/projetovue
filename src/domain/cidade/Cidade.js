export default class Cidade {
    constructor(id=null, nome=null, estado=null) {
        if (this.id)
            this.id = id;
        this.nome = nome;
        this.estado = estado;
    }
}