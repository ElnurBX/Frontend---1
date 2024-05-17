
import React from 'react'
import './footer.scss'
const Footer = () => {
return (
    <footer className='footersite'>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h2 className='mb-5'>
                    Tasty
                    </h2>
                    <p className='text-secandery mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='d-flex justify-content-center  social'>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="col-3">
                    <h2>Opening Hours</h2>
                    <ul>
                        <li>Monday: <span>08: - 22:00</span></li>
                        <li>Tuesday: <span>08: - 22:00</span></li>
                        <li>Wednesday: <span>08: - 22:00</span></li>
                        <li>Thursday: <span>08: - 22:00</span></li>
                        <li>Friday: <span>08: - 22:00</span></li>
                        <li>Saturday: <span>08: - 22:00</span></li>
                        <li>Sunday: <span>08: - 22:00</span></li>
                    </ul>
                </div>
                <div className="col-3">
                <h2>Contact Information</h2>
                <ul>
              <li> 198 West 21th Street, Suite 721 New York NY 10016</li> 
                <li> 1235 2355 98</li>    +
              <li>     info@yoursite.com</li> 
                 <li>  email@email.com</li> 
                </ul>
                </div>
                <div className="col-3">
                <h2>Newsletter</h2>
                <p>Far far away, behind the word mountains, far from the countries.</p>
                <input type="text" placeholder='Subsicribe' />
                </div>
                
            </div>
        </div>
    </footer>
)
}

export default Footer
                    