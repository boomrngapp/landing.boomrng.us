import React from 'react'
import './MainFooter.scss'
import CopyrightIcon from '@material-ui/icons/Copyright';

function MainFooter() {
    return (
        <div className="main-footer">
            <div className="left">
                <div className="navigations">
                    <ul>
                        <li><h4>HELP CENTER</h4></li>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy and Security</a></li>
                    </ul>
                    <ul>
                        <li><h4>RESOURCES</h4></li>
                        <li><a href="#">Card categories</a></li>
                        <li><a href="#">Design Contributors</a></li>
                        <li><a href="#">Refer A friend</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                    <ul>
                        <li><h4>COMPANY</h4></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Investor Relations</a></li>
                        <li><a>Business Solutions</a></li>
                    </ul>
                </div>
                <div className="copyRight">
                    <p><CopyrightIcon/> 2021 boomrng, LLC. All Rights Reserved. Terms and Conditions of Use.</p>
                </div>
            </div>
            <div className="right">
                <h3>Sign up for emails, offers, and updates</h3>
                <form>
                    <input className="firstName-input" type="text" name="first-name" placeholder="First Name"/>
                    <input className="lastName-input" type="text" name="last-name" placeholder="Last Name"/>
                    <br/>
                    <input className="email-input" type="email" name="email" placeholder="Email"/>
                    <br/>
                    <input className="state" type="text" name="state" placeholder="State/Region"/>
                    <input className="country" type="text" name="country" placeholder="Country/Region"/>
                </form>
                <div className="social-media">
                    <a href="https://www.facebook.com/boomrngapp" target="_blank"><img className="fb-icon" src="/assets/FB_Icon.png" alt="facebook icon"/></a>
                    <a href=" https://www.instagram.com/boomrngapp" target="_blank"><img className="instagram-icon" src="/assets/Instagra_Icon.png" alt="instagram icon"/></a>
                    <a href="https://twitter.com/home" target="_blank"><img className="twitter-icon" src="/assets/Twitter_Icon.png" alt="twitter icon"/></a>
                    <a href="https://www.pinterest.com/business/hub/" target="_blank"><img className="Pinterest-icon" src="/assets/Pinterest_Icon.png" alt="pinterest icon"/></a>
                </div>
            </div>
        </div>
    )
}

export default MainFooter
