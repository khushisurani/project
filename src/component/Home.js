import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DatePicker } from 'antd';
import about from "./image/about.jpg"
import about2 from "./image/about2.jpg"
import video2 from "./video/video2.mp4"
import video from "./video/video.mp4"
import room1 from "./image/room1.jpg"
import room2 from "./image/room2.jpg"
import room3 from "./image/room3.jpg"
import restaurant from "./image/restaurant.jpg"
import statue from "./image/statue.jpg"
import client from "./image/client.jpg"
import clientreview from "./image/client-review.jpg"
import news1 from "./image/news1.jpg"
import news2 from "./image/news2.jpg"
import news3 from "./image/news3.jpg"
const { RangePicker } = DatePicker;



function Home() {

  const Save = () => {
    const int = document.getElementById('int');
    if (int.value === '') {
      alert('Fill Up Detailes:');
    }
    else {
      alert('Form Filled Successful 👍');
    }

    localStorage.setItem("Adults2", JSON.stringify(form.adults2));
    localStorage.setItem("Child2", JSON.stringify(form.child2));

    resetForm();
  }

  const target = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(values => ({ ...values, [name]: value }))
  }

  const [form2, setForm2] = useState([])
  const [form, setForm] = useState({
    adults2: '',
    child2: '',
  });

  const resetForm = () => {
    const newform = [...form2, { form }];
    setForm2(newform);
    setForm('');
  }
  useEffect(() => {
    AOS.init({
      duration: '1000'
    });
  }, []);

  return (
    <>

      <div className="main">
        <video autoPlay loop muted className='video'>
          <source src={video} type="video/mp4" />
        </video>
        <h1 className='main-text'>LUXURY HOTEL EXPERIENCE</h1>
        <h1 className='main-text2'>A UNIQUE EXPERIENCE <br />
          WHERE TO STAY</h1>
        <div className="f" id='form'>
          <RangePicker className='date' id='int' />
          <input type="number" name="adults2" id="int" className='adults2' placeholder='Adults' value={form.adults2} onChange={target} />
          <input type="number" name="child2" id="int" className='child2' placeholder='Child' value={form.child2} onChange={target} />
          <input type="button" value="Submit" className='search' onClick={Save} />
        </div>
      </div>
      {/* #################################################### */}


      <div className="slide4">
        <div className='about-us-image'>
          <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <img src={about} alt="" className='about' />
            <img src={about2} alt="" className='about2' />
          </div>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 className='about-us'>ABOUT US</h1>
            <h1 className='about-us2'>Tailored services and the <br /> experience of unique <br /> holidays</h1>
            <h1 className='about-us3'>Vivamus volutpat eros pulvinar velit laoreet, sit amet <br /> egestas erat dignissim.</h1>
            <p className='about-us4'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br />laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br /> architecto beatae vitae dicta sunt explicabo.
            </p>
            <h1 className='about-us5'>Maria...the Owner</h1>
          </div>
        </div>
      </div><br /><br />
      {/* ############################################# */}
      <div data-aos="zoom-in-up">
        <div className="slide5">
          <video autoPlay loop muted className='video2'>
            <source src={video2} type="video/mp4" />
          </video>
          <p className='video-text'>LUXURY HOTEL EXPERIENCE</p>
          <h1 className='video-text2'>Enjoy in a very <br />
            Immersive Relax</h1>
        </div>
      </div><br /><br /><br />
      {/* ############################################ */}

      <div className="slide6">
        <p className='luxury-experience'>LUXURY EXPERIENCE</p>
        <h1 className='luxury-experience2'>Rooms & Suites</h1>
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="-50">
          <div className="frame">
            <span className="header">FROM $250/NIGHT</span>
            <img className="image" src={room1} draggable="false" alt='room1' />
            <div className="textbox">
              <Link to="room3"> <p className='room2-text3 subheader'>read more</p></Link>
            </div>
          </div>
          <div className="frame">
            <span className="header">FROM $250/NIGHT</span>
            <img className="image" src={room2} draggable="false" alt='room1' />
            <div className="textbox">
              <Link to="room3"> <p className='room2-text3 subheader'>read more</p></Link>
            </div>
          </div>
          <div className="frame">
            <span className="header">FROM $250/NIGHT</span>
            <img className="image" src={room3} draggable="false" alt='room1' />
            <div className="textbox">
              <Link to="room3"> <p className='room2-text3 subheader'>read more</p></Link>
            </div>
          </div>
        </div>
      </div>

      {/* ##################################### */}
      <div className="slide7">
        <p className='services'>PARADISE HOTEL</p>
        <h1 className='services2'>Main Facilities</h1>
        <div className='car-container'>
          <div data-aos="fade-down">
            <i className="fa-solid fa-car car"></i></div>
          <h1 className='private-parking'>Private Parking</h1>
          <p className='private-parking2'>Ut enim ad minima veniam, quis <br /> nostrum exercitationem ullam <br /> corporis suscipit laboriosam.</p>
        </div>
        <div className='car-container'>
          <div data-aos="fade-down">
            <i class="fa-solid fa-wifi car"></i></div>
          <h1 className='private-parking'>High Speed Wifi</h1>
          <p className='private-parking2'>At vero eos et accusamus et iusto <br /> odio dignissimos ducimus qui <br /> blanditiis praesentium.</p>
        </div>
        <div className='car-container'>
          <div data-aos="fade-down">
            <i class="fa-solid fa-martini-glass-citrus car"></i></div>
          <h1 className='private-parking'>Bar & Restaurant</h1>
          <p className='private-parking2'>Similique sunt in culpa qui officia <br /> deserunt mollitia animi, id est <br /> laborum et dolorum fuga.</p>
        </div>
        <div className='car-container'>
          <div data-aos="fade-down">
            <i class="fa-solid fa-water-ladder car"></i></div>
          <h1 className='private-parking'>Swimming Pool</h1>
          <p className='private-parking2'>Nam libero tempore, cum soluta <br /> nobis est eligendi optio cumque <br /> nihil impedit quo minus.</p>
        </div>
        <marquee width="100%" direction="left" height="100px" className="marquee">
          Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience</marquee>
      </div><br /><br /><br />
      <div className="slide8">
        <div data-aos="fade-up">
          <div>
            <img src={restaurant} alt="" className='restaurant' id='img2' />
            <p className='amenities'>LOCAL AMENITIES</p>
            <h1 className='restaurant-text'>Restaurants</h1>
            <p className='restaurant-text2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque <br /> ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br /> dicta sunt explicabo.</p>
            <Link to="page"><button className='Read-more'>Read more</button></Link>
          </div>
        </div>
        <div data-aos="fade-up">
          <img src={statue} alt="" className='restaurant2' />
          <p className='amenities2'>LOCAL AMENITIES</p>
          <h1 className='restaurant-text3'>Art & Culture</h1>
          <p className='restaurant-text4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque <br /> ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br /> dicta sunt explicabo.</p>
          <Link to="page"><button className='Read-more2'>Read more</button></Link>
        </div>
      </div>
      {/* ?################################################## */}
      <div data-aos="zoom-in">
        <div className="slide9">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active carasole" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='carasole'></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='carasole'></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={client} className="d-block w-100" height={500} alt="..." />
                <p className='testimonial'>TESTIMONIALS</p>
                <h1 className='client-text'>What Clients Says</h1>
                <p className='contain'>
                  <img src={clientreview} alt="" className='client-review' />
                  <p className='roberta'>Roberta <br />12 oct</p>
                  <div className='vertical'></div>
                  <p className='comment'> "Mea ad postea meliore fuisset. Timeam repudiare id <br /> eum, ex paulo dictas elaboraret sed, mel cu unum <br /> nostrud."</p>
                </p>
              </div>
              <div className="carousel-item">
                <img src={client} className="d-block w-100" height={500} alt="..." />
                <p className='testimonial'>TESTIMONIALS</p>
                <h1 className='client-text'>What Clients Says</h1>
                <p className='contain'>
                  <img src={clientreview} alt="" className='client-review' />
                  <p className='roberta'>Roberta <br />12 oct</p>
                  <div className='vertical'></div>
                  <p className='comment'> "Mea ad postea meliore fuisset. Timeam repudiare id <br /> eum, ex paulo dictas elaboraret sed, mel cu unum <br /> nostrud."</p>
                </p>
              </div>
              <div className="carousel-item">
                <img src={client} className="d-block w-100" height={500} alt="..." />
                <p className='testimonial'>TESTIMONIALS</p>
                <h1 className='client-text'>What Clients Says</h1>
                <p className='contain'>
                  <img src={clientreview} alt="" className='client-review' />
                  <p className='roberta'>Roberta <br />12 oct</p>
                  <div className='vertical'></div>
                  <p className='comment'> "Mea ad postea meliore fuisset. Timeam repudiare id <br /> eum, ex paulo dictas elaboraret sed, mel cu unum <br /> nostrud."</p>
                </p>
              </div>
            </div>
          </div>
        </div >
      </div>
      {/* ############################################################# */}
      <div className="slide10">
        <p className='exp-text'>LUXURY EXPERIENCE</p>
        <h1 className='exp-text2'>News & Events</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <div className='zoom-wrap2'>
                <img src={news1} className="card-img-top img" alt="..." />
              </div>
              <div className="c">
                11 DEC
              </div>
              <div className="card-body">
                <div className="vertical2">
                  <p>TRAVEL</p>
                </div>
                <h5 className="card-title1">The vacation and travel <br />Guide for experts in 2022</h5>
                <Link to="ne1" className='link'><p className="card-text">Read more</p></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className='zoom-wrap2'>
                <img src={news2} className="card-img-top img" alt="..." />
              </div>
              <div className="c">
                24 DEC
              </div>
              <div className="card-body">
                <div className="vertical2">
                  <p>EVENT</p>
                </div>
                <h5 className="card-title2">Yayoi Kusama: Infinity <br /> Mirror Rooms at Tate <br />  Modern</h5>
                <Link to="ne1" className='link'> <p className="card-text2">Read more</p></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className='zoom-wrap2'>
                <img src={news3} className="card-img-top img" alt="..." />
              </div>
              <div className="c">
                21 DEC
              </div>
              <div className="card-body">
                <div className="vertical2">
                  <p>RESTAURANT</p>
                </div>
                <h5 className="card-title3">Best Local Restaurant in <br />2022</h5>
                <Link to="ne1" className='link'><p className="card-text3">Read more</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;
