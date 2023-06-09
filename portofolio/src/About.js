import {Link} from 'react-router-dom'

export default function About(){
    return (
        <>
            <div>
                <h1>This is About</h1>
            </div>
            <nav>
                <Link to="/">
                    <h3>Back to Home Page</h3>
                </Link>
            </nav>
        </>
    )
}