import React from 'react'
import './ErrorPage.scss';
import error1 from '../../assets/images/error/404error.png'

const ErrorPage = () => {
  return (
    <div >
 <div className="error">
 <div className="error_section">
    <h1>404!</h1>
    <h2>Page Not Found</h2>
    <h3>Seems like you have lost your way. Let's bring you back home to <a href="/">PolyoneCables</a> </h3>
    <img src={error1} alt="" />
   </div>
 </div>
    </div>
  )
}

export default ErrorPage
