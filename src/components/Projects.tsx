import React from 'react';
import '../App.css';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-markup.js';
import 'prismjs/components/prism-javascript';
import { projects, jsCodeHackerNews, cssCodeHackerNews } from './data/Highlights-data';

export default function Projects() {
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
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div id="main--div--projects">
            {projects.map((project, index) => (
                <div className="first--project">
                    <div className="left--content--first--project">
                        {index === 0 && (
                            <p className="mb-4 codding--paragraph">
                                <span className="codding--paragraph span--coding--projects">snippet</span> of my latest Projects
                            </p>
                        )}
                        <div className="js--content">
                            <div className="programming--header">
                                <div className="programming--dot orange--dot"></div>
                                <div className="programming--dot yellow--dot"></div>
                                <div className="programming--dot green--dot"></div>
                                <p className="programming--title">
                                    {project.JsTitle}
                                    <img className="projects--header--logo" src={project.JsLogo} alt="JavaScript Logo" /> store.js
                                </p>
                            </div>
                            <Codeblock code={jsCodeHackerNews} />
                        </div>
                        <div className="js--content">
                            <div className="programming--header">
                                <div className="programming--dot orange--dot"></div>
                                <div className="programming--dot yellow--dot"></div>
                                <div className="programming--dot green--dot"></div>
                                <p className="programming--title">
                                    {project.CssTitle} 
                                    <img className="projects--header--logo" 
                                        src={project.CssLogo} 
                                        alt="Css Logo" 
                                    />style.css    
                                </p>
                            </div>
                            <Codeblock code={cssCodeHackerNews} />
                        </div>
                    </div>
                    <div className="right--content--first--project">
                        <div className="ss--project">
                            <div className="video--project">
                                <video width="1200" controls>
                                    <source src={project.Video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="projects--description">
                            <div className="text--projects--description">
                                <p className="">
                                    {project.ProjectDescriptionTitle}
                                </p>
                                <p className="">
                                    {project.ProjectDescriptionContent}
                                </p>
                            </div>
                            <a href={project.ProjectUrl} 
                            className="bnt--blue--standard projects--btn" 
                            target="_blank">see it on Git .
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

