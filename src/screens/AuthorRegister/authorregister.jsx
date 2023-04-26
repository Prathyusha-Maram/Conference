import "./authorregister.css"
import { InputField } from "../../components/InputField/inputfield"
import { Label } from "../../components/Label/label"
import { OrComponent } from "../../components/OrComponent/orcomponent.jsx"
import { UilGoogle, UilFacebook, UilGithub, UilTwitter } from '@iconscout/react-unicons'
import GreenButton from "../../components/Button/button.jsx"
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const AuthorRegister = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [interests, setInterests] = useState('');
    const [interestsError, setInterestsError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        // handle form submission

        if (firstName.trim() === '') {
            setFirstNameError('First name is required');
        } else {
            setEmailError('First name is required');
        }



        if (lastName.trim() === '') {
            setLastNameError('Last name is required');
        } else {
            setLastNameError('');
        }


        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Email address is invalid');
        } else {
            setEmailError('');
        }


        if (confirmEmail !== email) {
            setConfirmEmailError('Email addresses do not match');
        } else {
            setConfirmEmailError('');
        }


        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
        } else {
            setPasswordError('');
        }


        if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }

        if (interests == "") {
            setInterestsError('Areas of interes is mandatory');
        } else {
            setInterestsError('');
        }
        //   console.log(userData);
        if (firstName !== "" && lastName !== "" && email !== "" && confirmEmail !== "" && password !== "") {
            var userData = { "FirstName": firstName, "LastName": lastName, "Email": email, "Password": password, "Aoi": interests }
            formData.append('FirstName', userData.FirstName)
            formData.append('LastName', userData.LastName)
            formData.append('Email', userData.Email)
            formData.append('Password', userData.Password)
            formData.append('Aoi', userData.Aoi)
            // console.log(formData.get('title'));
            // axios.post('http://localhost:3001/', userData).then((response) => {
            //     console.log('Came here');
            //     console.log(response.status, response.data);
            // }).catch(e => {
            //     console.log(e);
            // })
            fetch("http://127.0.0.1:5000/", {
                 method: 'POST', mode: 'no-cors', body: formData
            }).then(data =>{console.log("Hi");navigate("/author/home")} ).catch(err => console.log(err))
        }

    };




    return (
        <>
            <div className="authorC">
                <div className="authorLogin" style={{ margin: "40px 0" }}>
                    <h3 style={{ color: "#006747", marginBottom: "10px" }}>Register</h3>
                    <form onSubmit={handleSubmit}>

                        <div className="nameContainer" style={{ display: 'flex' }}>
                            <div>
                                <Label value={"First Name"} />
                                <input
                                    type={'text'} className={`form-control ${firstNameError ? 'is-invalid' : ''}`} id="firstName"
                                    placeholder="Enter your first name"
                                    value={firstName} style={{ width: "35rem" }}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                            </div>
                            <div style={{ marginLeft: "20px" }}>
                                <Label value={"Last name"} />
                                <input
                                    type={'text'} className={`form-control ${lastNameError ? 'is-invalid' : ''}`} id="lastName"
                                    placeholder="Enter your Last name"
                                    value={lastName} style={{ width: "35rem" }}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                            </div>
                        </div>

                        <div className="emailContainer" style={{ display: "flex" }}>
                            <div>
                                <Label value={"Email Address"} />
                                <input
                                    type={'text'} className={`form-control ${emailError ? 'is-invalid' : ''}`} id="email"
                                    placeholder="Enter your email"
                                    style={{ width: "35rem" }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <div className="invalid-feedback">{emailError}</div>}


                            </div><div style={{ marginLeft: "20px" }}>
                                <Label value={"Confirm email Address"} />
                                <input
                                    type={'text'} className={`form-control ${confirmEmailError ? 'is-invalid' : ''}`} id="confirmEmail"
                                    placeholder="Enter your confirm email"
                                    value={confirmEmail} style={{ width: "35rem" }}
                                    onChange={(e) => setConfirmEmail(e.target.value)}
                                />
                                {confirmEmailError && <div className="invalid-feedback">{confirmEmailError}</div>}

                            </div>
                        </div>

                        <div className="emailContainer" style={{ display: "flex" }}>
                            <div>
                                <Label value={"Password"} />
                                <input
                                    type={'text'} className={`form-control ${passwordError ? 'is-invalid' : ''}`} id="password"
                                    placeholder="Enter your Password"
                                    value={password} style={{ width: "35rem" }}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <div className="invalid-feedback">{passwordError}</div>}

                            </div>
                            <div style={{ marginLeft: "20px" }}>
                                <Label value={"Confirm password"} />
                                <input
                                    type={'text'} className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`} id="confirmpassword"
                                    placeholder="Enter your  confirm Password"
                                    value={confirmPassword} style={{ width: "35rem" }}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}

                            </div>
                        </div>
                        <Label value={"Areas of interest"} />
                        <input
                            type={'text'} className={`form-control ${interestsError ? 'is-invalid' : ''}`} id="interests"
                            placeholder="Enter your areas of interests"
                            value={interests} style={{ width: "72rem" }}
                            onChange={(e) => setInterests(e.target.value)}
                        />
                        {interestsError && <div className="invalid-feedback">{interestsError}</div>}
                        <br />
                        <button className="greenbutton" style={{ backgroundColor: "#006747", border: "none", padding: "10px 0", color: "#fff", width: "72rem" }} onClick={handleSubmit} >Register</button>
                    </form>
                    <p style={{ marginTop: "10px", fontSize: "15px" }}>Already have an account? <a href="/author/login" style={{ color: "#006747" }}>Login here</a></p>
                    <p><a href="/login" style={{ color: "#006747" }}>Go back</a></p>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <OrComponent />
                    </div>
                    <p style={{ color: "#111", fontSize: "14px" }}>Register with </p>
                    <div className="iconsContainer">
                        <UilGoogle />
                        <UilFacebook />
                        <UilGithub />
                        <UilTwitter />
                    </div>
                </div>
            </div>
        </>
    );
};
