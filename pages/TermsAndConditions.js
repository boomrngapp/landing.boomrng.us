import React, { useEffect } from 'react'
import Head from 'next/head'
import SimpleFooter from '../components/simplefooter/SimpleFooter';
import Terms from '../components/termsandconditions/Terms';
import SimpleHeader from '../components/simpleheader/SimpleHeader'

function TermsAndConditions() {


    useEffect(() => {
    document.querySelector("body").style.backgroundSize = "contain";
    document.querySelector("body").style.backgroundRepeat = "repeat";
    },[])

    return (
        <div>
            <Head>
                <title>Boomrng - Terms and Conditions</title>
                <meta name="description" content="Boomrng is one stop solution to select, personalize, and ship greeting cards and invitations. It's a platform for artists, designers, and printshops." />
                <meta name="keywords" content="greeting card, gift card, invitation, holiday card, birthday card, anniversary card, mothers day card, wedding invitation, designers, get well card, quality greeting card, personalized card" />
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SimpleHeader></SimpleHeader>
            <Terms></Terms>
            <SimpleFooter></SimpleFooter>
        </div>
    )
}

export default TermsAndConditions;
