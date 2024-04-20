import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="copyright">
        &copy; Copyright{' '}
            <strong>
                <span>Gül Sevim Bülbül</span>
            </strong>
            . All Rights Reserved
        </div>
        <div className="credits">
            Designed by <a href='#'>Gül Sevim Bülbül</a>
        </div>
    </div>
  );
}

export default Footer