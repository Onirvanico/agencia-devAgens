
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Reserva from '../../models/Reserva';
import PacoteService from '../../services/PacoteService';
import FormatDate from '../helpers/FormatDate';
import FormatNumber from '../helpers/FormatNumber';


const service = new PacoteService();

function MainReservation()  {
    
      const [pacote, setPacote] = useState({id:0, diasEstadia:0, preco: 0, destino:{}});
      
      const [numTravelersInput, setnumTravelersInput] = useState(1);
      const [dateInput, setDateInput] = useState("");
      const [timeInput, setTimeInput] = useState("");
      const [totalValue, setTotalValue] = useState(0);
      let {id} = useParams(); 

      let idParam = Number.parseInt(id);

      const getPacote = async () =>  {
        const result = await service.findById(idParam);
        setTotalValue(result.preco);
        setPacote(result);
      }

       useEffect(() => {
        getPacote();
      },[]); 
    
        return(
            <div>
                <img src={`data:image/jpeg;base64,${pacote.destino.imagem}`} className="card-img featured_img" height="500px" alt="Imagem do local" />
                <div className="p-2 bg-success"></div>
                <h4 className="text-center m-3 text-secondary fw-bolder fs-2">{pacote.destino.local}</h4>
                <p className="text-center fs-4 mb-5 p-4">{pacote.destino.descricao}</p>
                <hr></hr>
                <div className="row me-0 mb-5">
                    <div className="col-md-7 col-lg-8 order-md-first m-4 p-0">
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Destino</h6>
                                </div>
                                <span className="text-muted">{pacote.destino.local}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Desconto</h6>
                                </div>
                                <span className="text-muted">17%</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Dias de Estadia </h6>
                                </div>
                                <span className="text-success">{pacote.diasEstadia}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Número de viajantes</h6>
                                </div>
                                <span className="text-muted">{numTravelersInput}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Data da viagem</h6>
                                </div>
                                <span className="text-muted">{FormatDate.brStringDateFormat(dateInput)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Hora da viagem</h6>
                                </div>
                                <span className="text-muted">{timeInput}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>{FormatNumber.toBRLCurrency(totalValue)}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5 col-lg-3 m-4 bg-light p-3">
                        <div id="liveAlertPlaceholder"></div>
                        <form method="post">
                            <div className="mb-3">
                                <label htmlFor="totalTravelers" className="form-label">Viajantes</label>
                                <input type="number" className="form-control ms-3 float-end " id="totalTravelers" onChange={e => {setnumTravelersInput(e.target.value); setTotalValue(calcTotalValue(e.target.value, pacote.preco)); }}
                                name="dayTotal" min="1" max="20" style={{ width: "5rem", display: "inline"}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="choiceDate" className="form-label">Data para a reserva</label>
                                <input type="date" className="form-control ms-3 float-end" id="choiceDate"  required
                                style={{ display: "inline", width: "50%"}} onChange={e => setDateInput(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="choiceTime" className="form-label">Hora da reserva</label>
                                <input type="time" className="form-control ms-3 float-end" id="choiceTime"  required
                                style={{ display: "inline", width: "50%"}} onChange={e => setTimeInput(e.target.value)}/>
                            </div>
                            <button id="liveAlertBtn" type="submit" onClick={e => { saveReservation(e, numTravelersInput, dateInput, timeInput, pacote, totalValue)}} className="btn btn-primary w-100 mt-5" style={{alignSelf: "flex-end"}}>Concluir Reserva</button>
                        </form>
                    </div>
                </div>
            </div>
        );

}

function calcTotalValue(numTravelers, value) {
    return numTravelers > 1 ?
            value + (numTravelers -1) * (0.8 * value) :
            value;
}

function saveReservation(event, numTravelers, dataViagem, horaViagem, pacote, valorTotal) {
    event.preventDefault();
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    
    if(isValidFields(dataViagem, horaViagem, valorTotal)){
        let fullDate = new Date(`${dataViagem} ${horaViagem}`)
        let reservation = new Reserva(numTravelers, fullDate, pacote, valorTotal);
        console.log("Reserva", reservation);

    } else {
        if(alertPlaceholder.hasChildNodes()) alertPlaceholder.removeChild(alertPlaceholder.firstChild)
        
        function alert(message, type) {
            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

            alertPlaceholder.appendChild(wrapper)
        }

        alert("É necessário preencher todos os campos", 'warning')
        
    }
}

function isValidFields(dataViagem, horaViagem, valorTotal) {
    return dataViagem !== "" && horaViagem !== "" && valorTotal > 0;
}

export default MainReservation;