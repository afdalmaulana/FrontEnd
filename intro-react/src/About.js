import { Link } from "react-router-dom"
export default function About(){
    return (
        <>
        <div>
            <h2>This is Content</h2>
        </div>
        <nav>
            <Link to="/">
                <h3>Back to Home Page</h3> 
            </Link>
        </nav>
        </>
    )
}