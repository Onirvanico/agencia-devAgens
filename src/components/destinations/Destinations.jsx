import { Component } from "react";
import "../../css/destinos.css";

class Destinations extends Component {

    render() {
        return(
            <section className="destinos">
                <div className="destinos__itens">
                    <div className="destinos__info">
                    <div className="destinos__cabecalho">
                        <h4 className="destinos__titulo">
                        
                        Destinos para família
                        </h4>
                        <button className="destinos__botao">
                        Visualizar todos
                        </button>
                    </div>
                    </div>
                    <div className="destinos__conteudo">
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/deserto-atacama.webp"/>
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Ilhas Galápagos</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Com aproximadamente 25 mil habitantes e muitos turistas, esta ilha é um dos lugares incríveis para
                            viajar.
                            Os cruzeiros pela ilha, animais locais e a natureza fazem o passeio ser inesquecível.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/krabi-tailandia.jpg"/>
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Krabi</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Krabi, uma província da Tailândia, é composta por 130 ilhas, e é muito buscada por quem deseja encontrar
                            um local sem muita agitação.
                            Os mares transparentes e as paisagens são de tirar o fôlego.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/roatan-honduras.jpg"/>
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Roatán</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            A ilha de Roatán, localizada no litoral norte de Honduras, não é um dos mais comentados destinos do
                            Caribe.
                            Ainda assim, suas águas quentes e cristalinas trazem para região uma paisagem paradisíaca.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/bonito-mato-grosso-do-sul.jpg" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho" style={{display: "inline"}}>
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Bonito</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Localizada no Mato Grosso do Sul, Bonito é um dos lugares incríveis ao redor do mundo para viajar.
                            Com suas cachoeiras, rios de águas cristalinas e cavernas, a cidade ganha muitas visitas o ano todo.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/seychelles-africa.jpg" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Seychelles</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Seychelles, na África, é um país localizado no Oceano Índico. Seu território conta com 115 ilhas com
                            praias de areia clara e águas extremamente transparentes.
                            É uma região de paisagem única, por isso os moradores e nativos promovem o turismo sustentável.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="destinos__itens">
                    <div className="destinos__info">
                    <div className="destinos__cabecalho">
                        <h4 className="destinos__titulo">
                        Destinos para casais
                        </h4>
                        <button className="destinos__botao">
                        Visualizar todos
                        </button>
                    </div>
                    </div>
                    <div className="destinos__conteudo">
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/calcuta-india.jpg" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Calcutá</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Calcutá é uma cidade da Índia popularmente conhecida pelas décadas de trabalho que Madre Teresa dedicou
                            à população da região.
                            Suas construções fazem de Calcutá um destino certeiro para quem busca lugares incríveis para viajar.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/muscat-oma.jpg" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Muscat</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Muscat, em Omã, é uma cidade rodeada por montanhas e banhada pelo Oceano Índico.
                            A capital e maior cidade de Omã reúne em sua beleza natural tanto montanhas quanto dunas e praias.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/luang-prabang-laos.jpg" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho" style={{display: "inline"}}>
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Luang Prabang</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Luang Prabang, localizada em Laos, na Ásia, é um vilarejo de ares franceses em meio às montanhas.
                            É banhada por dois rios e guarda em seu território uma das mais belas cachoeiras de todo o mundo.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/torres-del-paine-chile.jpg" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho" style={{display: "inline"}}>
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Torres del Paine </h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Localizada no Sul da Patagônia, além de ser um dos lugares incríveis para viajar, Torres del Paine faz
                            parte de uma reserva ambiental declarada pela Unesco.
                            Essa área possui muitos animais exóticos, geleiras, campos e lagos para atividades de ecoturismo.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/aparados-da-serra-brasil.jpg"/>
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Aparados da Serra</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Entre Santa Catarina e Rio Grande do Sul, o Parque Nacional de Aparados da Serra é formado por cânions,
                            cachoeiras e muita natureza para apreciar e praticar esportes radicais.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="destinos__itens">
                    <div className="destinos__info">
                    <div className="destinos__cabecalho">
                        <h4 className="destinos__titulo">
                        <i className="destinos__icone far fa-star"></i>
                        Destino para grupos de amigos
                        </h4>
                        <button className="destinos__botao">
                        <i className="fas fa-th"></i>
                        Visualizar todos
                        </button>
                    </div>
                    </div>
                    <div className="destinos__conteudo">
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/lago-powel-eua.jpg" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Lago Powell</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Localizado entre Utah e Arizona, o lago Powell é um reservatório do rio Colorado,
                            situado em uma região semiárida. Todo ano recebe diversos turistas, devido a sua água intensamente azul
                            e a paisagem local.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/yogyakarta-indonesia.jpg" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Yogyakarta</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Yogyakarta é uma cidade localizada na ilha de Java, na Indonésia. Embora seja uma região bastante
                            movimentada,
                            em uma viagem para Yogyakarta você vai poder a conhecer paisagens montanhosas maravilhosas, o vulcão do
                            monte Merapi e muitos templos budistas e hindus.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/machu-picchu-peru.webp" />
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Machu Picchu</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Machu Picchu é um desses lugares em que é preciso desfrutar ao menos uma vez na vida.
                            A energia inexplicável do local e a bela paisagem que cerca essa Maravilha do Mundo Moderno atraem
                            muitos viajantes durante todo o ano.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/angkor-wat-camboja.webp"/>
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Angkor Wat</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Descoberta no final do século 16, a capital do antigo império Jemer é considerada a maior estrutura religiosa do mundo.
                        </div>
                        </div>
                    </div>
                    <div className="destinos__card">
                        <img className="destinos__card___imagem" src="./assets/taj-mahal-india.webp"/>
                        <div className="destinos__card___corpo">
                        <div className="destinos__card___cabecalho">
                            <h5 className="destinos__card___titulo" style={{display: "inline"}}>Taj Mahal</h5>
                            <a type="button" className="btn btn-outline-primary float-end" href="pagamento.html">Comprar</a>
                        </div>
                        <div className="destinos__card___descricao">
                            Não deixe de ir até a margem oposta ao rio Yamuna, onde você poderá contemplar uma perspectiva totalmente diferente da vista do Taj Mahal.
                            No entardecer, as luzes do pôr do sol dão um aspecto incrivelmente bonito ao mausoléu.
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Destinations;