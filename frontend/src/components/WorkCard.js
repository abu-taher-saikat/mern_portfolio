import React from 'react'
import demo1 from '../assets/demo1.png';
import './WorkCard.scss';



const WorkCard = () => {
    return (
        <div className="feature-card">
        <div className="grid1">
            <img className="feature-card-img" src={demo1} alt="" />
        </div>
        <div className="grid2">
            <h3>Designing Dashboards</h3>
            <div className="year-and-category">
                <span className='year'>2020</span>
                <span className='category'>Dashboard</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        {/* <span className='line'></span> */}
        </div>
    )
}

export default WorkCard
