import { Component } from 'react';
import Usuario from '../models/Usuario';
import UsuarioService from '../services/UsuarioService';


class ModalSignUp extends Component {

    constructor(props) {
        super(props);

        this.service = new UsuarioService();
        this.state = {
            nome: "",
            email: "",
            senha: ""
        };
    }

    render() {
        return(
        <div className="modal fade" tabIndex="-1" role="dialog" id="modalSignup" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-5 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0">Criar Conta</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="">
                        <div className="form-floating mb-3">
                                <input type="text" className="form-control rounded-4" id="inputName" placeholder="name" onChange={e => this.setState({nome: e.target.value})} />
                                <label htmlFor="inputName">Nome:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-4" id="inputEmailRegister" placeholder="name@example.com" onChange={e => this.setState({email: e.target.value})} />
                                <label htmlFor="inputEmailRegister">Endereço de Email:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-4" id="inputPasswordRegister" placeholder="Password" onChange={e => this.setState({senha: e.target.value})}/>
                                <label htmlFor="inputPasswordRegister">Senha</label>
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-dark" onClick={e => this.registerUser(e)}>Registrar-se</button>
                            <small className="text-muted"></small>
                            <hr className="my-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    registerUser(e) {
        e.preventDefault();

        if(this.areValidFields()) {
            this.newUser = new Usuario(this.state.nome, this.state.email, this.state.senha);
            this.service.save(this.newUser)
        } else {
            alert("Todos os campos devem ser preenchidos.");
        }
    }

    areValidFields() {
        return this.state.nome.length > 0 && 
               this.state.email.length > 0 &&
               this.state.senha.length > 0;
    }
}

export default ModalSignUp;