import {Link} from 'react-router-dom'
import image from './image/fanny.png'

export default function HomePage (){
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <div className='container'>
        <div className='wrapper'>
          <div className='brand'>
            <div className='first'>Hello</div>
            <div className='last'>World!</div>
          </div>
              <ul className='navigation'>
                <Link to='/profile'>
                <li className='about'>About</li>
                </Link>
                <Link to='/about'>
                <li className='contact'>Contact</li>
                </Link>
                <li>Skills</li>
                <li>Project</li>
              </ul>
        </div>
        <div className='content'>
          <h2 className='welcome'>Welcome to <span className='curly'>Curly Bracket</span></h2>
          <h1>Software House</h1>
          <button className='button1'>Read More</button>
          <img src={image} alt="" className='foto'/>
        </div>
        <div className='halBawah'>
          <div className='job'>
            <p>Company goals</p>
            <div className='goals'>
              <div className='goals1'>Client Happiness
              <h1 className='happy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit.</h1>
              </div>
              <div className='goals2'>On Time
              <h2 className='time'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit.</h2>
              </div>
              <div className='goals3'>Trusted
              <h2 className='trust'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='service'>Our Service</div>
          <div className='wd'>Full Stack Web Development
          <h3 className='fs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit.</h3>
          </div>
          <div className='ux'>User Interface / User Experience</div>
          {/* <h3 className='ui'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit.</h3> */}
          <div className='dm'>Digital Marketing</div>
        </div>
      </div>
        </>
    )
}