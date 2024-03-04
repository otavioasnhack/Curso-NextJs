import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
        <div className={styles.container}>
          <ul>
          <li>
              <Link href='/Products'>
               produtos
              </Link>
          </li>
          <li>
              <Link href='/about'>
               Sobre Nós
              </Link>
          </li>
          </ul>
        <h1>Hello World Next.js</h1>
        </div>
  )
}
            