import "./App.css";
import Header from "./moduls/header";
import Navbar from "./moduls/navbar";
import Footer from "./moduls/footer";
import Personel from "./moduls/personel/personel";
import { Routes, Route } from "react-router-dom";
import { Login, RadnevuList, PersonelLayout, RandevAl } from "./helpers/routes";

function App() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="my-2">
          <Header />
        </div>
        <div className="my-2">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/personel" element={<PersonelLayout />}>
            <Route index={true} element={<Personel />} />
            <Route path="randevual" element={<RandevAl />} />
            <Route path="randevulist" element={<RadnevuList />} />
          </Route>
        </Routes>
        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
