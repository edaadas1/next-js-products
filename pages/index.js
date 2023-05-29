import Head from 'next/head'
import Image from 'next/image'
import { Inter,Roboto } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function Home({data}) {

  // console.log("data",data)

  return (
    <>
      <Head>
        <title>Eda Adaş</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar></Navbar>
        {/* <Image src="/next.svg" width={150} height={150}></Image> */}

        <div className={styles.productsDiv}>
          {
            data?.map((dt,i)=>(
              <Link key={i} href={`detail/${dt.id}`}>
                <img className={styles.image} src={dt.image}></img>
                <div className={styles.title}>{dt.title}</div>
              </Link>
            ))
          }
        </div>
        
      </main>

      <style jsx>
        {
          `
          .image{
            width : 200px
          }
          `
        }
      </style>


    </>
  )
}

export const getStaticProps =async()=> {
  const data = await fetch("https://fakestoreapi.com/products").then(res=>res.json())
  return {
    props : {
      data
    }
  }
}
