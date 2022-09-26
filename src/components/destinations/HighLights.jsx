import { Component } from "react";
import "../../css/destaques.css";

class HighLights extends Component {
    render() {
        return(
            <section className="destaques">
            <div className="destaques__principal caixa">
                <h3 className="destaques__titulo">Uyuni</h3>
            </div>
            <div className="destaques__secundario caixa">
                <h3 className="destaques__titulo">Deserto do Atacama</h3>
            </div>
            <div className="destaques__secundario caixa">
                <h3 className="destaques__titulo">Ilhas Galápagos</h3>
            </div>
            <div className="destaques__secundario caixa">
                <h3 className="destaques__titulo">Krabi</h3>
            </div>
            <div className="destaques__secundario caixa">
                <h3 className="destaques__titulo">Huaraz</h3>
            </div>
            <div className="destaques__categorias">
                <ul className="destaques__categorias___lista">
                <li className="destaques__categorias___item">
                    <a className="destaques__categorias___link"  role="button" href="#">
                    Para família
                    </a>
                </li>
                <li className="destaques__categorias___item">
                    <a className="destaques__categorias___link" href="#">
                    Para casais
                    </a>
                </li>
                <li className="destaques__categorias___item">
                    <a className="destaques__categorias___link" role="button" href="#">
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