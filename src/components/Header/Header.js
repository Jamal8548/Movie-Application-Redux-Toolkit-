import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import user from "../../images/user.png"
import { fetchAsyncMovies,fetchAsyncShows } from '../../features/movies/movieSlice';
import "./Header.scss"
import { GitHub } from '@material-ui/icons';


const Header = () => {
const [term,setTerm]=React.useState("")
const dispatch=useDispatch()

function submitHandler(e){
    if(term!==""){
e.preventDefault();
dispatch(fetchAsyncMovies(term))
dispatch(fetchAsyncShows(term))
setTerm("")}
else{
    alert("Please fill an entry first!")
}

}
  
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">Movie App</Link>
        </div>

        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={term}
              placeholder="Search Movies or Shows"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div class="Link">
          <GitHub style={{ color: "white", marginRight: 5 }} />
          <p>
            <a href="https://github.com/Jamal8548/Movie-Application-Redux-Toolkit-">
              GitHub Link!
            </a>
          </p>
        </div>
      </div>
    );
};

export default Header;