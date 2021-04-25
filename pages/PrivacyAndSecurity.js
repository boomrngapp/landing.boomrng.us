import React, { useEffect } from 'react'
import Head from 'next/head'
import Privacy from '../components/privacyandsecurity/Privacy';
import SimpleFooter from '../components/simplefooter/SimpleFooter';
import SimpleHeader from '../components/simpleheader/SimpleHeader'


function PrivacyAndSecurity() {

    useEffect(() => {
    document.querySelector("body").style.backgroundSize = "contain";
    document.querySelector("body").style.backgroundRepeat = "repeat";
    },[])

    return (
        <div>
            <Head>
                <title>Boomrng - Privacy and Security</title>
                <meta name="description" content="Boomrng is one stop solution to select, personalize, and ship greeting cards and invitations. It's a platform for artists, designers, and printshops." />
                <meta name="keywords" content="greeting card, gift card, invitation, holiday card, birthday card, anniversary card, mothers day card, wedding invitation, designers, get well card, quality greeting card, personalized card" />
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SimpleHeader></SimpleHeader>
            <Privacy></Privacy>
            <SimpleFooter></SimpleFooter>
        </div>
    )
}

export default PrivacyAndSecurity
