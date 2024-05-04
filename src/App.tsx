import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Spells from './pages/Spells';
import Favorites from './pages/Favorites';
import Navbar from './components/shared/Navbar';
import Spell from './pages/Spell';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Navbar}>
        <Route path='/' Component={Home} />
        <Route path='/spells' Component={Spells} />
        <Route path='/spells/:index' Component={Spell} />
        <Route path='/favorites' Component={Favorites} />
      </Route>
    </Routes>
  );
}

export default App;
