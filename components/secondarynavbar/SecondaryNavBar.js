import React from 'react'
import './SecondaryNavBar.scss'
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';

function SecondaryNavBar() {

    const history = useHistory();
    
    const handleSreach = (e) => {
        if(document.querySelector(".searchInput-container .searchInput").classList[1] === "hidden"){
            document.querySelector(".searchInput-container .searchInput").classList.remove("hidden");
            document.querySelector(".searchInput-container .searchInput").classList.add("visible");
            setTimeout(()=>{
                document.querySelector(".searchInput-container").style.width = "20vw";
            }, 50)
        }else{
            document.querySelector(".searchInput-container").style.width = "3vw";
            setTimeout(()=>{
                document.querySelector(".searchInput-container .searchInput").classList.remove("visible");
                document.querySelector(".searchInput-container .searchInput").classList.add("hidden");
            }, 50)
        }
    }

    return (
        <div className="secondaryNavBar">
            <div className="first-section">
                <img className="logo" src="/assets/boomrng_logo_slogan_300x95.png" alt="logo" onClick={() => history.push('/')}/>
                <div className="loginAndLogout">
                    <div className="searchInput-container search-input-LargeSreens">
                        <input className="searchInput hidden" type="search" placeholder="Search..."/>
                        <SearchIcon className="search-icon" onClick={e => handleSreach()}/>
                    </div>
                    <p>Login</p>
                    <p>Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default SecondaryNavBar
