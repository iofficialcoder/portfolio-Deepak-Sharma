import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/image/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e58e6e05-36f2-44c8-ae64-08971385cca0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      //   console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="title-box">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="Theme Image" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fa-solid fa-envelope"></i>
              <p>deepaksharma76900@gmail.com</p>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-phone-volume"></i>
              <p>+91 76900 64046</p>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-location-dot"></i>
              <p>Jatanwali, Jaipur, Rajasthan 303806</p>
            </div>
          </div>
          <h3>Social Media</h3>
          <div className="media-icons">
            <a
              className="social-icon"
              href="https://www.facebook.com/Mr.Deepari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              className="social-icon"
              href="https://www.instagram.com/mr_techdeep/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              className="social-icon"
              href="https://github.com/iofficialcoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              className="social-icon"
              href="https://www.linkedin.com/in/meofficialcoder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <input
            type="hidden"
            name="subject"
            value="New Submission from Portfolio"
          />
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            name="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />
          <label htmlFor="phone">Your Phone Number</label>
          <input
            id="phone"
            type="text"
            placeholder="Enter Your Phone Number"
            name="phone"
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contect-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
