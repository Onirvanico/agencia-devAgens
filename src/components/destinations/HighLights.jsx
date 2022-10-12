import { Component } from "react";
import "../../css/destaques.css";
import DestinoService from "../../services/DestinoService";
import HighLightItem from "./HighLightItem";

class HighLights extends Component {

    constructor(props) {
        super(props);
        this.service = new DestinoService();
        this.state = {
            destinos: []
        }
    }
    async componentDidMount() {
        this.result = await this.service.retrieveUntil(5);
        this.componentList = this.result.map((dest, index) => {
        return index === 0 ? 
        <HighLightItem key={dest.id} destino={dest} classN="destaques__principal" /> :
        <HighLightItem key={dest.id} destino={dest} classN="destaques__secundario" />
    });
        this.setState({ destinos: this.componentList });
      }

    render() {
        return(
            <section className="destaques">
            {this.state.destinos}
            <div className="destaques__categorias">
                <ul className="destaques__categorias___lista">
                    <li className="destaques__categorias___item">
                        <a className="destaques__categorias___link"  role="button" href=" ">
                        Para família
                        </a>
                    </li>
                    <li className="destaques__categorias___item">
                        <a className="destaques__categorias___link" href=" ">
                        Para casais
                        </a>
                    </li>
                    <li className="destaques__categorias___item">
                        <a className="destaques__categorias___link" role="button" href=" ">
                        Para grupo de amigos
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        );
    }
}

export default HighLights;