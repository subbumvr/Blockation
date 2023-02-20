import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home.js'
function App() {
  return (
<>
<Header/>
<Router>
  <Routes>
  <Route path="/" element={<Home/>}/>
  </Routes>
</Router>
<Footer/>
</>
  );
}

export default App;
