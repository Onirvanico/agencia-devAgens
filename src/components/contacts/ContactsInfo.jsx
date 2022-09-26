import { Component } from "react";


class ContactsInfo extends Component {
    render() {
        return(
            <section>
            <div className="d-flex justify-content-between p-5 align-items-center bg-light">
                <div>
                    <h3>Aqui é o lugar para batermos um papo, seja qual for a dúvida, sugestão ou elogio!</h3>
                </div>
                <div className="m-3">
                    <figure className="figure">
                        <img src="imagem-contato.webp" width="200" height="100"
                            className="figure-img img-fluid rounded"
                            alt="Desenho de uma pessoa no computador e outra no celular"/>
                        <figcaption className="figure-caption">Fale com a gente.</figcaption>
                    </figure>
                </div>
            </div>
        </section>
        );
    }
}

export default ContactsInfo;