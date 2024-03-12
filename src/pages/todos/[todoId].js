import Link from 'next/link'
//import { useRouter } from 'next/router'

export async function getStaticProps(context) {
    const { params } = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`,)

    const todo = await data.json()

    return {
        props: { todo },
    }
}

export async function getStaticPaths() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await response.json()
    
    const paths = data.map((todo) => {
        return {
            params: {
                todoId: `${todo.id}`,
            },
        }
    
    })
    return { paths, fallback: false}
}

export default function Todo({ todo }) {
    //const router = useRouter()
    //const {todoId} = router.query
    // OU const todoId = router.query.todoId

    return (
        <>
            <Link href='/'>
                Voltar
            </Link>
            <h1>Exibindo o todo da página: {todo.id}</h1>
            <h3>Texto: {todo.title}</h3>
            <p>
                comentário: la la la...
                <Link href={`/todos/${todo.id}/comments/1`}>
                    detalhes
                </Link>
            </p>
            <p>
                comentário: le le le...
                <Link href={`/todos/${todo.id}/comments/2`}>
                    detalhes
                </Link>
            </p>
            <p>
                comentário: li li li...
                <Link href={`/todos/${todo.id}/comments/3`}>
                    detalhes
                </Link>
            </p>
        </>
    )
}