import {Link} from 'react-router-dom'
import igPic from './image/instagram.png'
import linkPic from './image/linked.png'
export default function Profile (){
    return (
        <>
        <div className='containerProfile'>
            <div className='wrapperProfile'>
                <div className='brand'>
                    <div className='firstProfile'>Welcome</div>
                    <div className='lastProfile'>to My Profile</div>
                </div>
                <ul className='navigation'>
            <Link to="/">
                    <li>Home</li>
            </Link>
                    <li>Skills</li>
                    <li>Project</li>
                </ul>
            </div>
            <div className='content'>
                <h1 className='hellow'>Hello!</h1>
                <h2 className='afdal'>I'am Muh. Afdal Maulana Said</h2>
                <h2 className='jobs'>Junior Web Development</h2>
                <h3 className='socialmedia'>My Social Media :</h3>
            </div>
            <div className='mysocialmedia'>
            <div className='personal'>
                <Link to="https://www.instagram.com/afdalmaulanaaa/" target='_blank'>
                <img src={igPic} alt="" className='instagramAfdal'/></Link>
                <Link to="https://www.linkedin.com/in/muhafdalmaulanasaid/" target='_blank'>
                <img src={linkPic} alt="" className='linkedAfdal'/></Link>
                </div>
            </div>
            <div className='strength'>
                <div className='mystrength'>My Strength</div>
                <div className='listStrength'>
                    <div className='ambisi'>Ambition
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
            <div className='skillProfile'>Skills</div>
            <div className='wrapperSkill'>
                <div className='javascriptProfile'>
                    <figure>
                    <img width="140" height="140" src="https://img.icons8.com/color/240/javascript--v1.png" alt="javascript--v1" className='javascriptProfilepic'/>
                    <figcaption className='captionJavascript'>Javascript</figcaption>
                    </figure>
                    </div>
                <div className='htmlProfile'>
                <figure>
                <img width="140" height="140" src="https://img.icons8.com/color/240/html-5--v1.png" alt="html-5--v1" className='htmlProfilepic'/>
                <figcaption className='captionHtml'>HTML</figcaption>
                </figure>
                </div>
                <div className='cssProfile'>
                <figure>
                <img width="140" height="140" src="https://img.icons8.com/color/240/css3.png" alt="css3"/>
                <figcaption className='captionCss'>CSS</figcaption>
                </figure>
                </div>
                <div className='githubProfile'>
                <figure>
                <img width="140" height="140" src="https://img.icons8.com/3d-fluency/140/github.png" alt="github"/>
                <figcaption className='captionGithub'>GitHub</figcaption>
                </figure>
                </div>
                <div className='reactProfile'>
                <figure>
                <img width="140" height="140" src="https://img.icons8.com/external-others-amoghdesign/96/external-react-native-soleicons-fill-vol-1-others-amoghdesign.png" alt="external-react-native-soleicons-fill-vol-1-others-amoghdesign"/>
                <figcaption className='captionReact'>ReactJs</figcaption>
                </figure>
                </div>
                <div className='nodeProfile'>
                <figure>
                <img width="140" height="140" src="https://img.icons8.com/color/140/nodejs.png" alt="nodejs"/>
                <figcaption className='captionNode'>NodeJs</figcaption>
                </figure>
                </div>
            </div>
            <div className='garis'></div>
            <div className='aboutProfile'>A bit about me
            <h1>Who am I ?</h1>
            <p>Graduated from the Indonesian Muslim University Makassar majoring in Informatics Engineering with a Bachelor of Computer (S.Kom) degree and Microsoft Technology Associate (MTA) with a GPA of 3.51 / 4.00. Born in Belawa, Wajo, on July 26, 1998. Active and involved in several organizational activities on campus and outside campus. I am a punctual person, persuasive in communicating, objective in assessing things, besides that I also think critically, creatively and dynamically. I can work under pressure and easily recognize new environments, can also work with a team or individually. I like to learn something new and still want to keep learning.</p>
            </div>
            <div className='afdalJob'>
            <div className='afdalWeb'>
                <figure>
                <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/web.png" alt="web"/> 
                <figcaption>WEB DESIGN</figcaption>
                </figure>
                <Link to="" target='_blank'>
                    <p>MORE</p>
                    </Link>
                </div>
            <div className='afdalApp'>
            <figure>
            <img width="100" height="100" src="https://img.icons8.com/ios/100/laptop-coding.png" alt="laptop-coding"/>
                <figcaption>SOFTWARE</figcaption>
                </figure>
                <Link to="" target='_blank'>
                    <p>MORE</p>
                    </Link>
            </div>
            </div>
        <div className='education'>
            <div className=''>
            <h3>Education</h3>
            <h2>Smk Negeri 05 Makassar</h2>
            <p>2013 - 2017 Teknik Informatika</p>
            <h2>Universitas Muslim Indonesia</h2>
            <p>2017-2022 Teknik Informatika</p>
            </div>
            <div className='course'>Course
            <h2>Purwadhika Digital School</h2>
            <p>Fullstack Web Development</p>
            <p>2023</p>
            </div>
        </div>
        <div className='contactMe'>
            <div className='projectMe'>
                <h1>Do you have any project? Let's talk</h1>
                <div className='projectFor'>
                <div>Design For</div>
                <p>Company Profile & Web</p>
                </div>
                <div className='projectContact'>
                <div>Contact Me</div>
                <p>+62 81-2421-4977</p>
                </div>
                <div className='projectEmail'>
                <div>Email Me</div>
                <p>afdalmaulanaaa@gmail.com</p>
                </div>
            </div>
            <div className='inputForm'>
                <form>
                <input type="text" placeholder='Enter your name'className='nameInput'/>
                <input type="email" placeholder='Enter a valid email address' className='emailInput'/>
                <textarea placeholder='Enter your message' className='areaInput'/>
                <p>
                    <button className='sendButton'>Submit</button>
                    </p>
                </form>
                
            </div>
        </div>
        </div>

    </>
  );
}