import { Component } from "react";

const borderStyle = {
  borderRadious: 10
};

class DestinationsInfo extends Component {
    render() {
        return(
          <div className="container marketing mt-5 p-3" style={borderStyle}>
            <div className="row">
              <div className="col-lg-4 mb-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src=""
                   aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                </img>
      
                <h2 className="fw-normal">Os 7 principais pontos turísticos no Maranhão</h2>
                <p>Surreal! Esta é palavra que define os encantos do Maranhão, quando nos deparamos com os olhos verdes ou azuis de suas lagoas e lagos a fitar o céu azul do nordeste.</p>
                <p><a className="btn btn-secondary" href="#">Saiba mais</a></p>
              </div>
              <div className="col-lg-4 flex-grow-1 mb-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                  src=""  aria-label="Placeholder: 140x140"
                  preserveAspectRatio="xMidYMid slice" focusable="false">
                </img>
      
                <h2 className="fw-normal">Huaraz: roteiro pelas lagunas e pontos turísticos </h2>
                <p>Entre os picos nevados da Cordillera Blanca, é possível encontrar lagos cinematográficos em tons de turquesa em meio às trilhas. São paisagens, literalmente, de tirar o fôlego!</p>
                <p><a className="btn btn-secondary" >Saiba mais</a></p>
              </div>
              <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src=""
                   aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                </img>
                <h2 className="fw-normal">Deserto do Atacama, Chile: um dos lugares mais incríveis para visitar!</h2>
                <p>O Deserto do Atacama, Chile, parece até uma paisagem de outro mundo, com várias opções de passeios, expedições e cenários incríveis esperando para serem explorados.</p>
                <p><a className="btn btn-secondary" >Saiba mais</a></p>
              </div>
            </div>
            <hr className="featurette-divider"/>
          </div>
        );
    }
}

export default DestinationsInfo;