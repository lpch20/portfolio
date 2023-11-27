import 'animate.css'
import './home.css'
import NavBar from "./../../components/NavBar/NavBar.jsx"
import "animate.css";

function Home() {
  return (
    <div className='containerHome animate__animated animate__flipInY'>

      <header>
        <NavBar></NavBar>
      </header>

      <main className='containerMain'>
        <section className='firstSection'>

          <div className='titleHome'>
            <h1>Hi!</h1>
            <h1 className='name'>Welcome</h1>
            {/* <img className='profileImg readMore animate__animated animate__zoomInRight' src="/profile.jpg" alt="" /> */}
          </div>
{/* 

          <div className='containerImg'>
          
          </div> */}

        </section>

        <section className='secondSection'>
          <div className='whatIDoSection'>
            <h1>
              What I do?
            </h1>
          </div>
        </section>
      </main>

      <footer>

      </footer>

    </div>
  )
}

export default Home