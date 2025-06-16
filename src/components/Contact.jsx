import React from 'react'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; 
import Success from "./Success"
import Failure from "./Failure"
import "../styles/contact.css"

export default function Contact() {
  const initialState = {name: "", email: "", message: ""}
  const [formData, setFormData] = useState(initialState)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [showForm, setShowForm] = useState(true)

console.log("formData ", formData)
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
    
  }

  const form = useRef();

  const submitForm = (event) => {
    event.preventDefault();
    const templateId = import.meta.env.VITE_API_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_API_SERVICE_ID;
    //let formInfo = {from_name: formData.name, from_email: formData.email, message: formData.message, reply_to: formData.email};
    //console.log("templateId ", templateId)
    //console.log("publicKey ", publicKey)
    //console.log("serviceId ", serviceId)
    emailjs.sendForm(
      serviceId, templateId, form.current, {publicKey: publicKey})
      .then(() => {
        //console.log("worked")
        setSuccess(true)
        setShowForm(false);
        setFormData(initialState);
        })
      .catch(err => {
        console.log("error", err);
        setShowForm(false);
        setFailure(true)
        setFormData(initialState)
      });
  }


  return (
    <main id="contact">
      <div className="holder">
        <span className="spanleft"></span>
          <h2 className="title" tabIndex="0">Contact</h2><span className="spanright">
        </span>
      </div>
      <section className="section">
      {showForm &&<form 
        id="form"
        onSubmit={(event) => submitForm(event)}
        ref={form}
      >
        <label htmlFor="nameInput">
          Name:
          <br />
        <input 
        name="name" 
        className="nameInput"
        id="nameInput"
        type="text"
        placeholder="name"
        value={formData.name}
        onChange={e => handleChange(e)}
        min-lenth="2"
        aria-required="true"
        autoComplete="true"
        required
        />
        <br />
        </label>

        <label htmlFor="emailInput">
          Email:
          <br />
          <input 
            name="email"
            className="emailInput"
            id="emailInput"
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            autoComplete="true"
            required
          />
          <br/>
        </label>

        <label htmlFor="messageInput">
          Message:
          <br/>
        <textarea
          form="form"
          name="message"
          className="messageInput"
          id="messageInput"
          cols="20" 
          rows="5" 
          placeholder="What's up?"
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          required
        >
        </textarea>
        <br/>
        </label>

        <button
          type="submit"
          className="submit" id="submit">
          Submit
        </button>
      </form>}
      {success && <Success/>}
      {failure && <Failure/>}
    </section>
    </main>
  )
}
