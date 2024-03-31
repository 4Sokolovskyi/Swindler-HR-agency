
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Main from './components/mainPage/Main';
import Accounting from './components/pages/Accounting';
import Legal from './components/pages/Legal';
import Licenses from './components/pages/Licenses';


function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Main />}/>
                  <Route path="/accounting" element={<Accounting />}/>
                  <Route path="/legal"      element={<Legal />}/>
                  <Route path="/licenses"   element={<Licenses />}/>
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
