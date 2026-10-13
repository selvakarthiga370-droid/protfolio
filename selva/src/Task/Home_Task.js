import {React,useState} from 'react';
import { Routes, Route, Link ,useNavigate} from 'react-router';
import Login_Task from './Login_Task';
import Project_Task from './Project_Task';
import Skills_Task from './Skills_Task';
import Accordion_Task from './Accordion_Task';
import Contact_Task from './Contact_Task';
import About_Task from './About_Task';
import './Home_Task.css';

function Home_Task() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem('demoCurrentUser')
      );
    } catch {
      return null;
    }
  });

  const navigate = useNavigate();
  
  function handleLogin(loggedInUser) {
    const safeUser = {
      name: loggedInUser.name,
      email: loggedInUser.email
    };

    localStorage.setItem(
      'demoCurrentUser',
      JSON.stringify(safeUser)
    );

    setUser(safeUser);
    navigate('/dashboard');
  }

  function handleLogout() {
    localStorage.removeItem('demoCurrentUser');
    setUser(null);
    navigate('/');
  }

  const data = {
    id: '24IT096',
    name: 'SELVA',
    username: 'Selvakarthiga',
    contact: '9789225623',
    role: 'IT Student | Aspiring Full Stack Developer',
    skills: [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'MongoDB'
    ],
    email: 'sselvakarthiga@gmail.com',
    location: 'Salem, Tamil Nadu',
    about:
      'I am a third-year Information Technology student at Muthayammal Engineering College. I am interested in web development, UI/UX design and cloud computing. I am currently learning full-stack development and improving my technical skills.',
    projects: [
      {
        title: 'Recipes Realm',
        description:
          'A web application that helps users find recipes based on ingredients and save their favourite recipes.'
      },
      {
        title: 'Library Management System with CRM',
        description:
          'A library management application with book search, issue, return and customer management features.'
      },
      {
        title: 'Gas Leakage Detection System',
        description:
          'An IoT-based system that detects gas leakage and alerts users.'
      }
    ]
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <Link className="logo" to="/">
        SELVA
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/accordion">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link className="login-link" to="/login">
            Login / Sign Up
          </Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <section className="hero">
              <div className="hero-content">
                <p className="eyebrow">
                  WELCOME TO MY PORTFOLIO
                </p>

                <h1>
                  <span>{data.name}</span>
                </h1>

                <h2>{data.role}</h2>

                <p className="intro">{data.about}</p>

                <p className="location">
                  📍 {data.location}
                </p>

                <div className="hero-buttons">
                  <Link to="/projects" className="primary-btn">
                    View My Projects
                  </Link>

                  <Link to="/contact" className="secondary-btn">
                    Contact Me
                  </Link>
                </div>

                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a><span> </span>

                  <a href={`mailto:${data.email}`}>
                    Email
                  </a>
                </div>
              </div>
            </section>
          }
        />

        <Route path="/about" element={<About_Task />} />
        <Route path="/skills" element={<Skills_Task />} />
        <Route path="/projects" element={<Project_Task />} />
        <Route path="/accordion" element={<Accordion_Task />} />
        <Route path="/contact" element={<Contact_Task />} />
        <Route path="/login" element={<Login_Task onLogin={handleLogin}/>} />
       
  <Route
    path="/dashboard"
    element={
      user ? (
        <section className="dashboard">
          <h1>Welcome, {user.name}!</h1>
          <p>You have logged in successfully.</p>
          <p>Email: {user.email}</p>

          <button
            className="secondary-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </section>
      ) : (
        <navigate to="/login" replace />
      )
    }
  />
 
      </Routes>

      <footer className="footer">
        © 2026 {data.name} | Personal Portfolio
      </footer>
    </div>
  );
}

export default Home_Task;



