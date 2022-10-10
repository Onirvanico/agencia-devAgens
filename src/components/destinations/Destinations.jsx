import { Component } from "react";
import "../../css/destinos.css";
import DestinoService from "../../services/DestinoService";
import DestinationItem from "./DestinationItem";
import DestinationTypes from "./DestinationTypes";

class Destinations extends Component {

    constructor(props) {
        super(props);
        this.service = new DestinoService();
        this.state = {
            destinos: []
        };
    }

    async componentDidMount() {
      this.result = await this.service.getAll;
      this.componentList = this.result.map(dest => <DestinationItem key={dest.id} destino={dest} />);
      this.setState({ destinos: this.componentList });
    }

    render() {
        return(
            <section className="destinos">
                <DestinationTypes destinationType="Para família" destinos={this.state.destinos}/>
                <DestinationTypes destinationType="Para casais" destinos={this.state.destinos} />
                <DestinationTypes destinationType="Para grupos de amigos" destinos={this.state.destinos} />
            </section>
        );
    }
}

export default Destinations;