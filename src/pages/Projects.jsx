import { useState } from "react";
import { project_data } from "../data/project_data";
import "./projects.css";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const portfoliosName = Object.keys(project_data);
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfoliosName[0]);
  const selectedFeaturedPortfolios = project_data[selectedPortfolio].filter(
    (portfolio) => portfolio.type === "featured"
  );
  const selectedPortfolios = project_data[selectedPortfolio].filter(
    (portfolio) => portfolio.type === "regular"
  );
  return (
    <>
      <Helmet>
        <title>Ibrahim Hossain | Projects</title>
        <meta
          name="description"
          content="Various projects by Md. Ibrahim Hossain, a full-stack web developer. Explore my projects and skills."
        />
        <meta
          name="keywords"
          content="full-stack, web, development, projects, portfolio, web developer, ReactJS, Node.js, MongoDB, ExpressJS, JavaScript, HTML, CSS, Firebase, GraphQL, Redux, MySQL, JavaFX, Java, spring boot, CRUD, responsive, website, web app"
        />
        <link rel="canonical" href="https://ibrahim.engineer/projects" />
      </Helmet>
      <main>
        <h1 className="position-absolute top-0 end-0 mt-4 me-4 d-block d-sm-none top-page-title">
          MY <span>PROJECTS</span>
        </h1>

        <section className="container-fluid">
          <div className="container text-center page-title d-sm-block d-none">
            <h1>WORKS</h1>
            <h2>
              MY <span>PORTFOLIO</span>
            </h2>
          </div>
          <div className="container show-case-content">
            <div className="portfolios">
              <ul className="portfolio-nav">
                {portfoliosName.map((name) => (
                  <li
                    onClick={() => setSelectedPortfolio(name)}
                    className={name === selectedPortfolio ? "active" : ""}
                    key={name}
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <div className="portfolio-items portfolios-featured">
                {selectedFeaturedPortfolios.map((portfolio, index) => (
                  <div key={index} className="portfolio">
                    {portfolio?.image && (
                      <div className="portfolio-img">
                        <img
                          alt={portfolio.name}
                          src={portfolio.image}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="details">
                      <h4>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={portfolio.demo}
                        >
                          {portfolio.name}
                        </a>
                      </h4>
                      <p>{portfolio.description}</p>
                      <div className="links">
                        <ul>
                          {portfolio.source && (
                            <li>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={portfolio.source}
                              >
                                <i className="bx bxl-github"></i>
                              </a>
                            </li>
                          )}
                          {portfolio.demo && (
                            <li>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={portfolio.demo}
                              >
                                <i className="bx bx-link-external"></i>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                      <ul className="portfolio-tools">
                        {portfolio.tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="portfolio-items portfolios-regular">
                {selectedPortfolios.map((portfolio, index) => (
                  <div key={index} className="portfolio small">
                    <div className="details">
                      <h4>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={portfolio.demo}
                        >
                          {portfolio.name}
                        </a>
                      </h4>
                      <p>{portfolio.description}</p>
                      <div className="links">
                        <ul>
                          {portfolio.source && (
                            <li>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={portfolio.source}
                              >
                                <i className="bx bxl-github"></i>
                              </a>
                            </li>
                          )}
                          {portfolio.demo && (
                            <li>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={portfolio.demo}
                              >
                                <i className="bx bx-link-external"></i>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                      <ul className="portfolio-tools">
                        {portfolio.tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
