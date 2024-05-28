import { useEffect, useState } from 'react';
import '../App.css';
import logo from '../images/dbtmariusdev.png';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false)
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div id="nav--bar--el">
            <header className={`nav--bar--el ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav--el">
                    <a href="#nav--bar--el">
                        <img className="logo--nav"
                                src={logo} 
                                alt="Logo DMI" 
                        />
                    </a>
                    <div className="menu--nav">
                        <a href="#nav--bar--el" className="nav--anchors">hero Section.</a>
                        <a href="#codding--journey--section" className="nav--anchors">coding Journey.</a>
                        <a href="#main--div--projects" className="nav--anchors">my Projects.</a>
                        <a href="#resume--wrapper" className="nav--anchors">resume.</a>
                        <a href="#books--wrapper" className="nav--anchors">books to Inspire.</a>
                    </div>
                    <button className="bnt--blue--standard">text Me.</button>
                </div>
            </header>
        </div> 
  )
}
