import { BASE_URL, EP_DESTINOS } from "./ApiUrl"

class DestinoService {
    
    constructor() {
        this.destinoPromisses = fetch(BASE_URL + EP_DESTINOS);
    }

    get getAll() {
        return(
            this.destinoPromisses.then(response => {
                if(!response.ok && response.status !== 404) throw new Error("Erro ao tentar fazer a requisição");
                if(response.status === 404) throw new Error("Não foi possível encontrar os detinos");
                return response.json()

            }).catch(error => {
                throw new Error(`Ocorreu um erro durante a recuperação dos destinos ${error.message}`)
            })
        );
    }

}

export default DestinoService;