import React from "react";
import mainImg from '../assets/images/Hired.PNG'
import dashboard from '../assets/images/Dashboard.PNG'
import homepageimg from '../assets/images/Homepage.PNG'
import btpic from '../assets/images/budget.PNG'
import burgers from '../assets/images/burgers.PNG'
import gme from '../assets/images/gme.png'
import resume from '../assets/resume/CV.pdf'
import {FaGithub, FaReact} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiBootstrap, SiMongodb, SiMysql, SiNodeDotJs, SiJquery} from 'react-icons/si'
import {GiMustache} from 'react-icons/gi'

const gif = 'https://media.giphy.com/media/47rSw6aIG5dtR6I859/giphy.gif'

function Homepage() {
    return (
    <>
    <div className="boody">
        <nav className="nav">
            <div className="dev">Tyler Dev</div>
            <div className="directory">
                <div className="nav-item">
                    <a className="nav-link" href={resume} target="_blank">Resume</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </div>
            </div>
        </nav>

        <section className="intro">
            <h1 className="section-title title-intro">Hi, I'm <strong>Tyler Petri</strong></h1>
            <p className="subtitle subtitle-intro">Software Engineer</p>
            <img src={mainImg} alt="Profile" className="my-pic"/>
        </section>

        <div className="languages">
            <FaGithub className="icons"/><DiJavascript1 className="icons"/>
            <SiNodeDotJs className="icons"/><FaReact className="icons"/>
            <SiBootstrap className="icons"/><SiJquery className="icons"/>
            <SiMongodb className="icons"/><SiMysql className="icons"/>
            <GiMustache className="icons"/>
        </div>
        <section>
            <div className="projects">
            <div className="work">
                    <a href='https://tylerpetri.github.io/Employee-Directory/' target="_blank">
                        <img src={homepageimg} alt="employee-directory"/>
                        <h4>React app</h4>
                        <p>Your employee's information all in one place. Need to reach someone? Filter by name and/or city, boom. Get'er done.</p>
                        <a href='https://github.com/TylerPetri/Employee-Directory/tree/master' target="_blank" className="gitlink">Github</a>
                    </a>
                </div>
                <div className="work">
                    <a href='https://budget-tracker2000.herokuapp.com' target="_blank">
                        <img src={btpic} alt="budget-tracker"/>
                        <h4>Service worker, IndexedDB & Mongoose</h4>
                        <p>Can I afford another coffee? Probably! Time to check the budget tracker 2000! Enter a name, a value, and selected whether it's an expense or deposit!</p>
                        <a href='https://github.com/TylerPetri/Budget-tracker2000.git' target="_blank" className="gitlink">Github</a>
                    </a>
                </div>
                <div className="work">
                    <a href='https://workout-tracker-mongodb5000.herokuapp.com/' target="_blank">
                        <img src={dashboard} alt="workout-tracker"/>
                        <h4>MongoDB</h4>
                        <p>You want to track your workouts? Maybe fool your loved ones? You can track weights, the name of the exercise, the type, the duration, the reps, the sets, and the distance! All neatly displayed in the dashboard page the the form of various graphs!</p>
                        <a href='https://github.com/TylerPetri/Workout-Tracker-MongoDB.git' target="_blank" className="gitlink">Github</a>
                    </a>
                </div>
                <div className="work">
                    <a href='https://glacial-taiga-08008.herokuapp.com/' target="_blank">
                        <img src={burgers} alt="burger-app"/>
                        <h4>Handlebars & mySQL</h4>
                        <p>Want a double double? Type it in the box and submit! Devour or not to devour is now the question.</p>
                        <a href='https://github.com/TylerPetri/burger.git' target="_blank" className="gitlink">Github</a>
                    </a>
                </div>
                <div className="work">
                    <a href='https://www.youtube.com/watch?v=VTN-o95zSMI&t=8s' target="_blank">
                        <img src={gif} alt="employee-tracker"/>
                        <h4>Inquirer</h4>
                        <p>An application to track employee information within a database. There are options such as: adding roles, adding managers, seeing the utilized budget per department, etc.</p>
                        <a href='https://github.com/TylerPetri/Employee-Tracker2.0.git' target="_blank" className="gitlink">Github</a>
                    </a>
                </div>
                <div className="work">
                    <a href='https://teamcirclealpha.github.io/GetMeEmployed/' target="_blank">
                        <img src={gme} alt="get-me-employed"/>
                        <h4>3rd party API</h4>
                        <p>Job search front end API app. Enter details, save whichever you're interested in and click the cards to be redirected to their site!</p>
                        <a href='https://github.com/Humble-Attackers/Group-Mood-Tracker.git' target="_blank" className="gitlink">Github</a>
                    </a>
                </div>
               
            </div>
        </section>
        </div>
    </>

    )
}

export default Homepage;