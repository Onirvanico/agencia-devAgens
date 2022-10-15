import { Component } from "react";
import FormatNumber from '../../shared/helpers/FormatNumber';
import PacoteService from '../../services/PacoteService';
import { Link } from 'react-router-dom';

const inlineMiddleStyle = {
  display: "inline",
  verticalAlign: "middle"
}

class WeekHighLight extends Component {

    constructor(props) {
      super(props);
      this.service = new PacoteService();
      this.state = {
         pacote: {id:0, diasEstadia:0, preco: 0, destino:{}},
         imagem: ""
      }

    }

    async componentDidMount() {
      this.result = await this.service.retrieveUntil(1);
      this.setState( { pacote: this.result[0], imagem: this.result[0].destino.imagem } );
    }

    render() {
        return(
            <section>
                <div className="card bg-dark text-white m-5">
                  <img src={`data:image/jpeg;base64,${this.state.imagem}`} height="400px" className="card-img featured_img"
                    alt="Imagem da região"/>
                  <div className="card-img-overlay text-center" style={{backgroundColor: "rgba(0, 0, 0, .3)"}}>
                    <h1 className="card-title">Destaque da semana</h1>
                    <p className="card-text fs-2 fw-semibold w-100">{this.state.pacote.destino.local}</p>
                    <p className="text-decoration-line-through text-inline w-100">De { FormatNumber.toBRLCurrency(this.state.pacote.preco + 350)}</p>
                    <p className="m-2" style={inlineMiddleStyle}>Por {FormatNumber.toBRLCurrency(this.state.pacote.preco)}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path
                        d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
                    </svg>
                    <p className="text-inline w-100">{this.state.pacote.diasEstadia} dias</p>
                    <div className="d-flex justify-content-center mt-5">
                      <Link to={`/reservation/${this.state.pacote.id}` } role="button" className="btn btn-success btn-lg" style={{display: "block"}} >Eu quero!!</Link>
                    </div>
                  </div>
                </div>
          </section>
        );
    }
}

export default WeekHighLight;