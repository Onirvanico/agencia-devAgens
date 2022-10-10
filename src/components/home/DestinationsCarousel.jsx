import { Component } from "react";
import DestinoService from "../../services/DestinoService";
import CarouselItem from "./CarouselItem";


class DestinationsCarousel extends Component {

    constructor(props) {
        super(props);
        this.service = new DestinoService();
        this.state = {
            destinos: []
        };
    }

    async componentDidMount() {
      this.result = await this.service.getAll;
      this.componentList = this.result.map((dest, index) => {
        return index === 0 ? 
        <CarouselItem key={dest.id} destino={dest} classN="active" /> :
        <CarouselItem key={dest.id} destino={dest} />
    });
      this.setState({ destinos: this.componentList });
    }
    render() {
        return(
        <div id="myCarousel" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">  
                {this.state.destinos}
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