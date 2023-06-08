import { Link } from "react-router-dom"
export default function Home(){
    return (
        <>
        <main>
            <h2>This is Home Page</h2>
        </main>
        <nav>
            <Link to="/about">
                <h3>About</h3>
                </Link>
        </nav>
        </>
)
}