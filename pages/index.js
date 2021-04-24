import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import styles from '../styles/index.module.scss'
import LandingPage from '../components/landingpage/LandingPage'
import SimpleFooter from '../components/simplefooter/SimpleFooter'

export default function Home() {
  return (
    // <div >
   <div className={styles.container}>
      <Head>
        <title>Boomrng - Greeting Cards and Event Invitations App</title>
        <meta name="description" content="Boomrng is one stop solution to select, personalize, and ship greeting cards and invitations. It's a platform for artists, designers, and printshops." />
        <meta name="keywords" content="greeting card, gift card, invitation, holiday card, birthday card, anniversary card, mothers day card, wedding invitation, designers, get well card, quality greeting card, personalized card" />
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage></LandingPage>
      <SimpleFooter></SimpleFooter>
    </div>
  )
}
