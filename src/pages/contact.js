import Head from 'next/head'
import Link from 'next/link'


export default function Contact() {
    return (
        <>
        <Head>
            <title>Página de Contato</title>
        </Head>
        <h1>Conteúdo da página de contato</h1>
        <Link href='/'>
            Voltar
        </Link>
        </>
    )
}