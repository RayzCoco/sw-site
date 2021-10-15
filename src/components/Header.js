import { useState } from "react";
import LazyLoad from "react-lazyload";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isMenuOpen, openMenu }) => {
    const [menus, setMenus] = useState([
        {id: 1, title: 'Work', path: '/'},
        {id: 2, title: 'Contact', path: '/contact'}
    ])

    return (
        <>
            <header className="container mx-auto z-20 relative">
                <div className="px-6 py-8 flex justify-between items-center md:py-10">
                    <LazyLoad classNamePrefix="loaded">
                        <h1 className="text-3xl font-bebas">
                            <Link to="/">0571 STUDIO</Link>
                        </h1>
                    </LazyLoad>
                    {/* Mobile Menu Burger */}
                    <LazyLoad classNamePrefix="loaded">
                        <div className={`burger-box md:hidden ${isMenuOpen ? "opened" : ""}`} onClick={() => openMenu()}>
                            <div className="burger-inner">
                                <div className="burger-top"></div>
                                <div className="patty"></div>
                                <div className="burger-bottom"></div>
                            </div>
                        </div>
                    </LazyLoad>
                    {/* Desktop Menu */}
                    <div className="text-lg hidden md:flex">
                        { menus.map((menu) => (
                            <div className="mr-4 last:mr-0" key={menu.id}>
                                <LazyLoad classNamePrefix="loaded">
                                    <NavLink activeClassName="active-nav" className="pb-px" exact to={`${menu.path}`}>{menu.title}</NavLink>
                                </LazyLoad>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
            {/* Mobile Menu */}
            <div className={`mobile-menu bg-white absolute top-0 left-0 z-10 w-full h-full md:hidden ${isMenuOpen ? "opened" : ""}`}>
                <div className="mobile-menu-container flex flex-col justify-center items-center w-full flex-grow flex-shrink-0 relative min-h-full">
                    { menus.map((menu) => (
                        <div className="px-5 w-full text-center" key={menu.id}>
                            <Link className="text-3xl my-3 mx-5 block" to={`${menu.path}`}>{menu.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
 
export default Header;