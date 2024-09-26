const Home = () => {
    return (
        <main>
            <section className="container-fluid home-container">
                <div className="d-none d-lg-block block-color"></div>
                <div className="row home-details-container">
                    <div className="col-lg-4 d-none d-lg-block hero-img"></div>
                    <div className="col-lg-8 col-12 hero-details-section">
                        <div className="hero-details">
                            <div>
                                <img src="./assets/img/hero3.jpg" className="img-fluid d-none d-sm-block d-lg-none secondary-hero-img" />
                                <h1>Ibrahim Hossain<br /><span id="hero-subtitle">WEB Developer</span></h1>
                                <p className="hero-info-pera">I'm a Bangladeshi front‑end developer focused on
                                    crafting
                                    clean & user‑friendly
                                    experiences, I am passionate about building excellent application that improves the
                                    lives
                                    of
                                    those
                                    around me.</p>
                                <div className="row">
                                    <div className="col-12">
                                        <a target="_blank"
                                            href="https://drive.google.com/file/d/1cVVt57FXd3bKVXZyzUltwNDNS9PcbHHz/view?usp=sharing"
                                            className="mt-2 mb-4 hero-btn rounded-pill" rel="noreferrer">
                                            Resume
                                            <i className='bx bx-download'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;