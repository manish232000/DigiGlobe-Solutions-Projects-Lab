import NavBar from './NavBar';
import './Header.css';

function Header(){
    return (
        <header className="header">
            <a className="header-brand primary-font" href="#">@neel.dholiya</a>
            <NavBar />
        </header>
    );
}

export default Header;