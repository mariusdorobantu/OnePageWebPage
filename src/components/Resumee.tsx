import DecathlonLogo from '../images/dktlogo.jpg';
import OsfLogo from '../images/osflogo.png';
import TibazoLogo from '../images/tibazoimg.png';
import LearningLogo from '../images/studylogowhite.jpg';
import LearningLogoYellow from '../images/studylogoyellow.jpg';

export default function Resume() {
    return (
        <div id="resume--wrapper">
            <div className="resume--main--container">
                <div className="resume--profile--img"></div>
                <div className="resume--header--right--content">
                    <p className="resume--myjob">
                         <span className="original-text ala">Frontend-developer</span>
                    </p>
                    <p className="resume--header">Dorobantu Marius</p>
                    <p className="resume--content">
                        Fusce tempor magna mi, non egestas velit ultricies nec. 
                        Aenean convallis, risus non condimentum gravida, odio mauris 
                        ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet 
                        lacinia urna, a placerat sapien pretium eu.
                    </p>
                    <button type="button" className="bnt--blue--standard experience--btn btn--resume">show Experience</button>
                    <button className="bnt--blue--standard skills--btn btn--resume">show Resume</button>
                    <button className="bnt--blue--standard studies--btn btn--resume">show Studies</button>
                </div>
            </div>
            {/* <p className="resume--experience--header--text">What i did/ do</p> */}
            <div className="resume--body--container">
                <div className="resume--experience">
                    <div className="resume--decathlon--experience resume--ex">
                        <div className="resume--experience--head">
                            <img className="resume--logo"src={TibazoLogo}></img>
                            <p className="resume--experience--header">Tibazo</p>
                        </div>
                        <p className="resume--experience--role">Frontend Developer | September 2023 - Present</p>
                        <p className="resume--experience--content">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC,
                             making it over 2000 years old. Richard McClintock, a Latin professor 
                             at Hampden-Sydney College in Virginia, looked up one of the more 
                             obscure Latin words, consectetur.
                        </p>
                    </div>
                    <div className="resume--tibazo--experience resume--ex">
                        <div className="resume--experience--head">
                            <img className="resume--logo"src={OsfLogo}></img>
                            <p className="resume--experience--header">OSF</p>
                        </div>
                        <p className="resume--experience--role">Salesforce Commerce Cloud Front-end | June 2023 - August 2023</p>
                        <p className="resume--experience--content">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC,
                             making it over 2000 years old. Richard McClintock, a Latin professor 
                             at Hampden-Sydney College in Virginia, looked up one of the more 
                             obscure Latin words, consectetur.
                        </p>
                    </div>
                    <div className="resume--osf--experience resume--ex">
                        <div className="resume--experience--head">
                            <img className="resume--logo"src={DecathlonLogo}></img>
                            <p className="resume--experience--header">Decathlon</p>
                        </div>
                        <p className="resume--experience--role">Store manager | April 2018 - January 2023 | 5 yrs 5 mos |</p>
                        <p className="resume--experience--content">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC,
                             making it over 2000 years old. Richard McClintock, a Latin professor 
                             at Hampden-Sydney College in Virginia, looked up one of the more 
                             obscure Latin words, consectetur.
                        </p>
                    </div>
                    <div className="resume--osf--experience resume--ex">
                         <div className="resume--experience--head">
                            <img className="resume--logo"src={LearningLogo}></img>
                            <p className="resume--experience--header">Study period</p>
                        </div>
                        <p className="resume--experience--role">Store manager | January 2023 - September 2023 | 7 mos |</p>
                        <p className="resume--experience--content">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC,
                             making it over 2000 years old. Richard McClintock, a Latin professor 
                             at Hampden-Sydney College in Virginia, looked up one of the more 
                             obscure Latin words, consectetur.
                        </p>
                    </div>
                </div>

                <div className="resume--skills"></div>
                <div className="resume--studies"></div>
            </div>
        </div>
    )
}