import { Pacote } from '../models/Pacote';


class PacoteService {

    BASE_URL = "http://localhost:8081/";


     constructor() {
        this.pacotesPromisse = fetch(this.BASE_URL + "pacotes");
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
}

export default PacoteService;