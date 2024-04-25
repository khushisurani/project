import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    //getting email password
    const userName = localStorage.getItem("email")
        ? localStorage.getItem("email")
        : "admin@admin.com";
    const userPassword = localStorage.getItem("password")
        ? localStorage.getItem("password")
        : "admin";

    //submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === userName && password === userPassword) {
            toast.success("Login Success");
            navigate("/profile");
        } else {
            toast.error("Invalid Email OR password");
        }
    };

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
        localStorage.setItem("Date", JSON.stringify(form.date));

        resetForm();
        // document.getElementById('form').reset();
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
        date: '',
    });

    const resetForm = () => {
        const newform = [...form2, { form }];
        setForm2(newform);
        setForm('');
    }

    return (
        <>
            <div className="form__container d-flex felx-column align-items-center justify-content-center">
                <form>
                    <h4 className="form__heading">User Management System </h4>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="form__signupLink mb-3">
                        <p>
                            Don't Have An Account? <Link to="/" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Signup !</Link>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">sign form:</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" id="form">
                                            <label htmlFor="" className="lable">First Name:</label>
                                            <input type="text" className="first" name="fname" value={form.fname} onChange={target} id="int" /><br /><br />
                                            <label htmlFor="" className="lable">Last Name:</label>
                                            <input type="text" className="first" name="lname" value={form.lname} onChange={target} id="int" /><br /><br />
                                            <label htmlFor="" className="lable">E-mail:</label>
                                            <input type="email" className="first" name="email" value={form.email} onChange={target} id="int" /><br /><br />
                                            <label htmlFor="" className="lable">Birth Date:</label>
                                            <input type="date" className="first" name="date" value={form.date} onChange={target} id="int" />

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <input type="button" class="btn btn-primary" value='Savechanges' onClick={Save} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                    <button type="submit" className="form__button" onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login
