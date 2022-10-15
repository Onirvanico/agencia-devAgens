import { BASE_URL, EP_DESTINOS, LIMIT_QUERY } from "./ApiUrl"
import Service from './Service';

class DestinoService extends Service {
    
    constructor() {
        super();
        this.destinosPromisse = fetch(BASE_URL + EP_DESTINOS);
    }

    get getAll() {
        return(
            this.destinosPromisse.then(response => {
                this.isFailure(response);
                this.isNotFound(response, "Não foi possível encontrar os destinos");
                return response.json()

            }).catch(error => {
                throw new Error(`Ocorreu um erro durante a recuperação dos destinos ${error.message}`)
            })
        );
    }

    retrieveUntil(value) {
        const destinosPartialPromisse = fetch(`${BASE_URL}${EP_DESTINOS}/${LIMIT_QUERY}?limit=${value}`)
        
        return(
            destinosPartialPromisse.then(response => {
                this.isFailure(response);
                this.isNotFound(response, "Não foi possivel encontrar os destinos parciais");
                return response.json();
            }).catch(error => {
                throw new Error(`Ocorreu um erro durante a recuperação dos destinos parciais ${error.message}`)
            })
        );
    }
}

export default DestinoService;