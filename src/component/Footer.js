import React from 'react'
import footer from './image/footer.jpg'
// import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <div className='footer2'>
        <img src={footer} alt="" className='footer-image' />
        <table className='footer-table'>
          <tr className='footer-tr'>
            <td className='footer-td'>
              <h1 className="contact">Contacts</h1>
              <p className="footer-p">Baker Street 567, Los Angeles 11023 <br />
                California - US</p>
              <p className="footer-p2">info@Paradisehotel.com <br />
                +434 43242232</p>
              <div className="footer-logo">
                <a href="https://www.instagram.com/" className='ancher'><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.whatsapp.com/" className='ancher'><i className="fa-brands fa-whatsapp b"></i></a>
                <a href="https://www.facebook.com/" className='ancher'> <i className="fa-brands fa-facebook b"></i></a>
                <a href="https://twitter.com/" className='ancher'> <i className="fa-brands fa-twitter b"></i></a>
              </div>
            </td>
            <td className="footer-td2">
              <h1 className="contact2">Explore</h1>
              <ul className="footer-ul">
                <li className="footer-li" >Home</li>
                <li className="footer-li" >About Us</li>
                <li className="footer-li" >Rooms & Suites</li>
                <li className="footer-li" >News & Events</li>
                <li className="footer-li" >Contacts</li>
                <li className="footer-li" >Terms and Conditions</li>
              </ul>
            </td>
            <td className="footer-td2">
              <h1 className="newsletter">Newsletter</h1>
              <input type="email" name="" id="" className='footer-email' placeholder='Your email' />
              <i class="fa-regular fa-paper-plane email-search"></i>
              <p className='footer-p3'>Receive latest offers and promos
                <br /> without spam. You can cancel anytime.
              </p>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Footer
