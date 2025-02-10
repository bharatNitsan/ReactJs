import Logo from './Logo';
import Nav from './Nav';


function Header() {
    return (
        <header>
            <div className="main-header">
                <div className="container">
                    <Logo />
                    <div className="nav-wrapper">
                        <div className="navigation">
                            {/* <Nav /> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;