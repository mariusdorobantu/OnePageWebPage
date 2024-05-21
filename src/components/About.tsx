import '../App.css';
import code from '../images/code.jpg';
import office from '../images/office.jpg';

export default function About() {
    return (
        <div>
            <div className="about--me">
                    <p className="text--about--me">Simple can be harder than complex,you have to work hard to get your thinking clean to make it simple ⚈</p>
                    <div className="img--container--about--me">
                        <img className="code--img--about--me"
                             src={code} 
                             alt="Programming codes img ..."></img>
                        <img className="office--img--about--me"
                             src={office} 
                             alt="Minimalist desk with a laptop img ..."></img>
                    </div>
            </div>
        </div>
    )
}