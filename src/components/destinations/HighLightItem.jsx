import { Component } from "react";


class HighLightItem extends Component {

    render() {
        return(
            <div className={`${this.props.classN} caixa`} style={{ backgroundImage: `url('data:image/jpeg;base64,${this.props.destino.imagem}')`}}>
                <h3 className="destaques__titulo">{this.props.destino.local}</h3>
            </div>
        );
    }
}

export default HighLightItem;