
import './App.css';
import NavigationMain from './components/NavegationMain';
import Header from './components/Header';
import SearchHeader from './components/SearchHeader';
import UserAutentication from './components/UserAutentication';

function App() {
  return (
    <div className="App">
      <Header navigationMain={<NavigationMain />} searchHeader={<SearchHeader />} userAutentication={<UserAutentication />}/>
    </div>
  );
}

export default App;
