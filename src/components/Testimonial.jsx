import React from 'react'
import testimonial1 from './testimonial1.png'
import testimonial_bg from './testimonial-bg.png'

const Testimonials = () => {
    return (
        <>
            <div className="testimonials">
                <div style={{paddingLeft: '10rem', zIndex: '1'}}>
                    <h2>
                        Students Reviews <br />
                        are essential
                    </h2>
                    <p>
                        See what our students are saying
                    </p>
                </div>

                <div className="text-wrap">
                    <p>
                        Boost your career with full access to our learning programme.
                        Catch up with the syllabus all in one place
                    </p>
                    <h4>Stella Mary</h4>
                    <p>
                        Accounting Student, Bricks University
                    </p>
                </div>
                <div>
                    <img src={testimonial_bg} alt="profesco" className="bg" />
                    <img src={testimonial1} alt="profesco" className="img" />
                </div>
            </div>

        </>
    )
}

export default Testimonials
