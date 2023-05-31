import "../../../styles/landing.css";
import Corosal from './corosal';

const Contact = () => {
    return (
        <div>
            <section>
                <Corosal />
            </section>
            <section>
                <div className="contact" >
                    <h3 className="contact-us"><b>Contact Us At:</b></h3>
                    <p>Here's where you can reach us: <span style={{ color: "var(--green)" }}><b>conference2023@nwconf.me</b></span></p>
                </div>
            </section>
            <section>
                <div className="footer1"></div>
            </section>
        </div>
    );
};

export default Contact;
