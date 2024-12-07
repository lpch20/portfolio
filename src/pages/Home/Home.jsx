import "animate.css";
import "./home.css";
import NavBar from "./../../components/NavBar/NavBar.jsx";
import "animate.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import pdf from "/CV-LUCIANO PIÑEYRO-en.pdf";

function Home() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const handleStateModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const handleStateModal2 = () => {
    if (modal2) {
      setModal2(false);
    } else {
      setModal2(true);
    }
  };

  const handleStateModal3 = () => {
    if (modal3) {
      setModal3(false);
    } else {
      setModal3(true);
    }
  };

  return (
    <div className="containerHome animate__animated animate__flipInY">
      <header>
        <NavBar></NavBar>
      </header>

      <main className="containerMain">
        <section className="firstSection">
          <div className="titleHome">
            <h1>Hi!</h1>
            <h1 className="name">Welcome</h1>
            {/* <img className='profileImg readMore animate__animated animate__zoomInRight' src="/profile.jpg" alt="" /> */}
          </div>

          <div className="loader">
            <div data-glitch="Swipe for more...." className="glitch">
              Swipe for more....
            </div>
          </div>
        </section>

        <section className="secondSection">
          {!modal ? (
            <div className="titleOfSection">
              <div className="whatIDoSection">
                <h1>What I do and techno-logies which manage..</h1>
              </div>
              <div className="buttonLearnMore">
                <button onClick={handleStateModal} className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="containerCards animate__animated animate__jackInTheBox">
                <div className="cardWhatIDo">
                  <div className="animateDiv">
                    <h4>Design + Development</h4>
                    <a className="code-button code-button--html code-button--color">
                      <b className="code-button__bracket">&lt;</b>
                      <span className="code-button__code">/</span>
                      <span className="code-button__text">html</span>
                      <b className="code-button__bracket">&gt;</b>
                    </a>
                  </div>
                  <p>
                    As a Frontend Developer, my passion lies in crafting
                    captivating user experiences. Leveraging modern technologies
                    such as HTML5, CSS3, and JavaScript (ES6+), I specialize in
                    the development of dynamic and responsive web pages. My
                    focus is on creating visually appealing interfaces using the
                    ReactJS library, ensuring optimal performance and high
                    interactivity. I pride myself on staying current with the
                    latest frameworks and libraries to deliver cutting-edge
                    solutions.
                  </p>
                </div>
                <div className="cardWhatIDo">
                  <div className="animateDiv">
                    <h4>Backend</h4>
                    <a className="code-button code-button--html code-button--color">
                      <b className="code-button__bracket">&lt;</b>
                      <span className="code-button__code">/</span>
                      <span className="code-button__text">NodeJS</span>
                      <b className="code-button__bracket">&gt;</b>
                    </a>
                  </div>
                  <p>
                    In the realm of Backend Development, I excel in constructing
                    robust and secure APIs. Utilizing Node.js and Express, I
                    ensure the seamless integration of functionalities in web
                    applications. My expertise extends to the implementation of
                    SQL databases, where I prioritize data integrity and
                    security. I am well-versed in employing various security
                    libraries to fortify applications against potential
                    vulnerabilities.
                  </p>
                </div>
                <div className="cardWhatIDo">
                  <div className="animateDiv">
                    <h4>Deployed Project</h4>
                    <a className="code-button code-button--html code-button--color">
                      <b className="code-button__bracket">&lt;</b>
                      <span className="code-button__code">/</span>
                      <span className="code-button__text">Delpoy</span>
                      <b className="code-button__bracket">&gt;</b>
                    </a>
                  </div>
                  <p>
                    Beyond development, I orchestrate the seamless
                    implementation and deployment of applications. My
                    proficiency extends to the configuration and management of
                    production environments. Whether leveraging cloud platforms
                    or ensuring efficient deployment practices, I guarantee that
                    applications under my purview are not only well-deployed but
                    also maintained diligently. I pride myself on delivering
                    reliable, scalable, and continuously monitored solutions.
                  </p>
                </div>
              </div>
              <div className="technologies cardWhatIDos animate__animated animate__jackInTheBox">
                <img src="/icons8-html.svg" alt="" />
                <img src="/icons8-css.svg" alt="" />
                <img src="/icons8-javascript.svg" alt="" />
                <img src="/icons8-reaccionar-30.svg" alt="" />
                <img src="/icons8-nodo-js.svg" alt="" />
                <img src="/Express.svg" alt="" />
                <img src="/icons8-sql-64.png" alt="" />
                <img src="/posgres.svg" alt="" />
                <img src="/mongodb.png" alt="" />
                <img src="/tailwind.png" alt="" />
                <img src="/boostrap.png" alt="" />
              </div>
            </>
          )}
        </section>

        <section className="thirdSection">
          {!modal2 ? (
            <div>
              <div>
                <h1>Who I am</h1>
              </div>
              <div>
                <button onClick={handleStateModal2} className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text2">Learn More</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="containerCards2 animate__animated animate__jackInTheBox">
              <div>
                <img src="/profile.jpg" alt="" />
              </div>
              <div>
                <div className="titleWhoIAm">
                  <h2>Full Stack Development</h2>
                  <div className="code-loader">
                    <span>{"{"} </span>
                    <span>{"}"}</span>
                  </div>
                </div>
                <div className="infoWhoIAm">
                  <p>
                    Passionate about Information Technology and specialized in
                    Web Development with a focus on Backend. My dynamism and
                    proactivity drive me to tackle challenges and achieve
                    results, supported by my education and experience in web
                    development. I am committed to contributing creative and
                    efficient solutions to innovative projects.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="fourSection">
          {!modal3 ? (
            <div className="titleWork">
              <h1>My work</h1>
              <button onClick={handleStateModal3} className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          ) : (
            <div className="projectsView animate__animated animate__jackInTheBox">
              {/* <div className="myProjects">
                <h2>These are my works....</h2>
              </div> */}
              <div className="containerProjects">
                <div className="cardWork">
                  <img
                    className="pageImage"
                    src="/viemventuraPage.png"
                    alt=""
                  />
                  <div className="card__content">
                    <p className="card__title">Viemventura</p>
                    <p className="card__description">
                      Viemventura is a website where individuals can check their
                      debt with specific financial institutions. It was a
                      project completed in 2023 for the company where I work.
                    </p>
                    <div>
                      <img className="icons" src="/icons8-html.svg" alt="" />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                    </div>
                    <Link
                      to="https://viemventura.com.uy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="cardWork">
                  <img
                    className="pageImage"
                    src="/viemventuraLinkPage.png"
                    alt=""
                  />
                  <div className="card__content">
                    <p className="card__title">Viemventura.link</p>
                    <p className="card__description">
                      Viemventura.link: debtor portal to view, simulate
                      payments, and make payments through an integrated gateway
                      on the subdomain of Viemventura
                    </p>
                    <div>
                      <img className="icons" src="/icons8-html.svg" alt="" />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-nodo-js.svg" alt="" />
                      <img className="icons" src="/icons8-sql-64.png" alt="" />
                    </div>
                    <Link
                      to="https://viemventuralink.com.uy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="cardWork">
                  <img className="pageImage" src="/audnPage.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Audn</p>
                    <p className="card__description">
                      AUDN is the project that confirms the approval of the
                      6-month, 420-hour Snpai 2023 bootcamp. Additionally, in
                      the application, users can create music playlists based on
                      various conditions
                    </p>
                    <div>
                      <img
                        className="icons"
                        src="/icons8-reaccionar-30.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-nodo-js.svg" alt="" />
                      <img className="icons" src="/icons8-sql-64.png" alt="" />
                    </div>
                    <Link
                      to="https://front-final-project.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="cardWork">
                  <img className="pageImage" src="/pokedexPage.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Pokedex</p>
                    <p className="card__description">
                      Pokedex is an intermediate project from Senpai's bootcamp
                      where you can view Pokémon and their stats, filter them by
                      name or number. Each Pokémon has its card.
                    </p>
                    <div>
                      <img
                        className="icons"
                        src="/icons8-reaccionar-30.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                    </div>
                    <Link
                      to="https://pokedex-one-pi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="cardWork">
                  <img className="pageImage" src="/crm_vet_home.jpg" alt="" />
                  <div className="card__content">
                    <p className="card__title">CRM</p>
                    <p className="card__description">
                      CRM is a veterinary management tool designed to allow
                      veterinarians to store their appointments with patients
                      and modify them according to their preferences.
                    </p>
                    <div>
                      <img
                        className="icons"
                        src="/icons8-reaccionar-30.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img className="icons" src="/tailwind.png" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-nodo-js.svg" alt="" />
                      <img className="icons" src="/mongodb.png" alt="" />
                    </div>
                    <Link
                      to="https://crm-front-peach.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="cardWork">
                  <img className="pageImage" src="/compromisos.jpg" alt="" />
                  <div className="card__content">
                    <p className="card__title">Compromisos VIEM</p>
                    <p className="card__description">
                      Compromisos VIEM is a client manager for the website
                      viemventuralink.com.uy. It manages clients and modifies
                      the database as needed.
                    </p>
                    <div>
                      <img
                        className="icons"
                        src="/icons8-reaccionar-30.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-nodo-js.svg" alt="" />
                      <img className="icons" src="/icons8-sql-64.png" alt="" />
                    </div>
                    <Link
                      to="https://compromisos-viem.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="cardWork">
                  <img className="pageImage" src="/mideuda.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Mi Deuda</p>
                    <p className="card__description">
                      Landing page about the information regarding Uruguay's
                      debt restructuring plan.
                    </p>
                    <div>
                      <img className="icons" src="/icons8-html.svg" alt="" />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                    </div>
                    <Link
                      to="https://www.mideuda.com.uy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="cardWork">
                  <img className="pageImage" src="/mideudalink.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Mi Deuda Link</p>
                    <p className="card__description">
                      Debt management page for Viemventura clients under
                      Uruguay's refinancing plan. Clients can make payments and
                      keep track of their payments history.
                    </p>
                    <div>
                      <img
                        className="icons"
                        src="/icons8-reaccionar-30.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-nodo-js.svg" alt="" />
                      <img className="icons" src="/posgres.svg" alt="" />
                      <img className="icons" src="/tailwind.png" alt="" />
                    </div>
                    <Link
                      to="https://www.mideudalink.com.uy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="cardWork">
                  <img className="pageImage" src="/mideudalink.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Mafloma</p>
                    <p className="card__description">
                      An e-commerce platform featuring inventory management for
                      administrators and secure payment processing through a
                      payment gateway.
                    </p>
                    <div>
                      <img
                        className="icons"
                        src="/Next.js.svg"
                        alt=""
                      />
                      <img
                        className="icons"
                        src="/icons8-reaccionar-30.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-css.svg" alt="" />
                      <img
                        className="icons"
                        src="/icons8-javascript.svg"
                        alt=""
                      />
                      <img className="icons" src="/icons8-nodo-js.svg" alt="" />
                      <img className="icons" src="/posgres.svg" alt="" />
                      <img className="icons" src="/tailwind.png" alt="" />
                    </div>
                    <Link
                      to="https://www.mafloma.com.uy/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="go-page">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Go to page</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="containerFoot">
          <div className="social-links">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
              href={pdf}
              download={"Cv_Luciano_Piñeyro"}
            >
              <div id="twitter" className="social-btn flex-center">
                <img src="/cvIcon.png" alt="" />
                <span>Download CV</span>
              </div>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/luciano-pi%C3%B1eyro-choca-40b6b71bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="linkedin" className="social-btn flex-center">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
                <span>Luciano Piñeyro</span>
              </div>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/lpch20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div id="github" className="social-btn flex-center">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                <span>lpch20</span>
              </div>
            </a>
          </div>
          <div>
            <h4 className="email">
              {" "}
              <a href="mailto:pineyroluciano@gmail.com">
                pineyroluciano@gmail.com
              </a>
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
