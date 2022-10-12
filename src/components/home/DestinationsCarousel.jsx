import { Component } from "react";
import DestinoService from "../../services/DestinoService";
import CarouselItem from "./CarouselItem";
import IndicatorItem from './IndicatorItem';


class DestinationsCarousel extends Component {

    constructor(props) {
        super(props);
        this.service = new DestinoService();
        this.state = {
            destinos: [],
            carouselIndicators: []
        };
    }

    async componentDidMount() {
      this.result = await this.service.getAll;
      this.componentList = this.result.map((dest, index) => {
        return index === 0 ? 
        <CarouselItem key={dest.id} destino={dest} classN="active" /> :
        <CarouselItem key={dest.id} destino={dest} />
    });

    this.indicatorList = this.result.map((dest, index) => {
        return index === 0 ? 
        <IndicatorItem key={dest.id} classN={"active"} position={index} current={"true"} slidePosition={index + 1} /> :
        <IndicatorItem key={dest.id} position={index} slidePosition={index + 1} />
    });

      this.setState({ destinos: this.componentList });
      this.setState({ carouselIndicators: this.indicatorList});
    }
    render() {
        return(
        <div id="myCarousel" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {this.state.carouselIndicators}
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