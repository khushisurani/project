import React from 'react'
import { Link } from "react-router-dom";
import aboutmainimage from "./image/about-mainimage.jpg"
import news1 from "./image/news1.jpg"
import news2 from "./image/news2.jpg"
import news3 from "./image/news3.jpg"
import news4 from "./image/camera.jpg"
import news5 from "./image/blog-4.jpg"
import news6 from "./image/blog-6.jpg"

function Reservation() {
  return (
    <>
      <img src={aboutmainimage} alt="about-mainimage" className='about-mainimage' />
      <div className="about-rec">
        <p className='about-text'>LUXURY HOTEL EXPERIENCE</p>
        <h1 className='about-text2'>NEWS AND EVENTS</h1>
      </div>
      <div className="slide10" style={{ height: "170vh" }}>
        <div class="row row-cols-1 row-cols-md-3 g-4" style={{ marginTop: "5vh" }}>
          <div class="col">
            <div class="card">
              <div className='zoom-wrap2'>
                <img src={news1} class="card-img-top img" alt="..." />
              </div>
              <div className="c">
                11 DEC
              </div>
              <div class="card-body">
                <div className="vertical2">
                  <p>TRAVEL</p>
                </div>
                <h5 class="card-title1">The vacation and travel <br />Guide for experts in 2022</h5>
                <Link to="/ne1" className='link'><p class="card-text">Read more</p></Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div className='zoom-wrap2'>
                <img src={news2} class="card-img-top img" alt="..." />
              </div>
              <div className="c">
                24 DEC
              </div>
              <div class="card-body">
                <div className="vertical2">
                  <p>EVENT</p>
                </div>
                <h5 class="card-title2">Yayoi Kusama: Infinity <br /> Mirror Rooms at Tate <br />  Modern</h5>
                <Link to="ne1" className='link'><p class="card-text2" style={{ marginTop: "3vh" }}>Read more</p></Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div className='zoom-wrap2'>
                <img src={news3} class="card-img-top img" alt="..." />
              </div>
              <div className="c">
                21 DEC
              </div>
              <div class="card-body">
                <div className="vertical2">
                  <p>RESTAURANT</p>
                </div>
                <h5 class="card-title3">Best Local Restaurant in <br />2022</h5>
                <Link to="ne1" className='link'><p class="card-text3" style={{ marginTop: "6vh" }}>Read more</p></Link>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4" style={{ marginTop: "75vh" }}>
          <div class="col">
            <div class="card">
              <div className='zoom-wrap2'>
                <img src={news4} class="card-img-top img" alt="..." />
              </div>
              <div className="c">
                11 OCT
              </div>
              <div class="card-body">
                <div className="vertical2">
                  <p>GUIDE</p>
                </div>
                <h5 class="card-title1">Top 15 things to do and <br />Discover story-worthy <br />travel moments</h5>
                <Link to="ne1" className='link'> <p class="card-text">Read more</p></Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div className='zoom-wrap2'>
                <img src={news5} class="card-img-top img" alt="..." />
              </div>
              <div className="c">
                8 DEC
              </div>
              <div class="card-body">
                <div className="vertical2">
                  <p>EVENT</p>
                </div>
                <h5 class="card-title2">Bix Meeting 2023</h5>
                <p class="card-text2" style={{ marginTop: "10.5vh" }}>Read more</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div className='zoom-wrap2'>
                <img src={news6} class="card-img-top img" alt="..." />
              </div>
              <div className="c">
                20 OCT
              </div>
              <div class="card-body">
                <div className="vertical2">
                  <p>NEWS</p>
                </div>
                <h5 class="card-title2">Cycling tour October <br />2022</h5>
                <p class="card-text2" style={{ marginTop: "8.5vh" }}>Read more</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="reservation" className="pagination-btn active" >1</a>
          <a href="page2" className='pagination-btn'>2</a>
          <a href="page2" className='pagination-btn'>&raquo;</a>
        </div>
      </div>
    </>
  )
}

export default Reservation
