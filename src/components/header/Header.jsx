import React, { Component } from 'react';


class HeaderApp extends Component {

    constructor(props) {
        super(props);
        this.state = "";
    }

    render() {
        return(
    <div className="app">
        <header className="app_header">
            <div className="p-3 bg-dark text-white app_header">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            </svg>
                        </a>
                        {this.props.navigationMain}
                        {this.props.searchHeader}
                        {this.props.userAuthentication}
                    </div>
                </div>
            </div>
        </header>
    </div>
        );
    }
}

export default HeaderApp;