import { BASE_URL, EP_RESERVAS } from "./ApiUrl";
import Service from "./Service";



class ReservaService extends Service {
    save(reserva) {
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json; charset=UTF-8");
     return this.reservaPromisse = fetch(`${BASE_URL}${EP_RESERVAS}`, {
            method: "post",
            mode: "no-cors",
            headers: this.headers,
            body: JSON.stringify(reserva)
        }).then(response => {
            this.isFailure(response);
            this.isNotFound(response, "Não foi possível persistir a reserva");
            return response.json();
        }).catch(error => {
            throw new Error(`Ocorreu um erro durante a persistência da reserva ${error.message}`);
        })
    }

    findById(id) {
        this.reservaPromisse = fetch(`${BASE_URL}${EP_RESERVAS}/${id}`)
        .then(response => {
            this.isFailure(response);
            this.isNotFound(response, "Não foi possível recuperar a reserva com o id informado");
            return response.json();
        })
        .catch(error => {
            throw new Error(`Ocorreu um erro durante a busca pela reserva ${error.message}`);
        });
    }
}

export default ReservaService;