import React from "react";
import "./contact.css";
import ContactHead from "./ContactHead";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <main className="container">
        <ContactHead />
        <ContactForm />
      </main>
    </>
  );
}

export default Contact;
