import { Component } from "react";

const borderStyle = {
    borderRadious: 10
};

class TypeOfPlans extends Component {

    render() {

    return(
      <div className="container marketing mt-5 p-3" style={borderStyle}>
          <div className="row featurette">
              <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Planejamento com plano familiar</h2>
              <p className="lead">Pacotes pensados em como agradar a todos os membros da família, dos mais jovens aos mais idosos. Momentos inesquecíveis que ficarão marcados para sempre.</p>
              </div>
              <div className="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                  height="500" src="familia-viajando.jpg" aria-label="Placeholder: 500x500"
                  preserveAspectRatio="xMidYMid slice" focusable="false">
              </img>

              </div>
          </div>

        <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Lua de mel para recém-casados? Tem!</h2>
            <p className="lead">Às vezes parece ser um grande desafio planejar uma lua de mel em lugares românticos e definir as melhores rotas. Não precisa se preocupar, os pombinhos vão literalmente voar para lugares inesperados!</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" src="home-e-mulher-viajando.jpg"  aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false">
            </img>

          </div>
        </div>

        <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Amigos para qualquer parada</h2>
            <p className="lead">Taí uma das melhores coisas da vida, reunir os amigos e se divertir. Melhor ainda é sair por aí "mundo a fora" com todos os seus parceiros e conhecer lugares incríveis, por isso, planejamos pacotes bem legais para uma turma aventureira.</p>
          </div>
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" src="grupo-amigos.jpg" aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false">
          </img>

          </div>
        </div>
      </div>
    );
    }
  
}

export default TypeOfPlans;