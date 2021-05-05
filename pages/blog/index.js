import Head from 'next/head'
import styles from '../../styles/index.module.scss'
import BlogHome from '../../components/blog/bloghome/BlogHome'
import SimpleFooter from '../../components/simplefooter/SimpleFooter'

export default function Blog() {
  return (
    // <div >
   <div className={styles.container}>
      <Head>
        <title>Boomrng - Blog</title>
        <meta name="description" content="Boomrng is one stop solution to select, personalize, and ship greeting cards and invitations. It's a platform for artists, designers, and printshops." />
        <meta name="keywords" content="greeting card, gift card, invitation, holiday card, birthday card, anniversary card, mothers day card, wedding invitation, designers, get well card, quality greeting card, personalized card" />
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />
      </Head>

      <BlogHome></BlogHome>
      <SimpleFooter></SimpleFooter>
    </div>
  )
}