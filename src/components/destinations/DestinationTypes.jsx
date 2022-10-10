import { Component } from "react";
import DestinoService from "../../services/DestinoService";
import DestinationItem from "./DestinationItem";


class DestinationTypes extends Component {

    constructor(props) {
        super(props);
        this.service = new DestinoService();
        this.state = {
            destinos: []
        };
    }

    async componentDidMount() {
      this.result = await this.service.getAll;
      this.componentList = this.result.map(dest => <DestinationItem key={dest.id} destino={dest} />);
      this.setState({ destinos: this.componentList });
    }

    render() {
        return(
            <div className="destinos__itens">
                    <div className="destinos__info">
                        <div className="destinos__cabecalho">
                            <h4 className="destinos__titulo">
                                {this.props.destinationType}
                            </h4>
                            <button className="destinos__botao">
                            Visualizar todos
                            </button>
                        </div>
                    </div>
                    <div className="destinos__conteudo">
                        {this.props.destinos}
                    </div>
            </div>
        );
    }
}

export default DestinationTypes;