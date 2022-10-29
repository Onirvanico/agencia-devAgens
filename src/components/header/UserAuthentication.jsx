import { Component } from 'react';

class UserAuthentication extends Component {
    
    render() {
        return(
            <>
                <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#modalSignin">Entrar</button>
                            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalSignup">Registrar-se</button>
                </div>
            </>
        );
    }
}

export default UserAuthentication;