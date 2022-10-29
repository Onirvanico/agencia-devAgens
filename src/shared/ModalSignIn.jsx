import { Component } from 'react';


class ModalSignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usermane: "",
            password: " "
        };
    }
    render() {
        return(
        <div className="modal fade" tabIndex="-1" role="dialog" id="modalSignin" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-5 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0">Acessar Conta</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" method='get'>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-4" id="inputEmail" placeholder="name@example.com" onChange={ e => this.setState({ username: e.target.value })} required />
                                <label htmlFor="inputEmail">Endereço de Email:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-4" id="inputPassword" placeholder="Password" onChange={ e => this.setState({ password: e.target.value })} required />
                                <label htmlFor="inputPassword">Senha</label>
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit" onClick={() => this.validateAuth()}>Entrar</button>
                            <small className="text-muted"></small>
                            <hr className="my-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    validateAuth() {
        console.log("Passei aqui");
        fetch("http://localhost:8081/destinos" , {
            headers: new Headers({
                "Authorization": `Basic username: ${this.state.usermane}: password: ${this.state.password}}`
            })
        })
        .then(response => alert("Status da requisição " + response.status));
            
    }
}

export default ModalSignIn;