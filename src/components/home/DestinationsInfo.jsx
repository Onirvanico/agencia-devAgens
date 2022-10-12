import { Component } from "react";
import DestinoService from '../../services/DestinoService';
import DestinationInfo from './DestinationInfo';

const borderStyle = {
  borderRadious: 10
};

class DestinationsInfo extends Component {

  constructor(props) {
    super(props)
    this.service = new DestinoService();
    this.state = {
      destinos: []
    }
  }

  async componentDidMount() {
    this.result = await this.service.retrieveUntil(3)
    this.destinosParcialList = this.result.map(dest => <DestinationInfo key={dest.id} destino={dest} />);
    this.setState({ destinos: this.destinosParcialList});
  }

    render() {
        return(
          <div className="container marketing mt-5 p-3" style={borderStyle}>
            <div className="row">
              {this.state.destinos}
            </div>
            <hr className="featurette-divider"/>
          </div>
        );
    }
}

export default DestinationsInfo;