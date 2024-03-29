import {useEffect} from 'react'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export default function Home() {
 useEffect(() => {
   navigator.geolocation.getCurrentPosition((position) => {
     console.log(position.coords)
   })
 }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Food | Delivery</title>
        <meta name="description" content="Fastfood e delivery de qualidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/icons/icon-512x512.png" />
        <link rel="apple-touch-icon" href="/images/icons/icon-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#CF4A4A" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="/images/logo.jpg"
            alt="burguito logo com uma imagem de um pão de hamburguer com o nome no centro"
          />
        </div>
      </header>
      <main className={`${styles.main} ${poppins.className}`}>
        <h1>Main</h1>
      </main>
    </div>
  )
}
