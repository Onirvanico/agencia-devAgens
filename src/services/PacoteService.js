import { BASE_URL, EP_PACOTES, LIMIT_QUERY } from "./ApiUrl";
import Service from './Service';

class PacoteService extends Service{

     constructor() {
        super();
        this.pacotesPromisse = fetch(BASE_URL + EP_PACOTES);
    }

    get getAll() {
        return(
            this.pacotesPromisse
            .then(response => {
                if(!response.ok && response.status !== 404) throw new Error("Erro ao tentar fazer a requisição");
                if(response.status === 404) throw new Error("Não foi possível encontrar os pacotes");
                return response.json()
            })
            .catch(error => {
                    throw new Error(`Ocorreu um erro durante a recuperação do pacote ${error.message}`);
                })  
            );
        
    }

    retrieveUntil(value) {
        const pacotesPartialPromisse = fetch(`${BASE_URL}${EP_PACOTES}/${LIMIT_QUERY}?limit=${value}`);
        
        return(
            pacotesPartialPromisse.then(response => {
                this.isFailure(response);
                this.isNotFound(response, "Não foi possivel encontrar os pacotes parciais");
                return response.json();
            }).catch(error => {
                throw new Error(`Ocorreu um erro durante a recuperação dos pacotes parciais ${error.message}`)
            })
        );
    }

    findById(id) {
        const pacotePromisse = fetch(`${BASE_URL}${EP_PACOTES}/${id}`);

        return(
            pacotePromisse.then(response => {
                this.isFailure(response);
                this.isNotFound(response, "Não foi possível encontrar o pacote com o id " + id);
                return response.json();
            }).catch(error => {
                throw new Error(`Ocorreu um erro durante a recuperação do pacote ${error.message}`)
            })
        );
    }
}

export default PacoteService;