import { Component } from "react";
import DestinationsInfo from "./DestinationInfo";
import DestinationsCarousel from "./DestinationsCarousel";
import TypeOfPlans from "./TypeOfPlans";


class MainHome extends Component{

    render() {
        return(
            <main>
                <DestinationsCarousel />
                <DestinationsInfo />
                <TypeOfPlans />
            </main>
        );
    }
}

export default MainHome;