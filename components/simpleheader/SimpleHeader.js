import styles from './SimpleHeader.module.scss'
import Link from 'next/link'

function SimpleHeader() {
    return (

        <div className={styles.center}>
            <Link href='/' ><img className={styles.logo} src="/assets/logo4142x1305.png" alt="logo" /></Link>
        </div>
    )
}

export default SimpleHeader;