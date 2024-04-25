import React, { useEffect } from 'react'
import aboutmainimage from "./image/about-mainimage.jpg"
import about from "./image/about_1.jpg"
import about2 from "./image/home_1.jpg"
import restaurant from "./image/restaurant.jpg"
import hill from "./image/hill.jpg"
import statue from "./image/statue.jpg"
import client from "./image/client.jpg"
import clientreview from "./image/client-review.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page() {
  useEffect(() => {
    AOS.init({
      duration: '1000'
    });
  }, []);

  return (
    <>
      <img src={aboutmainimage} alt="about-mainimage" className='about-mainimage' />
      <div className="about-rec">
        <p className='about-text'>LUXURY HOTEL EXPERIENCE</p>
        <h1 className='about-text2'>ABOUT PARADISE</h1>
      </div>
      <div className="slide4">
        <div className='about-us-image'>
          <div data-aos="fade-right">
            <img src={about} alt="" className='about3' />
            <img src={about2} alt="" className='about4' /></div>
          <div data-aos="fade-left">
            <h1 className='about-us6'>PARADISE HOTEL</h1>
            <h1 className='about-us7'>Our History</h1>
            <p className='about-us8'>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab.</p>
            <p className='about-us9'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque <br /> ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br /> dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit <br /> aspernatur aut odit aut fugit, sed quia consequuntur magni dolores <br /> eos qui ratione voluptatem sequi nesciunt. <br /><br />

              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse <br /> quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat <br /> quo.
            </p><br /><br /><br />
            <h1 className='about-us10'>Maria...the Owner</h1></div>
        </div>
      </div>
      <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <div className="slider">
        <p className='slider-about'>PARADISE HOTEL</p>
        <h1 className='slider-about2'>Local Amenities</h1>
        <p className='slider-about3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque <br /> ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br /> dicta sunt explicabo.</p>
        <i className="fa-solid fa-star start"></i>
        <h1 className='slider-about4'>Local Restaurants</h1>
        <p className='slider-about5'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit <br /> amet, consectetur.</p>
        <i className="fa-solid fa-star start2"></i>
        <h1 className='slider-about6'>Nature</h1>
        <p className='slider-about7'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit <br /> esse quam nihil molestiae consequatur.</p>
        <i className="fa-solid fa-star start3"></i>
        <h1 className='slider-about8'>Art and Culture</h1>
        <p className='slider-about9'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut <br /> odit aut fugit.</p>
        <div>
        </div>
        <div className='scroll'>
          <img src={restaurant} alt="restaurant" className='restaurant-about' />
          <img src={hill} alt="hill" className='hill' />
          <img src={statue} alt="statue" className='statue' />
        </div>
      </div></div>
      <br /><br /><br /><br />
      <div data-aos="zoom-out">
      <div className="slide9">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active carasole" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='carasole'></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='carasole'></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={client} class="d-block w-100" height={500} alt="..." />
              <p className='testimonial'>TESTIMONIALS</p>
              <h1 className='client-text'>What Clients Says</h1>
              <p className='contain'>
                <img src={clientreview} alt="" className='client-review' />
                <p className='roberta'>Roberta <br />12 oct</p>
                <div className='vertical'></div>
                <p className='comment'> "Mea ad postea meliore fuisset. Timeam repudiare id <br /> eum, ex paulo dictas elaboraret sed, mel cu unum <br /> nostrud."</p>
              </p>
            </div>
            <div class="carousel-item">
              <img src={client} class="d-block w-100" height={500} alt="..." />
              <p className='testimonial'>TESTIMONIALS</p>
              <h1 className='client-text'>What Clients Says</h1>
              <p className='contain'>
                <img src={clientreview} alt="" className='client-review' />
                <p className='roberta'>Roberta <br />12 oct</p>
                <div className='vertical'></div>
                <p className='comment'> "Mea ad postea meliore fuisset. Timeam repudiare id <br /> eum, ex paulo dictas elaboraret sed, mel cu unum <br /> nostrud."</p>
              </p>
            </div>
            <div class="carousel-item">
              <img src={client} class="d-block w-100" height={500} alt="..." />
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
      </div><br /><br /><br />

      <div className="slide7">
        <p className='services'>PARADISE HOTEL</p>
        <h1 className='services2'>Main Facilities</h1>
        <div className='car-container'>
        <div data-aos="fade-down"> <i className="fa-solid fa-car car"></i></div>
          <h1 className='private-parking'>Private Parking</h1>
          <p className='private-parking2'>Ut enim ad minima veniam, quis <br /> nostrum exercitationem ullam <br /> corporis suscipit laboriosam.</p>
        </div>
        <div className='car-container'>
        <div data-aos="fade-down"><i class="fa-solid fa-wifi car"></i></div>
          <h1 className='private-parking'>High Speed Wifi</h1>
          <p className='private-parking2'>At vero eos et accusamus et iusto <br /> odio dignissimos ducimus qui <br /> blanditiis praesentium.</p>
        </div>
        <div className='car-container'>
        <div data-aos="fade-down"><i class="fa-solid fa-martini-glass-citrus car"></i></div>
          <h1 className='private-parking'>Bar & Restaurant</h1>
          <p className='private-parking2'>Similique sunt in culpa qui officia <br /> deserunt mollitia animi, id est <br /> laborum et dolorum fuga.</p>
        </div>
        <div className='car-container'>
        <div data-aos="fade-down"><i class="fa-solid fa-water-ladder car"></i></div>
          <h1 className='private-parking'>Swimming Pool</h1>
          <p className='private-parking2'>Nam libero tempore, cum soluta <br /> nobis est eligendi optio cumque <br /> nihil impedit quo minus.</p>
        </div>
        <marquee width="100%" direction="left" height="100px" className="marquee">
          Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience. Relax Enjoy Luxury Holiday Travel Discover Experience
        </marquee>
        <hr />
      </div><br /><br /><br />

      <div className="accordian2">
        <p className='aco-text'>PARADISE HOTEL FAQ</p>
        <h1 className='aco-text2'>Frequently Questions</h1>
        <p className='aco-text3'>Can’t find your question in the list? Let us know your <br /> questions.</p>
        <p className='aco-text4'>Contact Us</p>
        <div className="accordion" id="accordionExample">
          <div class="accordion-item khu">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong> Cancellation</strong>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Nihil anim keffiyeh helvetica, craft beer labore wes <br /> proident. Ad vegan excepteur butcher vice lomo. Leggings <br /> raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore <br /> sustainable VHS.
              </div>
            </div>
          </div>
          <div class="accordion-item khu">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong> Payments</strong>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Nihil anim keffiyeh helvetica, craft beer labore wes <br /> proident. Ad vegan excepteur butcher vice lomo. Leggings <br /> raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore <br /> sustainable VHS.
              </div>
            </div>
          </div>
          <div class="accordion-item khu">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Check In/Out Rules</strong>
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Nihil anim keffiyeh helvetica, craft beer labore wes <br /> proident. Ad vegan excepteur butcher vice lomo. Leggings <br /> raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore <br /> sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
