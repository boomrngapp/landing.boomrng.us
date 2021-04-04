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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage></LandingPage>
      <SimpleFooter></SimpleFooter>
    </div>
  )
}
