import React from "react";
import locationicon from "../assets/locationicon.png";
import mailicon from "../assets/mailicon.png";
import msgicon from "../assets/msgicon.png";
import phoneicon from "../assets/phoneicon.png";
import whitearrow from "../assets/whitearrow.png";
import "./Contact.css";
const Contact = () => {
  // web3form  code
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7433e118-c21a-4e7b-b200-8e328ebf09a5");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
  // web3 form code end

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          {" "}
          Send us a message <img src={msgicon} alt="" />
        </h3>
        <p>
          {" "}
          Feel free to reach out through contact form or find our contact
          informations below . your feedback , questions , and suggestions are
          important to us as we strive to provide exceptional service to our
          university community .
          <ul>
            <li>
              <img src={mailicon} alt="" /> Contact@BLOPATH222@gmail
            </li>
            <li>
              <img src={phoneicon} alt="" /> +91 678348937295435
            </li>
            <li>
              <img src={locationicon} alt="" /> Dehradun 2202762, Uttrakhand{" "}
              <br /> MA 02139 , Dehradun{" "}
            </li>
          </ul>
        </p>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label> Your Name </label>
          <input
            type="text"
            name="name"
            placeholder=" Enter Your Name "
            required
          />
          <label>Email Id </label>
          <input
            type="tel"
            name="email"
            placeholder="Enter Your Email Id"
            required
          />
          <label> Write your Message Here </label>
          <textarea
            name=" message"
            rows=" 6"
            placeholder="Enter Your Message "
            required
          ></textarea>
          <button type="submit " className="btn">
            {" "}
            Submit Now <img src={whitearrow} alt="" />
          </button>
        </form>
        <span> {result} </span>
      </div>
    </div>
  );
};

export default Contact;
