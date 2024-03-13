// components/Contact.tsx
import React from 'react';
import '../App.css';
import globe from '../globe.jpg'

const Contact: React.FC = () => {
  return <div className="contact-page">
  <nav className="contact-nav">Contact Us</nav>
  <div className="div">
  <div className="contact-content">
    Contact Us
    <p className="sub">We are always here to help you out whatever way it can :)</p>
    <form className="form">
      <input type="text" placeholder="Name" className="name"/>
      <input type="email" placeholder="Email" className="name"/>
      <input type="number" placeholder="Phone" className="name"/>
      <textarea className="area" placeholder="Message"/><br/>
      <input type="submit" className="submit"></input>
    </form>
    <p className="details">Email: bhavyashree@geosentry.ai</p>
    <p className="details">Phone: +91-6302489420</p>
  </div>
  <div className="contact-map">
    <img src={globe} className="globe"/>
  </div>
  </div>
  
  
</div>;
};

export default Contact;
