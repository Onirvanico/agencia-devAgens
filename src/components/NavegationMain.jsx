const { Component } = require('react');


class NavigationMain extends Component {
    render() {
        return(
            
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="home.html" className="nav-link px-2 text-white">Home</a></li>
                    <li><a href="destino.html" className="nav-link px-2 text-white">Destino</a></li>
                    <li><a href="promocoes.html" className="nav-link px-2 text-white">Promoções</a></li>
                    <li><a href="contato.html" className="nav-link px-2 text-white">Contato</a></li>
                    <li><a href="sobre-nos.html" className="nav-link px-2 text-secondary">Sobre nós</a></li>
                </ul>
            
       );
    }
}

export default NavigationMain;