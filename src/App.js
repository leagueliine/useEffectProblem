import { HomeCard } from './components/homeCard'
import { CardDetalhado } from './components/card-detalhado'
import { Teste } from './components/teste'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomeCard />} />
    //     <Route path="teste" element={<Teste />} />

    //   </Routes>
    // </Router>
    <HomeCard />
  );
}

export default App;
