import { Component } from 'react';



class DestinationInfo extends Component {

    render() {
        return(
            <div className="col-lg-4 mb-3">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={`data:image/jpeg;base64,${this.props.destino.imagem}`}
                   aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                </img>
      
                <h2 className="fw-normal">{this.props.destino.local}</h2>
                <p>{this.props.destino.descricao}</p>
                <p><a className="btn btn-secondary" href=" ">Saiba mais</a></p>
              </div>
        )
    }
}

export default DestinationInfo;