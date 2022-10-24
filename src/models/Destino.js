
class Destino {

    constructor(local, descricao, imagem) {

        this.local = local;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    get local() {
        return this.local;
    }

    get descricao() {
        return this.descricao;
    }

    get imagem() {
        return this.imagem;
    }

}

export default Destino;