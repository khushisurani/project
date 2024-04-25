import React from 'react'
import avtar1 from "./image/avatar1.jpg"
import avatr2 from "./image/avatar2.jpg"

function Room4() {
  return (
    <>
        <div className="room4-img">
                <div className="room2-con">
                    <p className='room2-ptext'>LUXURY HOTEL EXPERIENCE</p>
                    <h1 className='room2-ptext2'>SIERRA DOUBLE ROOM</h1>
                    <p className='room2-ptext3'>Exquisite furnishings for a cosy ambience</p>
                </div>
            </div>
            <div className="room2-con2">
                <p className='room2-con2-text'>LUXURY EXPERIENCE</p>
                <h1 className='room2-con2-text2'>A deeply space that <br /> invites you to truly <br /> Switch Off.</h1>
                <p className='room2-con2-text3'>The dark wood panelling and furnishings, deluxe red- <br />draped four-poster bed, and magnificent black stone <br /> bathroom evoke the charm of a secluded Sierra <br /> Nevada getaway. The intimate scale and finish give the <br /> room a distinctly personal feel.</p>

                <p className='room2-con2-text4'>The dark wood panelling and furnishings, deluxe red- <br />draped four-poster bed, and magnificent black stone <br /> bathroom evoke the charm.</p>
                <table className='room2-table'>
                    <tr>
                        <td className='room2-td'><i class="fa-solid fa-bed"></i><span className='room2-span'>King Size Bed</span></td>
                        <td className='room2-td'><i class="fa-solid fa-person-shelter"></i><span className='room2-span'>Safety Box</span></td>
                        <p className='room2-line'></p>
                    </tr>
                    <tr>
                        <td className='room2-td'><i class="fa-solid fa-tv"></i><span className='room2-span'>32 Inch TV</span></td>
                        <td className='room2-td'><i class="fa-solid fa-dog"></i><span className='room2-span'>Pet Allowed</span></td>
                        <p className='room2-line'></p>
                    </tr>
                    <tr>
                        <td className='room2-td'><i class="fa-solid fa-person-walking-with-cane"></i><span className='room2-span dis'>Disable Access</span></td>
                        <td className='room2-td'><i class="fa-solid fa-wine-bottle"></i><span className='room2-span wel'>Welcome Bottle</span></td>
                        <p className='room2-line'></p>
                    </tr>
                    <tr>
                        <td className='room2-td'><i class="fa-solid fa-wifi"></i><span className='room2-span'>Wifi / Netflix access</span></td>
                        <td className='room2-td'><i class="fa-solid fa-tent"></i><span className='room2-span'>Loundry Service</span></td>
                        <p className='room2-line'></p>
                    </tr>
                    <tr>
                        <td className='room2-td'><i class="fa-solid fa-paint-roller"></i><span className='room2-span air'>Air Dryer</span></td>
                    </tr>
                </table>
            </div>
            <div className="news3">
                <h1 className='news3-text'>Comments</h1>
                <img src={avtar1} alt="" className='avtar1' />
                <div className="avtar-con">
                    <p className='news3-text2'>By Anna Smith|25/10/2019|Reply</p>
                    <p className='news3-text3'>Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. <br />Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis <br /> parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam <br /> vel enim ipsum, et congue ante.</p>
                </div>
                <img src={avatr2} alt="" className='avtar2' />
                <div className="avtar-con2">
                    <p className='news3-text4'>By Anna Smith|25/10/2019|Reply</p>
                    <p className='news3-text5'>Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. <br />Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis <br /> parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam <br /> vel enim ipsum, et congue ante.
                        <br /><br />
                        Aenean iaculis sodales dui, non hendrerit lorem rhoncus ut. Pellentesque ullamcorper <br /> venenatis elit idaipiscingi Duis tellus neque, tincidunt eget pulvinar sit amet, rutrum nec <br /> urna. Suspendisse pretium laoreet elit vel ultricies. Maecenas ullamcorper ultricies rhoncus. <br /> Aliquam erat volutpat.
                    </p>
                </div>
                <img src={avtar1} alt="" className='avtar3' />
                <div className="avtar-con3">
                    <p className='news3-text6'>By Anna Smith|25/10/2019|Reply</p>
                    <p className='news3-text7'>Cursus tellus quis magna porta adipiscin</p>
                </div>
            </div>
    </>
  )
}

export default Room4
