

export class Pacote {


    constructor(preco, diasEstadia, destino) {
        this.preco = preco;
        this.diasEstadia = diasEstadia;
        this.destino = destino;
    }

    get preco() {
        return this.preco;
    }

    get diasEstadia() {
        return this.diasEstadia;
    }

    get destino() {
        return this.destino;
    }
}