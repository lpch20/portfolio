import "animate.css";
import "./home.css";
import NavBar from "./../../components/NavBar/NavBar.jsx";
import "animate.css";

function Home() {
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
          <div className="whatIDoSection">
            <h1>What I do?</h1>
          </div>
          <div>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
            
          </div>
        
        </section>
        <div className="card">hola</div>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home;
