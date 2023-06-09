import {Link} from 'react-router-dom'
export default function Profile (){
    return (
        <>
      <div>
            <h2>This is Home Page</h2>
        </div>
        <nav>
            <Link to="/about">
                <h3>About</h3>
                </Link>
            <Link to="/">
                <h3>Home Page</h3>
            </Link>
        </nav>
    </>
  );
}