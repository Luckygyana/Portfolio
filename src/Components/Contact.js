import React, { useState } from "react";
import emailjs from "emailjs-com";
import loader from "../images/loader.gif";

function Contact(props) {
  const [status, setStatus] = useState("");
  const [userName, setName] = useState("");
  const [userMail, setMail] = useState("");
  const [userMessage, setMessage] = useState("");
  const [userSubject, setSubject] = useState("");

  const renderStatus = () => {
    if (status === "Loading") {
      return (
        <span id="image-loader">
          <img alt="" src={loader} />
        </span>
      );
    } else if (status === "Success") {
      return (
        <span id="message-success">
          <i className="fa fa-check"></i>Your message was sent, thank you!
        </span>
      );
    } else if (status === "Failed") {
      return (
        <span id="message-warning">
          <i className="fa fa-times"></i> Error ! Try Again
        </span>
      );
    }
  };

  function sendMail(e) {
    e.preventDefault();
    setStatus("Loading");
    emailjs
      .sendForm(
        process.env.REACT_APP_SECRET_CODE1,
        process.env.REACT_APP_SECRET_CODE2,
        e.target,
        process.env.REACT_APP_SECRET_CODE3
      )
      .then(
        (result) => {
          setStatus("Success");
          setName("");
          setMail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          setStatus("Failed");
        }
      );
  }

  var name = props.data.name;
  var street = props.data.address.street;
  var city = props.data.address.city;
  var state = props.data.address.state;
  var zip = props.data.address.zip;
  var phone = props.data.phone;
  var message1 = props.data.contactmessage1;
  var message2 = props.data.contactmessage2;

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message1}</p>
          <p className="lead">{message2}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contact-form" onSubmit={sendMail}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="contactName"
                  name="user_name"
                  value={userName}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="user_email"
                  value={userMail}
                  onChange={(event) => setMail(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  size="35"
                  id="contactSubject"
                  name="subject"
                  value={userSubject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="message"
                  value={userMessage}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>

              <div>
                <button className="submit">Submit</button>
                {renderStatus()}
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
