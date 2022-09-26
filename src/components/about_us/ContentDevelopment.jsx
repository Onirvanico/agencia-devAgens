import { Component } from "react";


class ContentDevelopment extends Component {
    render() {
        return(
            <div id="content_dsv" className="mt-5">
            <div className="row justify-content-around" style={{margin: 0}}>
                <div className="col-xs-1 col-sm-5 col-md-3 offset-xs-2 mb-4">
                    <div className="card text-bg-light mb-3" style={{maxWidth: "18rem"}}>
                        <div className="card-header bg-dark text-white">Nossa razão de ser</div>
                        <div className="card-body">
                          <h5 className="card-title">Facilitar a vida dos viajantes</h5>
                          <p className="card-text">Quando percebemos que poderíamos ajudar as pessoas a encontrarem as melhores viagens, foi uma verdadeira epifania.</p>
                        </div>
                      </div>
                </div>
                <div className="col-xs-1 col-sm-5 col-md-3 offset-xs-2 mb-4">
                    <div className="card text-bg-light mb-3" style={{maxWidth: "18rem"}}>
                        <div className="card-header bg-secondary text-white">De que forma faremos</div>
                        <div className="card-body">
                          <h5 className="card-title">Colocando sempre as pessoas em primeiro lugar</h5>
                          <p className="card-text">Para trazer o melhor de cada um de nós é preciso ter empatia, envolvimento e reconhecimento de cada um com o seu devido papel.</p>
                        </div>
                      </div>
                </div>
                <div className="col-xs-1 col-sm-5 col-md-3 offset-xs-2">
                    <div className="card text-bg-light mb-3" style={{maxWidth: "18rem"}}>
                        <div className="card-header bg-dark text-white">Projetando o futuro</div>
                        <div className="card-body">
                          <h5 className="card-title">De olho nas novas possibilidades</h5>
                          <p className="card-text">Nesta era de evolução que estamos vivendo, novos recursos como poder viajar de drones e até de mesmo carros voadores.</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ContentDevelopment;