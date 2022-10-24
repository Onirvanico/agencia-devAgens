import HeaderApp from "../header/HeaderApp";
import NavigationMain from "../header/NavegationMain";


const PaymentLayout = () => {
 
    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} />
        </>
    );
}

export default PaymentLayout;