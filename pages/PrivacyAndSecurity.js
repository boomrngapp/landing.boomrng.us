import React, { useEffect } from 'react'
import Privacy from '../components/privacyandsecurity/Privacy';
import SimpleFooter from '../components/simplefooter/SimpleFooter';


function PrivacyAndSecurity() {

    useEffect(() => {
    document.querySelector("body").style.backgroundSize = "contain";
    document.querySelector("body").style.backgroundRepeat = "repeat";
    },[])

    return (
        <div>
            <Privacy></Privacy>
            <SimpleFooter></SimpleFooter>
        </div>
    )
}

export default PrivacyAndSecurity
