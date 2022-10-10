import { Component } from "react";


class CarouselItem extends Component {

    render() {
        return(
            <div className={`carousel-item ${this.props.classN}`}>
                    <img className="bd-placeholder-img carousel_image" width="100%" height="400px"
                        src={`data:image/jpeg;base64,${this.props.destino.imagem}`} 
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice"
                        focusable="false" alt="Imagem de uma região">
                    </img>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>{ this.props.destino.local }</h1>
                            <p>{ this.props.destino.descricao }</p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default CarouselItem;