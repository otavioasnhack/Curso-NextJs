import Head from 'next/head'
import Link from 'next/link'

export default function Nova() {
    return (
        <>
        <Head>
            <title>Página Nova</title>
        </Head>
        <h1>Conteúdo da Página Nova</h1>
        <Link href='/'>
            Voltar
        </Link>
        </>
    )
}