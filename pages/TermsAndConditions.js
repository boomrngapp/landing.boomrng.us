import React, { useEffect } from 'react'
import SimpleFooter from '../components/simplefooter/SimpleFooter';
import Terms from '../components/termsandconditions/Terms';
// import { useHistory } from 'react-router';

function TermsAndConditions() {

    // const history = useHistory();

    useEffect(() => {
    document.querySelector("body").style.backgroundSize = "contain";
    document.querySelector("body").style.backgroundRepeat = "repeat";
    },[])

    return (
        <div>
            <Terms></Terms>
            <SimpleFooter></SimpleFooter>
        </div>
    )
}

export default TermsAndConditions;
