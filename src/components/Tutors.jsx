import React from 'react'
import ican from '../components/img/ican.png'
import acca from '../components/img/acca.png'
import cima from '../components/img/cima.png'

const Tutors = () => {
    return (
        <div className="tutors">
            <div className="text">
                <h2 className="our-h2">Our tutors</h2>
                <div>
                    <h2 className="text-h2">
                        100+ tutors around the country <br />
                        guiding you to the right path
                    </h2>
                    <p>
                        Boost your career with full access to our <br />
                        learning programme. Catch up with the <br />
                        syllabus all in one place
                    </p>
                </div>
            </div>
            <div className="img-wrap">
                <div><img src={ican} alt="ican" className="img" /></div>
                <div><img src={acca} alt="acca" className="img" /></div>
                <div><img src={cima} alt="cima" className="img" /></div>
            </div>
        </div>
    )
}

export default Tutors
