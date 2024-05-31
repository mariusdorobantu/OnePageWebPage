import DecathlonLogo from '../images/dktlogo.jpg';
import OsfLogo from '../images/osflogo.png';
import TibazoLogo from '../images/tibazoimg.png';
import LearningLogo from '../images/studylogowhite.jpg';
import {skills, Skill} from './data/Resume-data';
import React, {useState, useEffect} from 'react';

export default function Resume() {

    const textArray = [
        'Frontend Dev.',
        'Web designer',
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slide, setSlide] = useState(true);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSlide(false);
        setTimeout(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % textArray.length);
          setSlide(true);
        }, 500);
      }, 1500); 
  
      return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="resume--wrapper">
            <div className="resume--main--container">
                <div className="resume--profile--img"></div>
                <div className="resume--header--right--content">
                    <p id="resume--myjob" className={slide ? 'slide-in' : 'slide-out'}>
                        {textArray[currentIndex]}
                    </p>
                    <p className="resume--header">Dorobantu Marius</p>
                    <p className="resume--content">
                        Fusce tempor magna mi, non egestas velit ultricies nec. 
                        Aenean convallis, risus non condimentum gravida, odio mauris 
                        ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet 
                        lacinia urna, a placerat sapien pretium eu.
                    </p>
                    <button type="button" className="bnt--blue--standard experience--btn btn--resume">show Experience</button>
                    <button className="bnt--blue--standard studies--btn btn--resume">show Studies</button>
                    <button className="bnt--blue--standard skills--btn btn--resume">show Skills</button>
                </div>
            </div>
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
                            <p className="resume--experience--header">OSF Digital</p>
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
                <div className="resume--wrapper">
                    <div className="resume--skills">
                        <div className="soft--skills--wrapper">
                            <div className="soft--skills--container">

                            </div>
                        </div>
                        {skills.map((skill, index) => (
                            <div className="hard--skills--programming" key={index}>
                                <img 
                                    src={skill.ImageUrl}
                                    alt=""
                                    className="hard--skills--img">
                                </img>
                                <p className="hard--skills--text">
                                    {skill.Description}
                                </p>
                                <p className="hard--skills--string">
                                    {skill.TextString}
                                </p>
                                <p className="float--text">
                                    {skill.SkillLevel}
                                </p>
                            </div>
                        ))}
                        <div className="funny--skills"></div>
                    </div>
                </div>
                <div className="resume--studies"></div>
            </div>
        </div>
    )
}