import { Component } from "react";


class ContactsForm extends Component {
    render() {
        return(
            <section>
                <form method="get">
                    <div id="container_form" className="mb-4">
                        <div className="mb-2">
                            <label htmlFor="nameInput" className="form-label">Nome:</label>
                            <input type="email" className="form-control" id="nameInput" required/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="emailInput" className="form-label">Endereço de e-mail:</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="nome@exemplo.com"
                                required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formControlTextArea" className="form-label">Digite sua mensagem:</label>
                            <textarea className="form-control" id="formControlTextArea" rows="3" required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-secondary" style={{color: "white"}}>Enviar mensagem</button>
                </form>
            </section>
        );
    }
}

export default ContactsForm;