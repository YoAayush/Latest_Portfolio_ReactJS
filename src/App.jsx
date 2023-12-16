import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {

  const data1 = [
    {
      resume: "/Aayush Chopra (Resume).pdf",
      image: "/image.png",
      name: "Aayush Chopra",
      about: "Currently pursuing BCA from Vivekananda Institute of professional studies, Technical Campus, affiliated to GGSIPU.",
      recent: "Web Developer | Student"
    }
  ]

  const data2 = [
    {
      insta_img: "/instagram.png",
      linkedin_img: "/linkedin.png",
      image: "/image.png",
      github: "/github-logo.png",
      facebook: "/facebook.png"
    }
  ]

  const menuClick = () => {
    document.getElementById("menu-icon").style.display = 'none';
    document.getElementById("head-nav").style.display = 'block';
  }

  const CloseMenu = () => {
    document.getElementById("menu-icon").style.display = 'flex';
    document.getElementById("head-nav").style.display = 'none';
  }

  return (
    <div>
      <div id='menu-icon'>
        <img src="/icons8-menu-100.png" alt="menu-icon" onClick={menuClick} />
      </div>
      <div id='head-nav'>
        <nav>
          <div id="close">
            <img src="/icons8-close-window-100.png" onClick={CloseMenu} />
          </div>
          <ol className='nav-items'>
            <Link to="/Home"><li>Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Projects"><li>Projects</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
          </ol>
        </nav>
      </div>
      <Routes>
        <Route
          path='/'
          element={<Intro data={data1} />}
        ></Route>
        <Route
          path='/Home'
          element={<Intro data={data1} />}
        ></Route>
        <Route
          path='/About'
          element={<About data={data2} />}
        ></Route>
        <Route
          path='/Projects'
          element={<Projects />}
        ></Route>
        <Route
          path='/Contact'
          element={<Contact data={data2} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
