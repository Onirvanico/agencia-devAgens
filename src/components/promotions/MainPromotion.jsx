import { Component } from "react";
import PromotionSearch from "./PromotionSearch";
import PromotionsList from "./PromotionsList";
import WeekHighLight from "./WeekHighLight";

class MainPromotion extends Component {
    render() {
        return(
           <main>
                <PromotionSearch />
                <WeekHighLight />
                <PromotionsList />
           </main>
        );
    }
}

export default MainPromotion;