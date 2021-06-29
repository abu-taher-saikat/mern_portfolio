import React from 'react'
// import WorkCard from '../components/WorkCard';
import '../styles/HomeScreen.scss'
import headerImage from '../assets/header.png';
import RecentPost from '../components/RecentPost';
// import demo1 from '../assets/demo1.png';
import Skills from '../components/Skills'
import Projects from './Projects';
const HomeScreen = () => {
    

    return (
        <div className="homeScreen">
            <div className="hero">
                <div className="img"><img src={headerImage} alt="" srcSet="" /></div>
                <div className="content grid">
                    <h4>Hi, I am Saikat,a Mern Stack Full Stack Developer</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className="button-primary">Download Resume</button>
                </div>
            </div>
            {/* recent post */}
            <div className="recent-post">
                <div className="top">
                    <h1>Skill's I have</h1>
                </div>
            </div>

            {/* Featured works */}
            <div className="skill-container">
                    <Skills></Skills>
            </div>

            <div className="projects">
                <Projects />
            </div>


        </div>
    )
}

export default HomeScreen
