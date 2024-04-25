import React from 'react'
import { useState } from 'react';
import aboutmainimage from "./image/about-mainimage.jpg"
import location from "./image/location.png"
import anvolap from "./image/envelope.png"
import phone from "./image/telephone.png"
import GoogleMapReact from 'google-map-react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
function Blog() {
  const [value, onChange] = useState(new Date());


  const Save = () => {
    const int = document.getElementById('int');
    if (int.value === '') {
      alert('Fill Up Detailes:');
    }
    else {
      alert('Form Filled Successful 👍');
    }
    localStorage.setItem("Firstname", JSON.stringify(form.fname));
    localStorage.setItem("Lastname", JSON.stringify(form.lname));
    localStorage.setItem("Email", JSON.stringify(form.email));
    localStorage.setItem("Number", JSON.stringify(form.number));
    localStorage.setItem("Message", JSON.stringify(form.message));
    localStorage.setItem("Human", JSON.stringify(form.human));
    localStorage.setItem("select", JSON.stringify(form.select));
    localStorage.setItem("Adults", JSON.stringify(form.adults));
    localStorage.setItem("Child", JSON.stringify(form.child));

    resetForm();
    document.getElementById('form').reset();
  }

  const target = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(values => ({ ...values, [name]: value }))
  }

  const [form2, setForm2] = useState([])
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    number: '',
    human: '',
    message: '',
    select: '',
    adults: '',
    child: '',
  });

  const resetForm = () => {
    const newform = [...form2, { form }];
    setForm2(newform);
    setForm('');
  }

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
      <img src={aboutmainimage} alt="about-mainimage" className='about-mainimage' />
      <div className="about-rec">
        <p className='about-text'>LUXURY HOTEL EXPERIENCE</p>
        <h1 className='about-text2'>CONTACT US</h1>
      </div>
      <div className='contact-contain'>
          <h1 className='contact-form'>Get in Touch</h1>
          <form id='form'>
            <input type='text' placeholder='Name' className='username' id='int' name='fname' value={form.fname} onChange={target}></input>
            <input type='text' placeholder='Last Name' className='lastname' id='int' name="lname" value={form.lname} onChange={target}></input><br />
            <input type='email' placeholder='Email' className='username' id='int' name='email' value={form.email} style={{ marginTop: "2vh" }} onChange={target}></input>
            <input type='number' placeholder='Telephone' className='lastname' id='int' name='number' value={form.number} onChange={target}></input><br /><br />
            <textarea type='text' cols="47.5" rows="5" placeholder='Message' className='message' id='int' name='message' value={form.message} style={{ marginTop: "-0.6vh" }} onChange={target} /><br />
            <input type="text" placeholder='Are you human?3+1' className='username' id='int' name='human' value={form.human} style={{ marginTop: "1vh" }} onChange={target} /><br /><br />
            <input type="button" value="Submit" className='submit2' style={{ marginTop: "2vh" }} onClick={Save} />
          </form>

        <div className="side-form">
          <img src={location} height={35} width={35} className='location' alt=''/>
          <h1 className='address'>Address</h1>
          <p className='address-text'>PO Box 97845 Baker st. 567, Los Angeles <br />
            California - US.
          </p> <br /><br /><br /><br /><br />
          <img src={anvolap} height={35} width={35} className='location' alt=''/>
          <h1 className='address'>Email Address</h1>
          <p className='address-text'>booking@Paradise.com - <br /> info@Paradise.com
          </p><br /><br /><br /><br /><br />
          <img src={phone} height={35} width={35} className='location' alt=''/>
          <h1 className='address'>Telephone</h1>
          <p className='address-text'>+ 61 (2) 8093 3402 + 61 (2) 8093 3402 <br />
            <span style={{ fontSize: "2vh", color: "#978697" }}><i> Monday to Friday 9am - 7pm</i></span>
          </p>
        </div>
      </div>
      <div className='map-contain'>
        <div className='map'>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
      <div className='date-picker'>
        <p className='date-text'>PARADISE HOTEL</p>
        <h1 className='date-text2'>Check Availability</h1>
        <p className='date-text3'>Mea nibh meis philosophia eu. Duis legimus efficiantur <br /> ea sea. Id placerat tacimates definitionem sea, prima <br /> quidam vim no. Duo nobis persecuti cu.</p>
        <p className='res-text1'>RESERVATION</p>
        <i class="fa-solid fa-phone phone"></i>
        <p className='no'>+91 26528 56984</p>
        <div className='date-p'>
          <Calendar className="calender1" onChange={onChange} value={value} />
          <Calendar className="calender" onChange={onChange} value={value} />
          <select className='select2' name='select' value={form.select} id='int' onChange={target}>
            <option className='option'>Select Room</option>
            <option className='option'>Double Room</option>
            <option className='option'>Deluxe Room</option>
            <option className='option'>Superior Room</option>
            <option className='option'>Junior Room</option>
          </select>
          <input type="number" name="adults" id="int" value={form.adults} className='adults3' placeholder='Adults' onChange={target} />
          <input type="number" name="child" id="int" value={form.child} className='child3' placeholder='Child' onChange={target} />
        </div>
        <input type='button' value="Book Now" className='book' onClick={Save} />
      </div>
    </>
  )
}

export default Blog
