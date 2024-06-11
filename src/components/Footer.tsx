
import logo from '../../public/images/dbtmariusdev.png';
import linkedin from '../../public/images/linkedin.png';
import facebook from '../../public/images/facebook.png';
import gitHub from '../../public/images/github.png';
import x from '../../public/images/twitter.png';
import youtube from '../../public/images/youtube.png';
import yahoo from '../../public/images/yahoo.png';

export default function Footer() {
    return (
        <>
            <div className="footer--container">
                <div className="left--footer--content">
                    <p className="footer--header--text">Discover me</p>
                    <img src={logo} 
                        alt="Logo Dorobantu Marius developer" 
                        className=""> 
                    </img>
                    <p className="left--footer--text">
                        Everybody deserves a chance!
                        When you switch your career, you are now a junior, a beginner.
                        <br></br><br></br>With time and dedication, like the famous quote say: IMPOSSIBLE IS NOTHING! 
                    </p>
                </div>
                <div className="center--footer--content">
                    <p className="footer--header--text">Find me </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86951.99307910787!2d21.85487284269101!3d47.0745651286607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474647e368762353%3A0x1b55a486d65d5344!2sOradea!5e0!3m2!1sro!2sro!4v1716364636661!5m2!1sro!2sro" 
                            width="400" 
                            height="300" 
                            loading="lazy">
                    </iframe>
                </div>
                <div className="right--footer--content">
                    <p className="footer--header--text">Follow me on </p>
                    <ul>
                        <li>
                            <a className="social--media--link" 
                               href="https://www.linkedin.com/in/marius-dorobantu-07986a129/" 
                               target="_blank">     
                               <img src={linkedin} 
                                     alt="Linkedin logo" 
                                     className="footer--social--media--icons">
                               </img>
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a className="social--media--link" 
                               href="https://www.facebook.com/marius.massy.1" 
                               target="_blank">
                               <img src={facebook} 
                                     alt="Facebook logo" 
                                     className="footer--social--media--icons">
                               </img>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a className="social--media--link" 
                               href="https://github.com/mariusdorobantu" 
                               target="_blank">
                               <img src={gitHub} 
                                     alt="GitHub logo" 
                                     className="footer--social--media--icons">
                               </img>
                                Github
                            </a>
                        </li>
                        <li>
                            <a className="social--media--link" 
                               href="#" 
                               target="_blank">
                               <img 
                                    src={x} 
                                    alt="X logo" 
                                    className="footer--social--media--icons">
                               </img>
                                X    
                            </a>
                        </li>
                        <li>
                            <a className="social--media--link"
                               href="https://www.youtube.com/channel/UCt7VjEtgjlQ5JeaSAVBBYcA"
                               target="_blank">
                               <img 
                                    src={youtube} 
                                    alt="Youtube logo" 
                                    className="footer--social--media--icons">
                               </img>
                               Youtube
                            </a>
                        </li>
                        <li>
                            <a className="social--media--link"
                               href="mailto:marius.dorobantu@yahoo.com"
                               target="_blank">
                               <img 
                                    src={yahoo} 
                                    alt="Youtube logo" 
                                    className="footer--social--media--icons">
                               </img>
                               Yahoo mail
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="footer--base--text">
                <p>@ Copyright 2024 Dorobantu Marius. All rights reserved</p>
                <ul className="policy--list">
                    <li className="policy--list-item"><a href="#">Terms and conditions</a></li>
                    <li className="policy--list-item"><a href="#">Privacy policy</a></li>
                    <li className="policy--list-item"><a href="#">Cookies</a></li>
                </ul>
            </div>
        </>
    )
}