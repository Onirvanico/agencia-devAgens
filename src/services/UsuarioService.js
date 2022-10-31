import { BASE_URL, EP_USUARIO } from "./ApiUrl";
import Service from "./Service";



class UsuarioService extends Service {

    save(usuario) {
        console.log(`${BASE_URL}${EP_USUARIO}`);
        return this.usuarioPromisse = fetch(`${BASE_URL}${EP_USUARIO}`, {
            method: "post",
            mode: "no-cors",
            accessControlAllowOrigin: "*",
            withCredentials: false,
            headers: {
                "Content-Type": "application/json"
            },
            accept: "application/json",
            body: JSON.stringify(usuario),

           }).then(response => {
               this.isFailure(response);
               this.isNotFound(response, "Não foi possível persistir o usúario");
               return response.json();
           }).catch(error => {
               throw new Error(`Ocorreu um erro durante a persistência do usuário ${error.message}`);
           })
       }
} 

export default UsuarioService;