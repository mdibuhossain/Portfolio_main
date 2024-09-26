import './contact.css';

const Contact = () => {
    return (
        <>
            <h1 className="position-absolute top-0 end-0 mt-4 me-4 d-block d-sm-none top-page-title">GET IN <span>TOUCH</span></h1>
            <section className="container-fluid">
                <div className="container text-center page-title d-sm-block d-none">
                    <h1>TOUCH</h1>
                    <h2>GET IN <span>TOUCH</span></h2>
                </div>
                <div className="container show-case-content">
                    <div className="contact">
                        {/* <div className="contact-status">
                            <p>
                                I am interested in working with any company that thinks my skill
                                will be helpful for them. If you are looking for someone like me,
                                please let me know. Or you can just 'say hi' to me.
                            </p>
                            <div>
                                <Button
                                    title="Contact Me"
                                    mt="25px"
                                    bgColor="#00cf5d"
                                    color="#fff"
                                    link="mailto:zonayedpca@gmail.com"
                                />
                            </div>
                        </div> */}
                        <div className="contact-details">
                            <ul>
                                <li>
                                    <h5>Email</h5>
                                    <p>
                                        ibuhossain3@gmail.com <span>(Recommended)</span>
                                    </p>
                                </li>
                                {/* <li>
                                    <h5>Skype</h5>
                                    <p>
                                        zonayedpca <span>(Always Available)</span>
                                    </p>
                                </li> */}
                                <li>
                                    <h5>Social</h5>
                                    <p>
                                        Facebook/LinkedIn - @mdibuhossain <span>(Slow response)</span>
                                    </p>
                                </li>
                                <li>
                                    <h5>Coding Profile</h5>
                                    <p>
                                        Github - @mdibuhossain <span>(Slow response)</span>
                                    </p>
                                    <p>
                                        Codeforces - @mdibuhossain <span>(Slow response)</span>
                                    </p>
                                </li>
                                {/* <li>
                                    <h5>Address</h5>
                                    <p>Gouripur, Daudkandi, Cumilla, Bangladesh - 3517</p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;