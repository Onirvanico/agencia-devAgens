import { Component } from 'react';
import FormatNumber from '../../shared/helpers/FormatNumber';


class PromotionItem extends Component {

    render() {
        return(
            <div className="col">
              <div className="card h-100 shadow-sm card_scale">
                <span className="item_discount"> -25% </span>
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={`data:image/jpeg;base64,${this.props.pacote.destino.imagem}`} aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{this.props.pacote.destino.local}</h5>
                  <p className="card-text w-100 h-100 p-0">{this.props.pacote.destino.descricao}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a role="button" className="btn btn-sm btn-outline-secondary" href="pagamento.html">Comprar</a>
                      <button type="button" className="btn btn-sm btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                      </svg></button>
                    </div>
                    <small className="text-success fw-bold">{FormatNumber.toBRLCurrency(this.props.pacote.preco)}</small>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default PromotionItem;