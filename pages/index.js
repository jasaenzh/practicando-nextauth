import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina de inicio</title>
      </Head>

      <main className={styles.main}>
        <h1 className='text-3xl font-bold underline'>Hola mundo!</h1>
      </main>

    </div>
  )
}
