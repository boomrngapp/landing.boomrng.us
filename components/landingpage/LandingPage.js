import React, { useEffect } from 'react'
import styles from './LandingPage.module.scss'
import HubspotForms from '../hubspotforms/HubspotForms'


function LandingPage() {

    useEffect(() => {
        document.querySelector("body").style.backgroundSize = "cover";
        document.querySelector("body").style.backgroundRepeat = "no-repeat";
    },[])

    return (
        <div className={styles.lpPage}>
            <div className={styles.firstsection}>
                <div className={styles.left}>
                    <img className={styles.logo} src="/assets/logo4142x1305.png" alt="logo" onClick={() => history.push('/')}/>
                    <p>boomrng&trade; is reinventing the time consuming task of finding the right greeting card or invitation. Why go from store to store anymore just to find the right card and gift for that special someone or occasion?</p>
                    <p>We offer designer cards and invitations from artists that you can customize with your own message, or use our platform to create your own unique card design!</p>
                </div>
                <div className={styles.right}>
                    <img className={styles.phonescreen} src="/assets/boomrng-home-update.png" alt="phone-update"/>
                </div>
            </div>
            <div className={styles.secondsection}>
                <h2 className={styles.firstheader}>Where <span className={styles.your}>Your</span> <span className={styles.creations}>Creations</span><br/> <span className={styles.life}>Come to life!!</span></h2>
                <div className={styles.firstparagraph}>
                    <p>And, we handle the printing and mailing for you. Your cards will arrive within the week in the continental U.S.!
                    </p>
                    <p>Not sure what to get that special someone? boomrng&trade; can help with that too.</p>
                </div>
                <img className={styles.phonescreen1} src="/assets/boomrng_address_update.png" alt="phone screen"/>
                <div className={styles.signUpsection}>
                    <h2>Sign up<br/> <span>below...</span></h2>
                    <img className={styles.phonescreen2} src="/assets/boomrng-category-update.png" alt="phone sceen"/>
                    <p>How about a digital gift card to go along with your card that can be used at any retailer that accepts the gift cards online or in store.</p>
                    <p>You can complete your shopping all within the boomrng&trade; platform!</p>
                    <p>Get on our list to be the first to try boomrng!</p>
                    {/* <form>
                        <input className={styles.firstNameinput} type="text" name="first-name" placeholder="First Name"/>
                        <input className={styles.lastNameinput} type="text" name="Last-name" placeholder="Last Name"/>
                        <br/>
                        <input className={styles.emailinput} type="email" name="email" placeholder="Email"/>
                        <br/>
                        <input className={styles.state} type="text" name="state" placeholder="State/Region"/>
                        <input className={styles.country} type="text" name="country" placeholder="Country/Region"/>
                    </form> */}
                    <HubspotForms></HubspotForms>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
