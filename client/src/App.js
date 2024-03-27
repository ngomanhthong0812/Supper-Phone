
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import TrangChu from './pages/TrangChu';
import GioiThieu from './pages/GioiThieu';
import Iphone from './pages/Iphone';
import IPad from './pages/IPad';
import MacBook_iMac from './pages/MacBook_iMac';
import AppleWatch from './pages/AppleWatch';
import Airpods from './pages/Airpods';
import PhuKien from './pages/PhuKien';
import ChinhSach from './pages/ChinhSach';
import TinTuc from './pages/TinTuc';
import LienHe from './pages/LienHe';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<TrangChu />} />
          <Route path='/gioi-thieu' element={<GioiThieu />} />
          <Route path='/iphone' element={<Iphone />} />
          <Route path='/ipad' element={<IPad />} />
          <Route path='/macbook-imac' element={<MacBook_iMac />} /> 
          <Route path='/apple-watch' element={<AppleWatch />} />
          <Route path='/airpods' element={<Airpods />} />
          <Route path='/phu-kien' element={<PhuKien />} />
          <Route path='/chinh-sach' element={<ChinhSach />} />
          <Route path='/tin-tuc' element={<TinTuc />} />
          <Route path='/lien-he' element={<LienHe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
