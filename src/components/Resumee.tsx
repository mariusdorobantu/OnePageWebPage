import DecathlonLogo from '../../public/images/dktlogo.jpg';
import OsfLogo from '../../public/images/osflogo.png';
import TibazoLogo from '../../public/images/tibazoimg.png';
import LearningLogo from '../../public/images/studylogowhite.jpg';
import {skills, Skill, funnies, Funny} from './data/Resume-data';
import { educations } from './data/Resume-education-data';
import React, {useState, useEffect} from 'react';
import CountUp from '../components/Intersection-observer-logic';

export default function Resume() {
    const textArray = [
        'Frontend Dev.',
        'Web designer',
    ];

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
                    <p 
                        id="resume--myjob" 
                        className={slide ? 'slide-in' : 'slide-out'}>
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
                            <img 
                                className="resume--logo" 
                                src={TibazoLogo} 
                                alt="Tibazo Logo">
                            </img>
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
                            <img 
                                className="resume--logo" 
                                src={OsfLogo} 
                                alt="OSF Logo">
                            </img>
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
                            <img 
                                className="resume--logo" 
                                src={DecathlonLogo} 
                                alt="Decathlon Logo">
                            </img>
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
                            <img 
                                className="resume--logo" 
                                src={LearningLogo} 
                                alt="Learning Logo">
                            </img>
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
                    </div>
                    <div className="funny--skills">
                        {funnies.map((fun, index) => (
                            <div className="resume--funny" key={index}>
                                <p className="funny--skills--header">
                                    <CountUp
                                        targetNumber={fun.Timer} 
                                        duration={10000}
                                    />

                                </p>
                                <p className="funny--skills--content">{fun.Description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="resume--wrapper">
                        <div className="resume--studies--container">
                            {educations.map((education, index) => (
                                    <div className="resume--studies">
                                            <img 
                                                src={education.CompanyLogoUrl}
                                                className="resume--studies--logo"
                                                alt="">                                    
                                            </img>
                                                <div className="resume--studies--header" key={index}>
                                                        <h4 className="resume--studies--header--title">{education.HeaderText}</h4>
                                                        <p className="resume--studies--header--text">{education.HeaderParagraph}</p>
                                                        <p className="resume--studies--header--subtext">{education.HeaderSubtext}</p>
                                                        <p className="introduction--text">
                                                            {education.BodyBasicText}
                                                            {education.CssLogoUrl && <img src={education.CssLogoUrl} className="frameworks--logo" alt="CSS Logo" />}
                                                            {education.HtmlLogoUrl && <img src={education.HtmlLogoUrl} className="frameworks--logo" alt="HTML Logo" />}
                                                            {education.MySqlLogoUrl && <img src={education.MySqlLogoUrl} className="frameworks--logo" alt="MySQL Logo" />}
                                                            {education.JavaScriptLogoUrl && <img src={education.JavaScriptLogoUrl} className="frameworks--logo" alt="JS Logo" />}
                                                            {education.ReactLogoUrl && <img src={education.ReactLogoUrl} className="frameworks--logo" alt="JS Logo" />}
                                                        </p>
                                                        <p className="introduction--text">
                                                            {education.BodyIntermediateText}
                                                            {education.IntermediateHtmlLogoUrl && <img src={education.IntermediateHtmlLogoUrl} className="frameworks--logo" alt="CSS Logo" />}
                                                            {education.IntermediateCSSLogoUrl && <img src={education.IntermediateCSSLogoUrl} className="frameworks--logo" alt="HTML Logo" />}
                                                            {education.IntermediateJavaScriptUrl && <img src={education.IntermediateJavaScriptUrl} className="frameworks--logo" alt="HTML Logo" />}
                                                            {education.IntermediateReactUrl && <img src={education.IntermediateReactUrl} className="frameworks--logo" alt="JS Logo" />}
                                                        </p>
                                                        
                                                        <p className="resume--studies--body--text">
                                                        {education.BodyMainText}
                                                        </p>
                                                        <ul className="ul--education">
                                                            <p className="skills--text">Skills:</p> 
                                                            <li 
                                                                className="education--ul">
                                                                    {education.Skill1 && ` • ${education.Skill1}`}
                                                                    {education.Skill2 && ` • ${education.Skill2}`}
                                                                    {education.Skill3 && ` • ${education.Skill3}`}
                                                                    {education.Skill4 && ` • ${education.Skill4}`}
                                                                    {education.Skill5 && ` • ${education.Skill5}`}
                                                                    {education.Skill6 && ` • ${education.Skill6}`}
                                                                    {education.Skill7 && ` • ${education.Skill7}`}
                                                                    {education.Skill8 && ` • ${education.Skill8}`}
                                                                    {education.Skill9 && ` • ${education.Skill9}`}
                                                                    {education.Skill10 && ` • ${education.Skill10}`}
                                                                    {education.Skill11 && ` • ${education.Skill11}`}
                                                                    {education.Skill12 && ` • ${education.Skill12}`}
                                                                    {education.Skill13 && ` • ${education.Skill13}`}
                                                                    {education.Skill14 && ` • ${education.Skill14}`}
                                                                    {education.Skill15 && ` • ${education.Skill15}`}
                                                            </li>
                                                        </ul>
                                                        {/* <div>SS / Video / etc. </div> */}
                            </div>
                                        </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}