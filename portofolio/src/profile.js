import {Link} from 'react-router-dom'
import igPic from './image/instagram.png'
import linkPic from './image/linked.png'
export default function Profile (){
    return (
        <>
        <div className='container'>
            <div className='wrapper'>
                <div className='brand'>
                    <div className='first'>Welcome</div>
                    <div className='last'>to My Profile</div>
                </div>
                <ul className='navigation'>
            <Link to="/">
                    <li>Home Page</li>
            </Link>
                    <li>Skills</li>
                    <li>Project</li>
                </ul>
            </div>
            <div className='content'>
                <h1>Hello!</h1>
                <h2 className='afdal'>I'am Muh. Afdal Maulana Said</h2>
                <h2 className='jobs'>Junior Web Development</h2>
                <h3 className='socialmedia'>My Social Media :</h3>
            </div>
            <div className='mysocialmedia'>
            <div className='personal'><img src={igPic} alt=""/><img src={linkPic} alt=""/></div>
            </div>
            <div className='strength'>
                <div className='mystrength'>My Strength</div>
                <div className='listStrength'>
                    <div className='ambisi'>Ambisi
                    <p className='isiAmbisi'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit</p>
                    </div>
                    <div className='presisi'>Precision
                    <p className='isiPresisi'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit</p>
                    </div>
                    <div className='workHard'>Work Hard
                    <p className='isiWork'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit</p>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <Link to="/about">
                <h3>About</h3>
                </Link>
                <h3>Home Page</h3>
        </nav>
    </>
  );
}