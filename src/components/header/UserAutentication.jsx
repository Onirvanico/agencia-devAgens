import { Component } from 'react';


class UserAutentication extends Component {
    
    render() {
        return(
            <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Entrar</button>
                        <button type="button" className="btn btn-warning">Registrar-se</button>
                    </div>
        );
    }
}

export default UserAutentication;