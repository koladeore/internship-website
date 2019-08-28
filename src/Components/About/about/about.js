import React from 'react';
import './about.css';
import AboutImage from '../../images/about-image.jpg'

const AboutUs = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 img-fluid img">
                    <img src={AboutImage} alt="not-showing" className="image"/>
                </div>
                <div className="col-md-6 text-image">
                    <h1>AboutUS</h1>
                    <p>Apostle Israel Eledan is the Presiding Apostle overseeing Leaders Church International.He answered the call of God into the ministry on the 30 th of December 1982. 
                    He has beentravelling from coast to coast since then in advancing the gospel of Christ. 
                    He is also the president and founder of Valiant Men International and Israel Eledan Apostolic Vanguard. He is an inspiring writer, and an expert on leadership and organization development. 
                    He teaches the Word of God with a prophetic unction, and apostolic breakthrough impact. He is also the Chairman of Grace Relief Initiative International.Rev. Grace Eledan is the Vice-President of Leaders Church International.
                    She is a writer and an Evangelist by calling, also operating prophetic and healing gifts.
                    Her involvement in church pioneering work spans over 20 years.
                    She is the president and founder of Women Aflame International, a vibrant non-denominational ministry reaching women
                    with the love of Christ. She is the Co-Founder of Grace Relief Initiative International.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;