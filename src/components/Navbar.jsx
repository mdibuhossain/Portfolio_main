import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header id="header" className="header">
                <ul className="d-none d-lg-block primary-nav">
                    <li className="nav-icon-item">
                        <NavLink to="/">
                            <i className='bx bxs-home nav-icon'></i>
                            <h5 className="nav-sub-title">HOME</h5>
                        </NavLink>
                    </li>
                    <li className="nav-icon-item">
                        <NavLink to="/about">
                            <i className='bx bxs-user nav-icon'></i>
                            <h5 className="nav-sub-title">ABOUT</h5>
                        </NavLink>
                    </li>
                    <li className="nav-icon-item">
                        <NavLink to="/projects">
                            <i className='bx bxs-briefcase nav-icon'></i>
                            <h5 className="nav-sub-title">PROJECTS</h5>
                        </NavLink>
                    </li>
                    <li className="nav-icon-item">
                        <NavLink to="/contact">
                            <i className='bx bxs-message nav-icon'></i>
                            <h5 className="nav-sub-title">CONTACT</h5>
                        </NavLink>
                    </li>
                </ul>
            </header>
            <section className="secondary-navbar d-lg-none d-block">
                <nav className="navbar">
                    <div className="container-fluid mx-2">
                        <button className="secondary-navbar-toggler navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <a className="secondary-nav-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                aria-controls="offcanvasExample"><i className='bx bx-menu-alt-left secondary-nav-ico'></i></a>
                        </button>
                        <div className="offcanvas offcanvas-end myOffcanvas-edit" tabIndex="-1" id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel">
                            <div className="myoffcanvas-header bg-color">
                                <i className="fas fa-times" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                            </div>
                            <div className="offcanvas-body bg-color">
                                <div className="sec-nav">
                                    <NavLink to=""><span id="home">home</span></NavLink>
                                    <NavLink to="about"><span id="about">about</span></NavLink>
                                    <NavLink to="projects"><span id="portfolio">portfolio</span></NavLink>
                                    <NavLink to="contact"><span id="contact">contact</span></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Navbar;