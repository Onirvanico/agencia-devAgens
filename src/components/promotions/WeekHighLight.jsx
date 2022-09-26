import { Component } from "react";


class WeekHighLight extends Component {
    render() {
        return(
            <section>
            <div className="card bg-dark text-white m-5">
              <img src="assets/bonito-mato-grosso-do-sul.jpg" height="400px" className="card-img featured_img"
                alt="Imagem de Caverna"/>
              <div className="card-img-overlay text-center" style={{backgroundColor: "rgba(0, 0, 0, .3)"}}>
                <h1 className="card-title">Destaque da semana</h1>
                <p className="card-text fs-2 fw-semibold">Bonito - Mato Grosso do sul.</p>
                <p className="text-decoration-line-through text-inline">De R$ 2.750,00</p>
                <p style={{display: "inline; vertical-align: middle"}}>Por R$ 1.990,00</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                    d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
                </svg>
                <div className="d-flex justify-content-center mt-5">
                  <a role="button" className="btn btn-success btn-lg" style={{display: "block"}} href="pagamento.html">Eu quero!!</a>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default WeekHighLight;