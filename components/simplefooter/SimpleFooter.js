import React, { useEffect } from 'react'
import styles from './SimpleFooter.module.scss'
import CopyrightIcon from '@material-ui/icons/Copyright'
import Link from 'next/link'
//import Image from 'next/image'

//import { useHistory } from 'react-router';

function SimpleFooter() {

    //const history = useHistory();

    return (
        <div className={styles.firstfooter}>
            <div className={styles.privacysection}>
                {/* <p className={styles.securitytext}>{useEffect(() => {window.location.pathname}) === '/privacy-and-security' ? 'Privacy & Security' : <span className={styles.link} onClick={() => history.push('/privacy-and-security')}>Privacy & Security</span>} | {useEffect(() => {window.location.pathname}) === '/terms-and-conditions-policy' ? 'Terms & Conditions' : <span className={styles.link} onClick={() => history.push('/terms-and-conditions-policy')}>Terms & Conditions</span>}</p> */}
                <p className={styles.securitytext}><Link href='/PrivacyAndSecurity'><span className={styles.link} >Privacy & Security</span></Link> | <Link href='/TermsAndConditions'><span className={styles.link} >Terms & Conditions</span></Link></p>
                <p className={styles.copyright}><CopyrightIcon /> 2021 boomrng, LLC. All Rights Reserved. Terms and Conditions of Use.</p>
            </div>
            <div className={styles.socialmedia}>
                <a href="https://www.facebook.com/boomrngapp" target="_blank"><img className={styles.fbicon} src="/assets/FB_Icon.png" alt="facebook icon" layout="fill" /></a>
                <a href=" https://www.instagram.com/boomrngapp" className={styles.instagramicon} target="_blank"><img src="/assets/Instagra_Icon.png" alt="instagram icon" layout="fill" /></a>
                <a href="https://twitter.com/boomrngapp" target="_blank"><img className={styles.twittericon} src="/assets/Twitter_Icon.png" alt="twitter icon" layout="fill" /></a>
                <a href="https://www.pinterest.com/business/hub/" className={styles.pinteresticon} target="_blank"><img src="/assets/Pinterest_Icon.png" alt="pinterest icon" layout="fill" /></a>
            </div>
        </div>
    )
}

export default SimpleFooter
