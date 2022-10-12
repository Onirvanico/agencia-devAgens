import { Component } from 'react';


class IndicatorItem extends Component {

    render() {
        return <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={this.props.position} className={this.props.classN}
        aria-current={this.props.current} aria-label={`Slide ${this.props.slidePosition}`}></button>
        
    }
}

export default IndicatorItem;