import { Component } from "react";


class IntroImage extends Component {
    render() {
        return(
            <div id="content_apresentation">
                <img src="img-ideia.jpg" height="400px" width="100%" style={{objectFit: "cover"}} alt="..."/>
                <h1 id="presentation_title">A ideia...</h1>
            </div>
        );
    }
}

export default IntroImage;