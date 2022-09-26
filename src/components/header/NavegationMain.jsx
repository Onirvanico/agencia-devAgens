import { Link } from 'react-router-dom';

const { Component } = require('react');


class NavigationMain extends Component {
    render() {
        return(
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                    <li><Link to="/destinations" className="nav-link px-2 text-white">Destino</Link></li>
                    <li><Link to="/promotions" className="nav-link px-2 text-white">Promoções</Link></li>
                    <li><Link to="/contacts" className="nav-link px-2 text-white">Contato</Link></li>
                    <li><Link to="/about_us" className="nav-link px-2 text-secondary">Sobre nós</Link></li>
                </ul>
            
       );
    }
}

export default NavigationMain;