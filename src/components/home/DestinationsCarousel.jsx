import { Component } from "react";


class DestinationsCarousel extends Component {
    render() {
        return(
            <div id="myCarousel" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="bd-placeholder-img carousel_image" width="100%" height="400px"
                    src="assets/bonito-mato-grosso-do-sul.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                </img>

                <div className="container">
                    <div className="carousel-caption">
                    <h1>Bonito - Mato Grosso do Sul</h1>
                    <p>A cidade tem um ritmo de cidade de interior e dezenas de passeios para fazer, que incluem flutuação em
                        rios cristalinos, caminhadas e banhos de cachoeira.Deserto do Atacama</p>

                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <img className="bd-placeholder-img carousel_image" width="100%" height="400px" src="assets/pirenopolis-goias.jpg"
                    aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                </img>

                <div className="container">
                    <div className="carousel-caption">
                    <h1>Pirenópolis - Goiás</h1>
                    <p>É uma cidade com várias cachoeiras ao seu redor e uma excelente estrutura para quem quer ficar bem
                        hospedado, com diversas opções de pousadas charmosas.</p>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <img className="bd-placeholder-img carousel_image" width="100%" height="400px"
                    src="assets/praia-do-forte-bahia.jpeg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                </img>

                <div className="container">
                    <div className="carousel-caption">
                    <h1> Praia do Forte (Mata de São João) - Bahia</h1>
                    <p>É um lugar delicioso para aproveitar o mar, suas paisagens naturais, conhecer o famoso Projeto Tamar e
                        relaxar.</p>
                    </div>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">próximo</span>
            </button>
        </div>
        );
    }
}

export default DestinationsCarousel;