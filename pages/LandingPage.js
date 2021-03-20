import React, { useEffect } from 'react'
import Head from 'next/head'
//import { useHistory } from 'react-router';


function LandingPage() {

    //const history = useHistory();
    useEffect(() => {
        document.querySelector("body").style.backgroundSize = "cover";
        document.querySelector("body").style.backgroundRepeat = "no-repeat";
    },[])

    return (
        <div className="lpPage">
            <div className="first-section">
                <div className="left">
                    <img className="logo" src="/assets/logo4142x1305.png" alt="logo" onClick={() => history.push('/')}/>
                    <p>boomrng is reinventing the time consuming task of finding the right greeting card or invitation. Why go from store to store anymore just to find the right card and gift for that special someone or occasion?</p>
                    <p>We offer designer cards and invitations from artists that you can customize with your own message, or use our platform to create your own unique card design!</p>
                </div>
                <div className="right">
                    <img className="phone-screen" src="/assets/boomrng-home-update.png" alt="phone-update"/>
                </div>
            </div>
            <div className="second-section">
                <h2 className="first-header">Where <span className="your">Your</span> <span className="creations">Creations</span><br/> <span className="life">Come to life!!</span></h2>
                <div className="first-paragraph">
                    <p>And, we handle the printing and mailing for you. Your cards will arrive within the week in the continental U.S.!
                    </p>
                    <p>Not sure what to get that special someone? boomrng can help with that too.</p>
                </div>
                <img className="phone-screen-1" src="/assets/boomrng_address_update.png" alt="phone screen"/>
                <div className="signUp-section">
                    <h2>Sign up<br/> <span>below...</span></h2>
                    <p>How about a digital gift card to go along with your card that can be used at any retailer that accepts the gift cards online or in store.</p>
                    <p>You can complete your shopping all within the boomrng platform!</p>
                    <p>Get on our list to be the first to try boomrng!</p>
                    <form>
                        <input className="firstName-input" type="text" name="first-name" placeholder="First Name"/>
                        <input className="lastName-input" type="text" name="Last-name" placeholder="Last Name"/>
                        <br/>
                        <input className="email-input" type="email" name="email" placeholder="Email"/>
                        <br/>
                        <input className="state" type="text" name="state" placeholder="State/Region"/>
                        <input className="country" type="text" name="country" placeholder="Country/Region"/>
                    </form>
                </div>
                <img className="phone-screen-2" src="/assets/boomrng-category-update.png" alt="phone sceen"/>
            </div>
        </div>
    )
}

export default LandingPage
