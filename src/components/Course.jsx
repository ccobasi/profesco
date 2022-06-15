
import React from 'react'
import Footer from './Footer'
import './styles.css'

export const Course = () => {
  return (
    <div>
      <div className="container-fluid page-header" style={{ 
      
      marginBottom: 9
    }}> 
        <div className="container">
           
            <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
                <h3 className="display-4 text-white text-uppercase">Courses</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Courses</p>
                </div>
            </div>
        </div>
    </div>
    


        <Footer/>
    </div>
  )
}
