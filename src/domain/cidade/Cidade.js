import Estado from '../estado/Estado';

export default class Cidade {
    constructor(id='', nome='', estado= Estado) {
        this.id = id;
        this.nome = nome;
        this.estado = estado;
    }
}