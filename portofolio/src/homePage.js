import {Link} from 'react-router-dom'
import image from './image/fanny.png'
import igPic from './image/instagram.png'
import linkPic from './image/linked.png'

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
                <li className='profile'>Profile</li>
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
          <h1><span className='software'>Software</span><span className='house'>House</span></h1>
          <button className='button1'>Read More</button>
          <img src={image} alt="" className='foto'/>
        </div>
        <div className='halBawah'>
          <div className='companyGoals'>
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
              <div className='service'>
                <div className='webDevelopment'>
                  <h1>Web Development</h1>
                  <figure>
                  <img width="120" height="120" src="https://img.icons8.com/plasticine/100/web-design.png" alt="web-design"/>
                  </figure>
                  <p><button>MORE</button></p>
                </div>
                <div className='digitalMarketing'>
                  <h1>Digital Marketing</h1>
                  <figure>
                  <img width="120" height="120" src="https://img.icons8.com/fluency/100/marketing.png" alt="marketing"/>
                  </figure>
                  <p><button>MORE</button></p>
                </div>
                <div className='uxUi'>
                  <h1>UX/UI Design</h1>
                  <figure>
                  <img width="120" height="120" src="https://img.icons8.com/office/100/windows10-personalization.png" alt="windows10-personalization"/>
                  </figure>
                  <p><button>MORE</button></p>
                </div>
                <div className='android'>
                  <h1>Android Application</h1>
                  <figure>
                  <img width="120" height="120" src="https://img.icons8.com/doodle/100/android-studio--v3.png" alt="android-studio--v3"/>
                  </figure>
                  <p><button>MORE</button></p>
                </div>
              </div>
                <div className='thanks'>Thank you for visiting us
                <h1>we always ready to wait your call</h1>
                </div>
              <div className='footer'>
                <div className='contactUs'>
                  Contact us on:
                  <div className='listContact'>
                    <div className='instagram'><img src={igPic} alt=""/><img src={linkPic} alt=""/></div>
                  </div>
                </div>
                <div className='copyright'>copyright &copy; 2023 Muh.Afdal Maulana Said :)</div>
              </div>
      </div>
        </>
    )
}