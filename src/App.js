import './App.scss';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MovieListing from "./components/MovieListing/MovieListing"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className='App'>
   
      <Router>
      <Header></Header>
      <div className='container'>
        <Routes>
        
        <Route path='/' exact element={<Home/>}/>
        <Route path='/movie/:imdbID' exact element={<MovieDetail/>}/>
        <Route path="*"  element={<PageNotFound/>}/>
         


      </Routes>
      </div>
      <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
