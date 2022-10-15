
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContainerApp from './components/ContainerApp';
import DestinationsLayout from './components/destinations/DestinationsLayout';
import PageNotFound from './shared/not_found/PageNotFound';
import HomeLayout from './components/home/HomeLayout';
import PromotionLayout from './components/promotions/PromotionLayout';
import ContactLayout from './components/contacts/ContactLayout';
import AboutUsLayout from './components/about_us/AboutUsLayout';
import ReservationLayout from './shared/reservation/ReservationLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContainerApp />}>
          <Route index element={<HomeLayout />}/>
          <Route path='destinations' element={<DestinationsLayout />}/>
          <Route path='promotions' element={<PromotionLayout />} />
          <Route path='contacts' element={<ContactLayout />} />
          <Route path='about_us' element={<AboutUsLayout />} />
          <Route path='reservation/:id' element={<ReservationLayout />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
