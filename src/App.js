
import Header from './components/Header/Header';
import FormTwo from './components/FormTwo/FormTwo';
// import Survey from './components/Survey/Survey';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ThankYou from './components/ThankYou/ThankYou';

function App() {
  return (
    <>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/thankyou' element={<ThankYou />} />


        </Routes>

      {/* <Header/> */}

    </>
  );
}

export default App;
