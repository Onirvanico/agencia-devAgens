import { Component } from 'react';


class ModalSignUp extends Component {

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
                                <input type="text" className="form-control rounded-4" id="inputName" placeholder="name@example.com" />
                                <label htmlFor="inputName">Endereço de Email:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-4" id="inputEmailRegister" placeholder="name@example.com" />
                                <label htmlFor="inputEmailRegister">Endereço de Email:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-4" id="inputPasswordRegister" placeholder="Password" />
                                <label htmlFor="inputPasswordRegister">Senha</label>
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Registrar-se</button>
                            <small className="text-muted"></small>
                            <hr className="my-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ModalSignUp;