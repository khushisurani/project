import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import wood from './image/wood.jpg'
import glass from "./image/glass.jpg"
import food from "./image/food.jpg"
import "./App.scss"
import img1 from "./image/1.jpg"
import img2 from "./image/2.jpg"
import img3 from "./image/3.jpg"
import img4 from "./image/4.jpg"
import img5 from "./image/5.jpg"
import img6 from "./image/6.jpg"
import img7 from "./image/7.jpg"
import img8 from "./image/8.jpg"
import img9 from "./image/9.jpg"
import img10 from "./image/10.jpg"
import img11 from "./image/11.jpg"
import img12 from "./image/1.jpg"
import img13 from "./image/3.jpg"
import img14 from "./image/4.jpg"
import img15 from "./image/5.jpg"
import img16 from "./image/8.jpg"
import img17 from "./image/9.jpg"
import img18 from "./image/6.jpg"
import banner from "./image/banner.svg"



// import starters from "./"
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

function Room() {
  useEffect(() => {
    AOS.init({
      duration: '1000'
    });
  });
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators round">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" id='round2'></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" id='round2'></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" id='round2'></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={wood} className="d-block w-100 img-regrvation" alt="wood-platter-background" />
            <p className='regrvation-rec'>
              <div data-aos="fade-up"
                data-aos-duration="3000">
                <p className='res-text'>RESTAURANT EXPERIENCE</p>
                <h1 className='res-text2'>A UNIQUE EXPERIENCE <br />WHERE TO EAT</h1>
                <Link to='/carasoul'><button className='res-button'>READ MORE</button></Link> 
              </div>
            </p>
          </div>
          <div class="carousel-item">
            <img src={glass} className="d-block w-100 img-regrvation" alt="glass-background" />
            <p className='regrvation-rec'>
              <div data-aos="fade-up"
                data-aos-duration="3000">
                <p className='res-text3'>RESTAURANT EXPERIENCE</p>
                <h1 className='res-text4'>A TRULY TASTE <br />EXPERIENCE</h1>
                <Link to='/carasoul'><button className='res-button2'>READ MORE</button></Link> 
              </div>
            </p>
          </div>
          <div class="carousel-item">
            <img src={food} className="d-block w-100 img-regrvation" alt="food-background-img" />
            <p className='regrvation-rec'>
              <div data-aos="fade-up"
                data-aos-duration="3000">
                <p className='res-text5'>RESTAURANT EXPERIENCE</p>
                <h1 className='res-text6'>THE EXPERIENCE OF <br /> UNIQUE DISHES</h1>
               <Link to='/carasoul'><button className='res-button3'>READ MORE</button></Link> 
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="reservation">
        <p className='reservation-text'>PARADISE HOTEL</p>
        <h1 className='reservation-text2'>The Restaurant</h1>
        <h1 className='reservation-text3'>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab.</h1>
        <p className='reservation-text4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, eaque <br /> ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae <br /> dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit <br /> aspernatur aut odit aut fugit, sed quia consequuntur magni dolores <br /> eos qui ratione voluptatem sequi nesciunt.</p>
        <p className='resservation-text5'>Enjoy...the Chef</p>
        <table className='table2'>
          <tr className='tr2'>
            <span className='span'><td className='td2'>Breakfast</td></span>
            <td className='td2 text'>7.00am – 10.30am</td>
            <div className='line2'></div>

          </tr><br />
          <tr className='tr2'>
            <span className='span'><td className='td2'>Lunch</td></span>
            <td className='td2 text'>12.00am – 2.00pm</td>
            <div className='line2'></div>
          </tr><br />
          <tr className='tr2'>
            <span className='span'> <td className='td2'>Dinner</td></span>
            <td className='td2 text'>open from 7:30pm <br /><p style={{ fontSize: '1.7vh' }}>(kitchen close at 11:30pm)</p></td>
          </tr>
        </table>
        <div className='line'></div>
        <div>
          <p className='res-tex2'>RESERVATION</p>
          <i className="fa-solid fa-phone phone2"></i>
          <p className='no2'>+91 26528 56984</p>
        </div>
      </div>
      <div className='food-table'>

        <input id="panel-1-ctrl"
          class="panel-radios" type="radio" name="tab-radios" checked />
        <input id="panel-2-ctrl"
          class="panel-radios" type="radio" name="tab-radios" />
        <input id="panel-3-ctrl"
          class="panel-radios" type="radio" name="tab-radios" />
        <input id="nav-ctrl"
          class="panel-radios" type="checkbox" name="nav-checkbox" />

        <header id="introduction">
          <p className='food-tabletext'>PARADISE HOTEL</p>
          <h1 className='food-tabletext2'>Restaruant Menu</h1>
        </header>

        <ul id="tabs-list">
          <label id="open-nav-label" for="nav-ctrl"></label>
          <li id="li-for-panel-1">
            <label class="panel-label"
              for="panel-1-ctrl">STARTERS</label>
          </li><li id="li-for-panel-2">
            <label class="panel-label"
              for="panel-2-ctrl">MAIN DISHES</label>
          </li><li id="li-for-panel-3">
            <label class="panel-label"
              for="panel-3-ctrl">DISSERTS</label>
          </li>
          <label id="close-nav-label" for="nav-ctrl">Close</label>
        </ul>

        <article id='panels'>
          <div class="container">
            <section id="panel-1">
              <main>
                <div className='starters'>
                  <div className='starter-contain'>
                    <h1 className='starter-text'>STARTERS SPECIAL OFFER</h1>
                    <h1 className='starter-text2'>Mix Starters Menu $18 only</h1>
                    <p className='starter-text3'>Hamburgher, Chips, Mix Sausages, Beer, Muffin</p>
                   <Link to='/carasoul'><button className='biewmenu'>View Menu</button></Link> 
                    <img src={banner} alt="" className='banner' />
                  </div>
                </div>
                <table>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img1} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>Soft shell crab....................................................$14 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Chicken, Potato, Salad</span></p></td>
                    <td><div className="zoom-wrap"><img src={img2} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Marinated Grilled Shrimp.............................................$11 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Fresh Shrimp, Oive Oil, Tomato Sauce</span></p></td>
                  </tr>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img3} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>
                      Avocado & Mango Salsa...................................$16 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Avocado, Mango, Tomatoes</span></p></td>
                    <td><div className="zoom-wrap"><img src={img4} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Baked Potato Skins......................................................$10 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Potatoes, Oil, Garlic</span></p></td>
                  </tr>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img5} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>Braised Pork Chops..........................................$12 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Pork chops, Olive oil, Garlic</span></p></td>
                    <td><div className="zoom-wrap"><img src={img6} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Cream of Asparagus....................................................$14 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Asparagus, Ootato, Celery, Onion</span></p></td>
                  </tr>
                </table>
              </main>
            </section>
            <section id="panel-2">
              <main>
                <div className='maindishes'>
                  <div className='starter-contain'>
                    <h1 className='starter-text'>SPECIAL OFFER</h1>
                    <h1 className='starter-text2'>Burgher Menu $14 only</h1>
                    <p className='starter-text3'>Hamburgher, Chips, Mix Sausages, Beer, Muffin</p>
                   <Link to='/carasoul'><button className='biewmenu'>View Menu</button></Link> 
                    <img src={banner} alt="" className='banner' />
                  </div>
                </div>
                <table>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img7} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>Prime Rib.............................................................$18 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Rib, Rosemary, Black pepper</span></p></td>
                    <td><div className="zoom-wrap"><img src={img8} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Coconut Fried Chicken..................................................$14 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>8 chicken pieces, Coconut milk</span></p></td>
                  </tr>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img9} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>
                      Sriracha Beef Skewers.......................................$12 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Beef, Garlic, Sesame oil</span></p></td>
                    <td><div className="zoom-wrap"><img src={img10} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Chicken with Garlic........................................................$10 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Chicken, Cherry tomatoes, Olive oil</span></p></td>
                  </tr>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img11} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>Soft shell crab.....................................................$14 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Chicken, Potato, Salad</span></p></td>
                    <td><div className="zoom-wrap"><img src={img12} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Terrific Turkey Chili........................................................$18 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Turkey, Oregano, Tomato paste</span></p></td>
                  </tr>
                </table>
              </main>
            </section>
            <section id="panel-3">
              <main>
                <div className='dissert'>
                  <div className='starter-contain'>
                    <h1 className='starter-text'>DESSERTS SPECIAL OFFER</h1>
                    <h1 className='starter-text2'>Mix Cakes $12 only</h1>
                    <p className='starter-text3'>Cheese cake, Muffin, Sweet bred</p>
                   <Link to='/carasoul'><button className='biewmenu'>View Menu</button></Link> 
                    <img src={banner} alt="" className='banner' />
                  </div>
                </div>
                <table>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img13} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>Summer Berry.......................................................$8 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Raspberries, Blackberries</span></p></td>
                    <td><div className="zoom-wrap"><img src={img14} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Coconut Tart.................................................................$10 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Blueberries, Graham cracker crumbs</span></p></td>
                  </tr>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img15} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>
                      Pumpkin Cookies...............................................$11 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Pumpkin, Sugar, Butter</span></p></td>
                    <td><div className="zoom-wrap"><img src={img16} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Cookies Cream Cheese...............................................$14 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Sugar, Butter, Eggs</span></p></td>
                  </tr>
                  <tr>
                    <td><div className='zoom-wrap'><img src={img17} alt="" className='img1' /></div></td>
                    <td><p className='tablep-text'>Chocolate Cupcakes.........................................$14 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Chocolate, Eggs, Vanilla</span></p></td>
                    <td><div className="zoom-wrap"><img src={img18} alt="" className='img1' /></div> </td>
                    <td><p className='tablep-text'>Chocolate Cupcakes...................................................$14 <br /><span style={{ fontWeight: "500", color: "black", fontSize: "2vh", fontFamily: "cursive" }}>Chocolate, Eggs, Vanilla</span></p></td>
                  </tr>
                </table>
              </main>
            </section>
          </div>
        </article >
        <Link to='/carasoul'><button className='daymenu-btn'>View Day Menu</button></Link>
      </div>




    </>
  )
}

export default Room
