import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './NavBar.scss';
import MenuIcon from '@material-ui/icons/Menu';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { useHistory } from 'react-router';

function NavBar() {

    const history = useHistory();

    const handleSreach = (e) => {
        if(document.querySelector(".searchInput-container .searchInput").classList[1] === "hidden"){
            document.querySelector(".searchInput-container .searchInput").classList.remove("hidden");
            document.querySelector(".searchInput-container .searchInput").classList.add("visible");
            setTimeout(()=>{
                document.querySelector(".searchInput-container .searchInput").style.width = "300px";
            }, 50)
        }else{
            document.querySelector(".searchInput-container .searchInput").style.width = "50px";
            setTimeout(()=>{
                document.querySelector(".searchInput-container .searchInput").classList.remove("visible");
                document.querySelector(".searchInput-container .searchInput").classList.add("hidden");
            }, 50)
        }
    }

    const openMenu = () =>{
        document.querySelector(".navBar .second-section").style.right = 0;
    }

    const closeMenu = () =>{
        document.querySelector(".navBar .second-section").style.right = "-400px";
    }

    return (
        <div className="navBar">
            <div className="first-section">
                <img className="logo" src="/assets/boomrng_logo_slogan_300x95.png" alt="logo" onClick={() => history.push('/')}/>
                <div className="loginAndLogout">
                    <div className="searchInput-container search-input-LargeSreens">
                        <input className="searchInput hidden" type="search" placeholder="Search..."/>
                        <SearchIcon className="search-icon" onClick={e => handleSreach()}/>
                    </div>
                    <p>Login</p>
                    <p>Sign Up</p>
                    <MenuIcon className="burger-menu" onClick={openMenu}/>
                </div>
            </div>
            <div className="second-section">
                <CancelPresentationIcon className="close" onClick={closeMenu}/>
                <div className="searchInput-container-mobile search-input-smallSreens">
                    <input className="searchInput" type="search" placeholder="Search..."/>
                    <SearchIcon className="search-icon" onClick={e => handleSreach()}/>
                </div>
                <p className="designer-cards">Designer Cards</p>
                <p className="create-cards">Create Cards</p>
                <p className="designers" onClick={() => history.push('/designer')}>Designers</p>
                <p className="business" onClick={() => history.push('/business')}>Business</p>
            </div>
        </div>
    )
}

export default NavBar
