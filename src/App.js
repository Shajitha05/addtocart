//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
   <Footer />
  </>
  );
}

export default App;
