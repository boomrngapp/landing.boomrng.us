//bloghome content page
import Head from 'next/head'
import styles from './BlogHome.module.scss'

export default function BlogHome() {
    return (
        <div>
            <Head>
                <title>Boomrng - Return the Love Blog</title>
            </Head>
            <div>
                <div>
                    <h1>Boomrng Blog</h1>
                </div>
                <div>
                    <h2>Blog Content</h2>
                    <div>Section 1</div>
                    <div>Section 2</div>
                </div>
            </div>
        </div>
    )
}
