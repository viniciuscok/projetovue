import Estado from '../estado/Estado';

export default class Cidade {
    constructor(id='', nome='', Estado='') {
        this.id = id;
        this.nome = nome;
        this.Estado = Estado;
    }
}