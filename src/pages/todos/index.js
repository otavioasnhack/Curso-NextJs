import Styles from '../../styles/Todos.module.css'
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticProps() {

    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await data.json()
    //console.log(todos);
    return {
        props: {todos},
    }

}

export default function Todos({ todos }) {
    return (
        <>
            <Head>
                <title>Página de Todos</title>
            </Head>
            <h1>Tarefas:</h1>
            <ul className={Styles.todolist}>
               {todos.map((todo) => (
                <li key = {todo.id}>{todo.title} - <Link href={`/todos/${todo.id}/`}>Ver mais</Link></li>
               ))}
            </ul>
            <Link href='/'>
                Voltar
            </Link>
        </>
    )
}