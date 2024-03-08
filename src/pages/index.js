import styles from "@/styles/Home.module.css";
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keyword" content="Roupas, Calçados, Bonés"></meta>
      <meta name="description" content="Encontre a melhor roupa pra você"></meta>
      
    </Head>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
      </div>
      <Image src="/images/city.jpg" width="400" height="500" alt="cidade a noite"/>
    </>
    

  )
}
            