import Head from 'next/head'
import { Montserrat  } from 'next/font/google'
import styles from './Home.module.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>mimickn.dev</title>
        <meta name="description" content="mimickn.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${montserrat.className}`}>
        <div className={styles.container}>
          <p className={styles.title}>mimickn.dev</p>
        </div>
      </main>
    </>
  )
}
