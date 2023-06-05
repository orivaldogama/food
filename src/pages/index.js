import Head from 'next/head'
import { Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Fastfood e delivery de qualidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${poppins.className}`}>
        <h1>Hello World</h1>
      </main>
    </>
  )
}
