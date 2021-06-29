import React from 'react'
import {useParams} from 'react-router-dom';
import '../styles/WorkDescriptionScreen.scss'


const WorkDescriptionScreen = () => {
    const params = useParams();

    return (
        <div className='workDescription'>
            <div className="container">
                <h1 className="page-heading">Designing Dashboards with usability in mind</h1>
                <div className="time-and-category">
                    <div className="time">2020</div>
                    <div className="category">Dashboard, User Experience Design</div>
                </div>
            </div>
        </div>
    )
}

export default WorkDescriptionScreen
