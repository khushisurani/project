import React from 'react'
import { useState } from 'react';
import s1 from './image/s1.jpg'
import s2 from './image/s2.jpg'
import s3 from './image/s3.jpg'
import s4 from './image/s4.jpg'
import s5 from './image/s5.jpg'
import ss1 from './image/ss1.jpg'
import d from './image/d.jpg'

function Carasoul() {
    const images = [
        s3,
        s1,
        s2,
        ss1,
        s4,
        s5,
    ];

    const [selectedIdx, setSelectedIdx] = useState(3);

    const moveToSelected = (element) => {
        if (element === 'next') {
            setSelectedIdx((prevIdx) => (prevIdx + 1) % images.length);
        } else if (element === 'prev') {
            setSelectedIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
        } else {
            setSelectedIdx(element);
        }
    };
    return (
        <>
            <main>
                <img src={d} className='car-mainimg' alt='' />
                <div className='carcon'>
                </div>
                <div id="carousel">
                    {images.map((url, idx) => (
                        <div key={idx}
                            className={
                                idx === selectedIdx
                                    ? 'selected'
                                    : idx === selectedIdx - 1 || (selectedIdx === 0 && idx === images.length - 1)
                                        ? 'prev'
                                        : idx === selectedIdx + 1 || (selectedIdx === images.length - 1 && idx === 0)
                                            ? 'next'
                                            : idx === selectedIdx - 2 || (selectedIdx === 0 && idx === images.length - 2)
                                                ? 'prevLeftSecond'
                                                : idx === selectedIdx + 2 || (selectedIdx === images.length - 1 && idx === 1)
                                                    ? 'nextRightSecond'
                                                    : 'hideLeft'
                            } onClick={() => moveToSelected(idx)}>
                            <img src={url} alt={`${idx}`} />
                        </div>
                    ))}
                </div>
            </main >
        </>
    )
}

export default Carasoul
