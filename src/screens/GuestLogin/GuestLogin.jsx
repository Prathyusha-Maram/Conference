import "./GuestLogin.css"
import { InputField } from "../../components/InputField/inputfield"
import { Label } from "../../components/Label/label"

export const GuestLogin = ()=>{
    return(
        <>
        <div className="guestContainer">
        <div className="guestLogin">
        <h3 style={{color:"#006747",marginBottom:"10px"}}>Enter your details</h3>
        <Label value={"First Name"}/>
        <InputField type={"text"} placeholder="Enter your first name" />
        <Label value={"Last Name"}/>
        <InputField type={"text"} placeholder="Enter your last name" />
        <Label value={"Email Address"}/>
        <InputField type={"text"} placeholder="Enter your email address" />
        <p style={{marginTop:"20px"}}>Payment options</p>
        <input type="radio" id="credit" name="payment"/>
        <label for="credit" className="radioLabel">Debit or Credit card</label><br></br>
        <input type="radio" id="applePay" name="payment"/>
        <label for="applePay" className="radioLabel">Apple Pay</label><br></br>
        <input type="radio" id="paypal" name="payment"/>
        <label for="paypal" className="radioLabel">Paypal</label><br></br>
        <input type="radio" id="other" name="payment"/>
        <label for="other" className="radioLabel">Other</label>
        <div className="pay">
            <a href="/login" style={{color:"#006747"}}>Go Back</a>
        <button className="payBtn">Pay $50.00</button>
        </div>
        </div>
        </div>
        </>
    )
}