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
              <div className='footer'>
                <div className='judulFooter'>Our Service</div>
                <div className='service'>
                  <div className='service1'>Web Development
                  <div className='webDevelopment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit</div>
                  </div>
                  <div className='service2'>Digital Marketing
                  <div className='digitalMarketing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit</div>
                  </div>
                  <div className='service3'>Desain UX/UI
                  <div className='uxui'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit</div>
                  </div>
                  <div className='service4'>Android Development
                  <div className='android'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis delectus voluptate tenetur natus eveniet, sunt optio quam exercitationem praesentium ullam id pariatur tempora ad porro ipsa officiis, eius reprehenderit</div>
                  </div>
                </div>
                <div className='thanks'>Thank you for visiting us
                <h1>we always ready to wait your call</h1>
                </div>
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