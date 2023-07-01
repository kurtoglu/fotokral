import './App.css';
import Header from './moduls/header';
import Navbar from './moduls/navbar';
import Footer from './moduls/footer';
import Personel from './moduls/personel/personel';
import { Routes, Route } from 'react-router-dom';
import RandevAl from './moduls/personel/randevual';
import PersonelLayout from './moduls/personel/personellayout';
import RadnevuList from './moduls/personel/randevulist';




function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/personel' element={<PersonelLayout />}>
          <Route index={true} element={<Personel />} />
          <Route path='randevual' element={<RandevAl />} />
          <Route path='randevulist' element={<RadnevuList />} />
        </Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
