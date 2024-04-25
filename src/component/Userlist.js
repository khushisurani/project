import React from "react";
// import Hea from "../Page/Hea";
// import Nav from "./Nav";
function Userlist() {
    const profilePIcDefault =
        "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

    return (
        <>
            <div className="userlist">
                <div className="row" style={{ marginTop: "5vh" }}>
                    <div className="col-md-4">
                        <div className="d-flex flex-column align-items-center ">
                            <img
                                src={
                                    localStorage.getItem("img")
                                        ? localStorage.getItem("img")
                                        : profilePIcDefault
                                }
                                alt="profile_pic"
                                className="img-thumbnail"
                                height={200}
                                width={200}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center" style={{ marginTop: "-20vh" }}>
                        <div className="ms-4">
                            <h4>
                                Name :{" "}
                                {localStorage.getItem("name")
                                    ? localStorage.getItem("name")
                                    : "NA"}
                            </h4>
                            <h4>
                                Email :{" "}
                                {localStorage.getItem("email")
                                    ? localStorage.getItem("email")
                                    : "NA"}
                            </h4>
                            <h4>
                                Gender :{" "}
                                {localStorage.getItem("gender")
                                    ? localStorage.getItem("gender")
                                    : "NA"}
                            </h4>
                            <p>
                                Accepted Terms And Conditions :{" "}
                                {localStorage.getItem("terms") ? "YES" : "No"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
        </>
    )
}

export default Userlist
