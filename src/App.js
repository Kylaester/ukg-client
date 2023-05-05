
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

// import FormOne from './components/FormOne/FormOne';
// import Survey from './components/Survey/Survey';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/' element={<ThankYou/>}/>

    
    </Routes>

    </BrowserRouter>
    <Header/>
   
    </>
  );
}

export default App;
