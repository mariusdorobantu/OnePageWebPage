import '../App.css';
import logo from '../images/logoDMI.png';

export default function NavBar() {
    return (
      <>  
        <header>
            <div className="nav--el">
                <img className="logo--nav"
                        src={logo} 
                        alt="Logo DMI" 
                />
                <div className="menu--nav">
                    <a href="#">hero Section.</a>
                    <a href="#">codding Journey.</a>
                    <a href="#">my Projects.</a>
                    <a href="#">books to Inspire.</a>
                </div>
                <button className="btn--nav">find Me.</button>
            </div>
        </header>
      </>
  )
}
