import { useRef, useState } from "react";
import * as ReactDOM from 'react-dom';
import style from '../sub.css'
import Word from "../Word";
import { Formik, Field, Form, useFormik } from "formik";
import { basicSchema } from "../Validations";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Paper() {
    const [test, settest] = useState([]);
    const [keyword, setkeyword] = useState([]);
    const [emails, setemails] = useState([]);
    const onSubmit = (values, action) => {
        alert('Submission Successful')
        console.log(values)
        console.log(test)
        console.log(emails)

    }
    const [selectedOptions, setSelectedOptions] = useState([]);

    function handleSelectChange(selectedOptions) {
        var keyarr = []
        if (keyword.length > 2) {
            // seterrKey("Cant choose more than 3")
        }
        else {
            seterrKey("")
        }
        selectedOptions.forEach(element => {
            keyarr.push(element.label)
        });
        setkeyword(keyarr)
        setSelectedOptions(keyarr)
        console.log(keyarr);
        // setSelectedOptions([...selectedOptions[0].label]);
    }
    const keywords = [
        { label: "Machine Learning", value: 1 },
        { label: "Artificial Intelligence", value: 2 },
        { label: "Big Data", value: 3 },
        { label: "Neural Networks", value: 4 },
        { label: "Cloud Computing", value: 5 },
        { label: "Cyber Security", value: 6 },
        { label: "Robotics", value: 7 },
        { label: "Programming", value: 8 },
        { label: "IOT", value: 9 },
        { label: "Blockchain", value: 10 },
        { label: "Hyper Automation", value: 11 },
        { label: "Extended Reality", value: 12 },
        { label: "Quantum Computing", value: 13 },
        { label: "Nanotechnology", value: 14 },
    ];
    const keywordsDum = []
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            title: "",
            abs: "",
            keyws: "",
            email: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    })
    const [errKey, seterrKey] = useState();
    const [errEm, seterrrEm] = useState();
    const remove = (some, what) => {
        var newArra = [];

        if (what == "key") {
            keyword.map(element => {
                if (element == keyword[some]) {

                }
                else {
                    newArra.push(element)
                }
            })
            setkeyword(newArra)
            if (keyword.length < 5) {
                seterrKey()
            }
        }
        else if (what == "TestKey") {
            var node = document.getElementById("keyws");
            var nav = ReactDOM.findDOMNode(node)
            nav.value = nav.value.replace(test[some] + ',', "");
            nav.value = nav.value.replace(test[some], "");
            nav.value = nav.value.replace(test[some] + " ,", "");
            test.map(element => {
                if (element == test[some]) {

                }
                else {
                    newArra.push(element)
                }
            })
            settest(newArra)
        }
        else {
            emails.map(element => {
                if (element == emails[some]) {

                }
                else {
                    newArra.push(element)
                }
            })
            setemails(newArra)
        }

    }
    const [checked, setChecked] = useState(true);
    const handleKey = (what) => {
        if (what == "key") {
            console.log("this is key")
            var node = document.getElementById("keyIn");
            var nav = ReactDOM.findDOMNode(node)
            var value = nav.value
            if (value != "" && !/^ *$/.test(value)) {
                if (keyword.length < 5) {
                    seterrKey()
                    setkeyword([...keyword, value])
                }
                else {
                    seterrKey("Cannot add more then 5 keywords")
                }
            }
            nav.value = ""
        }
        else if (what == 'email') {
            console.log("this is email")
            var node = document.getElementById("email");
            var nav = ReactDOM.findDOMNode(node)
            var value = nav.value
            if (!errors.email && (value.includes(".com") || value.includes(".edu"))) {
                if (emails.length < 5) {
                    setemails([...emails, value])
                    seterrrEm()
                } else {
                    seterrrEm("Cannot add more than 5 Emails")
                }
            }
            else {
                seterrrEm("Enter a valid email")
            }
            nav.value = ""
        }

    }
  
    const keywordHandle = (event) => {
        if (event.target.value.length == 0) {
            settest([])

        }
        else {
            var array = event.target.value.split(',');
            var newArra = []
            if (array.includes('')) {
                array.map(element => {
                    if (element == '') {

                    }
                    else {
                        newArra.push(element)
                    }
                })
                settest(newArra)
            }
            console.log(array);
        }
    }
    return (
        <div className="paper" >
            <form className="form" onSubmit={handleSubmit}>

                <label>Title</label>

                <input
                    className={(errors.title && touched.title) ? "error" : null}
                    type="text"
                    onBlur={handleBlur}
                    value={values.title} id="title" onChange={handleChange} placeholder={'Enter Title'} />
                {(errors.title && touched.title) ? <p className="error">{errors.title}</p> : null}

                <label>Abstract</label>
                <textarea className={(errors.abs && touched.abs) ? "error" : null}
                    onBlur={handleBlur}
                    id="abs" value={values.abs} onChange={handleChange} name="" cols="30" rows="10" placeholder={'Type in the Abstract'} ></textarea>
                {(errors.abs && touched.abs) ? <p className="error">{errors.abs}</p> : null}
                <label>Keywords</label>
                <div>
                    <Select id="keyws"
                        
                        isMulti
                        // value={selectedOptions}
                        onChange={handleSelectChange} options={(keyword.length > 2) ? { keywordsDum } : keywords} />
                </div>
                {/* {(errKey != "") ? <p className="error">Cant select more than 3</p> : null} */}
                {/* <input id="keyws"
                    className={(errors.keyws && touched.keyws) ? "error" : null}
                    type="text"
                    onBlur={handleBlur}
                    value={values.keyws}
                    placeholder="Enter keyword seperated by ,"
                    onKeyDown={(event) => { keywordHandle(event) }}
                    onChange={handleChange} /> */}
                {(errors.keyws && touched.keyws) ? <p className="error">{errors.keyws}</p> : null}
                {/* <div style={{ width: 'fit-content', background: 'transparent', display: "flex", flexDirection: "row", flexWrap: "wrap", margin: '0 auto' }}>
                    {test.map((word, index) =>
                        <div>
                            <Word iskey={'yes'} word={word} key={index}></Word>
                        </div>
                    )}
                </div> */}
                <label htmlFor="Group">Is this a group submission?
                    <input type="checkbox" onChange={() => { setChecked(!checked) }} id="vehicle1" name="vehicle1" value="Group" />
                </label>
                {
                    checked ? null : <div>
                        <label htmlFor="">Email</label>
                        <input
                            placeholder="Enter each email ID.."
                            onBlur={handleBlur}
                            onChange={handleChange} className={(errors.email && touched.email) ? "error" : null} id="email" type="email" ></input>
                        {errEm ? <p className="error">{errEm}</p> : null}
                        <button type="button" className="button" onClick={() => { handleKey("email") }}>Add</button>
                        <div style={{ width: 'fit-content', background: 'transparent', display: "flex", flexDirection: "row", flexWrap: "wrap", margin: '0 auto' }}>
                            {emails.map((em, index) =>
                                <div onClick={() => { remove(index, "email") }}>
                                    <Word word={em} key={index}></Word>
                                </div>
                            )}
                        </div>
                    </div>
                }
                <label>Upload your Paper    </label>
                <input type="file" />
                <button className="button" type="submit" >Submit</button>
            </form >
        </div >

    )
}

