import "animate.css";
import "./home.css";
import NavBar from "./../../components/NavBar/NavBar.jsx";
import "animate.css";
import { useEffect, useState } from "react";

function Home() {
  const [modal, setModal] = useState(false);

  const handleStateModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
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
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span onClick={handleStateModal} className="button-text">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="containerCards animate__animated animate__jackInTheBox">
              <div className="cardWhatIDo">
                <h4>Design + Development</h4>
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
                <h4>Backend</h4>
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
                <h4>Deployed Project</h4>
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

        <section>
          
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;
