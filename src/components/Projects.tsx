import '../App.css';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-javascript';

import JavaScriptLogo from '../images/javascript.png';
import cssLogo from '../images/css.png';
import video from '../movies/Recording 2024-05-17 141034.mp4';
import React from 'react';
import { jsCodeHackerNews } from '../components/Highlights';
import { cssCodeHackerNews } from '../components/Highlights';


class Codeblock extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <pre>
                <code className="language-javascript language-css">{this.props.code}</code>
            </pre>
        );
    }
}

export default function Projects() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="main--div--projects">
            <div className="first--project">
                <div className="left--content--first--project">
                    <p className="mb-4 codding--paragraph">
                        <span className="codding--paragraph span--coding--projects">snippet</span> of my latest Projects
                    </p>
                    <div className="js--content">
                        <div className="programming--header">
                            <div className="programming--dot orange--dot"></div>
                            <div className="programming--dot yellow--dot"></div>
                            <div className="programming--dot green--dot"></div>
                            <p className="programming--title">
                                Personal--Projects/ components/ 
                                <img className="projects--header--logo" src={JavaScriptLogo} alt="JavaScript Logo" /> store.js
                            </p>
                        </div>
                        <Codeblock code={jsCodeHackerNews} />
                    </div>
                    <div className="js--content">
                        <div className="programming--header">
                            <div className="programming--dot orange--dot"></div>
                            <div className="programming--dot yellow--dot"></div>
                            <div className="programming--dot green--dot"></div>
                            <p className="programming--title">Personal--Projects/ components/ 
                                <img className="projects--header--logo" src={cssLogo} alt="Css Logo" />style.css</p>
                        </div>
                        <Codeblock code={cssCodeHackerNews} />
                    </div>
                </div>
                <div className="right--content--first--project">
                    <div className="ss--project">
                        <div className="video--project">
                            <video width="1200" controls>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="projects--description">
                        <p className="text--projects--description">dadasds</p>
                        <a href="#" className="git--btn">see it on Git .</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
