import "animate.css";
import "./home.css";
import NavBar from "./../../components/NavBar/NavBar.jsx";
import "animate.css";
import { useState } from "react";


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
            <div className="projectsView">
              <div className="myProjects">
                <h2>These are my works....</h2>
              </div>
              <div className="containerProjects">
                <div className="cardWork">
                  <img src="/viemventuraLinkPage.png" alt="" />
                  <div className="card__content">
                    <p className="card__title">Card Title</p>
                    <p className="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
                <div className="cardWork">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                  </svg>
                  <div className="card__content">
                    <p className="card__title">Card Title</p>
                    <p className="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
                <div className="cardWork">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                  </svg>
                  <div className="card__content">
                    <p className="card__title">Card Title</p>
                    <p className="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
                <div className="cardWork">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
                  </svg>
                  <div className="card__content">
                    <p className="card__title">Card Title</p>
                    <p className="card__description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
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



