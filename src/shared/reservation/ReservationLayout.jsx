import Footer from '../../components/footer/Footer';
import HeaderApp from '../../components/header/HeaderApp';
import NavigationMain from '../../components/header/NavegationMain';
import MainReservation from './MainReservation';


function ReservationLayout() {

        return(
           <div>
                   <HeaderApp navigationMain={<NavigationMain />} />
                   <MainReservation />
                   <Footer />
           </div>
        );
}

export default ReservationLayout;