import { useState } from "react";
import { skill_data } from "../data/skill_data";
import "./about.css";

const About = () => {
    const skillsName = Object.keys(skill_data)
    const [selectedSkill, setSelectedSkill] = useState(skillsName[0])
    const selectedSkills = skill_data[selectedSkill]
    return (
        <main>
            <h1 className="position-absolute top-0 end-0 mt-4 me-4 d-block d-sm-none top-page-title">ABOUT <span>ME</span></h1>

            <section className="container-fluid">
                <div className="container text-center page-title d-sm-block d-none">
                    <h1>RESUME</h1>
                    <h2>ABOUT <span>ME</span></h2>
                </div>
                <div className="container show-case-content">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="row">
                                <h3>PERSONAL INFOS</h3>
                                <div className="col-md-6">
                                    <p className="pointIcon"><strong>Full Name : </strong>Md Ibrahim Hossain</p>
                                    <p className="pointIcon"><strong>Website : </strong><a target="_blank"
                                        href="https://mdibuhossain.web.app/" rel="noreferrer">mdibuhossain.web.app</a></p>
                                    <p className="pointIcon"><strong>Nationality : </strong>Bangladeshi</p>
                                    <p className="pointIcon"><strong>Languages : </strong>Bengali, English</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="pointIcon"><strong>Age : </strong>20</p>
                                    <p className="pointIcon"><strong>Degree : </strong>Bechalor of Science in CSE</p>
                                    <p className="pointIcon"><strong>Email : </strong>ibuhossain3@gmail.com</p>
                                    <p className="pointIcon"><strong>Freelance : </strong><span>Available</span></p>
                                </div>
                                <div className="col-md-6">
                                    <a target="_blank" href="https://drive.google.com/file/d/1cVVt57FXd3bKVXZyzUltwNDNS9PcbHHz/view?usp=sharing" className="mt-2 mb-4 hero-btn rounded-pill" rel="noreferrer">
                                        Download Resume
                                        <i className='bx bx-download'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="row g-2">
                                <h3>What I'm doing?</h3>
                                <div className="col-sm-6">
                                    <div className="border rounded p-3">
                                        <h5>Web development</h5>
                                        <small>I can create good-looking sites by using ReactJS, MaterialUI</small>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="border rounded p-3">
                                        <h5>Responsive sites</h5>
                                        <small>I can create responsive sites by Bootstrap, Tailwind, Vanilla CSS</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mb-5">
                        <h3 className="text-center">My Skills</h3>
                    </div>
                    <div className="skill-area">
                        <ul className="skill-nav">
                            {skillsName.map(name => (
                                <li
                                    onClick={() => setSelectedSkill(name)}
                                    className={name === selectedSkill ? "active" : ""}
                                    key={name}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                        <div className="skill">
                            {selectedSkills.map(({ name, percent }) => (
                                <div key={name} className="card">
                                    <h4>{name}</h4>
                                    {/* <p>{percent}%</p> */}
                                    <div style={{ width: percent + "%" }} className="progress-ar" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;