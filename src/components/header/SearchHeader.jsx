import { Component } from 'react';

class SearchHeader extends Component {

    render() {
        return(
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Buscar..."
                            aria-label="Search"/>
                    </form>
        );
    }
}

export default SearchHeader;