import { Component } from "react";


class DestinationItem extends Component {

    render() {
        return(
            <div className="destinos__card">
                <img className="destinos__card___imagem" src={`data:image/jpeg;base64,${this.props.destino.imagem}`} alt="Imagem do destino"/>
                <div className="destinos__card___corpo">
                    <div className="destinos__card___cabecalho">
                        <h5 className="destinos__card___titulo" style={{display: "inline"}}>{this.props.destino.local}</h5>
                    </div>
                    <div className="destinos__card___descricao">
                        {this.props.destino.descricao}
                    </div>
                    <a type="button" style={{ alignSelf: "end" }} className="btn btn-outline-primary" href="pagamento.html">Comprar</a>
                </div>
            </div>
        );
    }
}

export default DestinationItem;