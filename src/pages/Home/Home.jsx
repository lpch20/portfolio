import "animate.css";
import "./home.css";
import NavBar from "./../../components/NavBar/NavBar.jsx";
import "animate.css";
import { useState } from "react";
import { Link } from 'react-router-dom'


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
            <div>
              <div className="whatIDoSection">
                <h1>What I do?</h1>
              </div>
              <div>
                <button onClick={handleStateModal} className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </div>
          ) : (
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
                  the development of dynamic and responsive web pages. My focus
                  is on creating visually appealing interfaces using the ReactJS
                  library, ensuring optimal performance and high interactivity.
                  I pride myself on staying current with the latest frameworks
                  and libraries to deliver cutting-edge solutions.
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
                  SQL databases, where I prioritize data integrity and security.
                  I am well-versed in employing various security libraries to
                  fortify applications against potential vulnerabilities.
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
                  Beyond development, I orchestrate the seamless implementation
                  and deployment of applications. My proficiency extends to the
                  configuration and management of production environments.
                  Whether leveraging cloud platforms or ensuring efficient
                  deployment practices, I guarantee that applications under my
                  purview are not only well-deployed but also maintained
                  diligently. I pride myself on delivering reliable, scalable,
                  and continuously monitored solutions.
                </p>
              </div>
            </div>
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
              <div className="myProjects">
                <h2>These are my works....</h2>
              </div>
              <div className="containerProjects">
                <div className="cardWork">
                  <img className="pageImage" src="/viemventuraPage.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Viemventura</p>
                    <p className="card__description">
                      Viemventura is a website where individuals can check their debt with specific financial institutions. It was a project completed in 2023 for the company where I work.
                    </p>
                    <div>
                      <img className='icons' src="/icons8-html.svg" alt="" />
                      <img className='icons' src="/icons8-css.svg" alt="" />
                      <img className='icons' src="/icons8-javascript.svg" alt="" />
                    </div>
                    <Link to="https://viemventura.com.uy/">
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
                  <img className="pageImage" src="/viemventuraLinkPage.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Viemventura.link</p>
                    <p className="card__description">
                      Viemventura.link: debtor portal to view, simulate payments, and make payments through an integrated gateway on the subdomain of Viemventura
                    </p>
                    <div>
                      <img className='icons' src="/icons8-html.svg" alt="" />
                      <img className='icons' src="/icons8-css.svg" alt="" />
                      <img className='icons' src="/icons8-javascript.svg" alt="" />
                      <img className='icons' src="/icons8-nodo-js.svg" alt="" />
                    </div>
                    <Link to="https://viemventuralink.com.uy/">
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
                  <img className="pageImage" src="/viemventuraLinkPage.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Viemventura.link</p>
                    <p className="card__description">
                      Viemventura.link: debtor portal to view, simulate payments, and make payments through an integrated gateway on the subdomain of Viemventura
                    </p>
                    <div>
                      <img className='icons' src="/icons8-html.svg" alt="" />
                      <img className='icons' src="/icons8-css.svg" alt="" />
                      <img className='icons' src="/icons8-javascript.svg" alt="" />
                      <img className='icons' src="/icons8-nodo-js.svg" alt="" />
                    </div>
                    <Link to="https://viemventuralink.com.uy/">
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
                  <img className="pageImage" src="/viemventuraLinkPage.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Viemventura.link</p>
                    <p className="card__description">
                      Viemventura.link: debtor portal to view, simulate payments, and make payments through an integrated gateway on the subdomain of Viemventura
                    </p>
                    <div>
                      <img className='icons' src="/icons8-html.svg" alt="" />
                      <img className='icons' src="/icons8-css.svg" alt="" />
                      <img className='icons' src="/icons8-javascript.svg" alt="" />
                      <img className='icons' src="/icons8-nodo-js.svg" alt="" />
                    </div>
                    <Link to="https://viemventuralink.com.uy/">
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


      <footer></footer>
    </div>
  );
}


export default Home;



