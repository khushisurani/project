import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
// import avtar1 from './image/avatar1.jpg'
function Homepage() {
    const profilePIcDefault =
        "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [gender, setgender] = useState("");
    const [img] = useState(profilePIcDefault);
    const [checked, setchecked] = useState(false);
    const InputRef = useRef(null);
    const [img2, setImg2] = useState();


    const imgClick = () => {                       // profile img 
        InputRef.current.click();
    }
    const imgClickChange = (event) => {                 // profile img
        const file = event.target.files[0];
        console.log(file);
        setImg2(event.target.files[0])
    }
    // const handle = (event) => {                      // profile img
    //     setText(event.target.value);
    // }
    // covert img
    // const getBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.onload = () => resolve(reader.result);
    //         reader.onabort = (error) => reject(error);
    //         reader.readAsDataURL(file);
    //     });
    // };
    // handle img
    // const handleImg = (e) => {
    //     const file = e.target.files[0];
    //     getBase64(file).then((base64) => {
    //         localStorage["img"] = base64;
    //         console.debug("File Store", base64);
    //     });
    // };

    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "") {
            toast.error("Name Is Required");
        } else if (email === "") {
            toast.error("Email Is Required");
        } else if (password === "") {
            toast.error("Password is Required");
        } else {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("img", img);
            localStorage.setItem("img2", img2);
            localStorage.setItem("gender", gender);
            localStorage.setItem("terms", checked);
            toast.success("User Saved!");
        }
    };
    return (
        <>
            <div className="row border p-4 homepage" style={{ marginTop: "1vh" }}>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            User Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            className="form-control"
                            id="exampleInputName"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="d-flex flex-row">
                        Gender :
                        <div className="form-check ms-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="Gender"
                                value="Male"
                                defaultChecked={gender === "Male"}
                                onClick={(e) => setgender(e.target.value)}
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check ms-2">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="Gender"
                                value="Female"
                                defaultChecked={gender === "Female"}
                                onClick={(e) => setgender(e.target.value)}
                                id="flexRadioDefault2"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="form-check mt-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={checked}
                            onChange={(e) => setchecked(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            I Acept Terms And Conditions
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="form__submit-btn"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>

                {/* <div className="col-md-4 ">
                    <div className="profile_section">
                        <p>Select Profile Picture :</p>
                        <img
                            src={profilePIcDefault}
                            alt="profile_pic"
                            name="file"
                            className="img-thumbnail"
                            height={250}
                            width={250}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                            Default file input example
                        </label>
                        <input
                            className="form-control"
                            type="file"
                            onChange={handleImg}
                            name="file"
                            id="formFile"
                        />
                    </div>
                </div> */}
                <div className="profileset" onClick={imgClick}>
                    {img2 ?
                        <img src={URL.createObjectURL(img2)} alt='img' style={{ position: 'absolute', height: '30vh', width: '30vh', borderRadius: '50%', marginLeft: '60%', marginTop: '-45vh' }} /> :
                        <img src={profilePIcDefault} alt="avtar" style={{ position: 'absolute', height: '30vh', width: '30vh', borderRadius: '50%', border: '1px solid grey', marginLeft: '60%', marginTop: '-45vh' }} name="file" className="img-thumbnail" />
                    }
                    <input type="file" ref={InputRef} onChange={imgClickChange} style={{ position: 'absolute', display: 'none', marginLeft: '60%', marginTop: '-45vh' }} name="file"
                        id="formFile" className="form-control" />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Homepage
