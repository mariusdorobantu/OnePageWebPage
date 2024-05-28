import ResumeProfileImg from '../images/iamhim.png';

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
                        <p>Decathlon</p>
                        <p>bla bla bla</p>
                    </div>
                    <div className="resume--tibazo--experience resume--ex">
                        <p>Learning</p>
                        <p>bla bla bla</p>
                    </div>
                    <div className="resume--osf--experience resume--ex">
                        <p>OSF</p>
                        <p>bla bla bla</p>
                    </div>
                    <div className="resume--osf--experience resume--ex">
                        <p>Tibazo</p>
                        <p>bla bla bla</p>
                    </div>
                </div>

                <div className="resume--skills"></div>
                <div className="resume--studies"></div>
            </div>
        </div>
    )
}