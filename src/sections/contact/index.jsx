import { useState } from "react";

import Button from "../../components/button";
import FormInput from "../../components/formInput";
import Heading from "../../components/heading";
import Text from "../../components/text";

import "./index.css";

const Contact = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phone: "",
    service: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormSubmitted(false);
  };

  async function handleSubmitForm(event) {
    event.preventDefault();

    // TODO: Send data
    console.log('%c Form Data', 'color: orange; font-size: 16px');
    console.table(formData);

    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData(initialFormData);
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className='contact'>
      <div className='container'>
        <form className='contact__form' onSubmit={handleSubmitForm}>
          <div className='contact__form--intro'>
            <Heading level={2}>Contact</Heading>
            <Text>
                Questions or concerns? Just fill out the form below
                and our support team will get back to you within 24
                hours
            </Text>
          </div>
          <div className='contact__form--fields'>
            <FormInput
              type='text'
              name='firstName'
              placeholder="First Name"
              required="required"
              value={formData.firstName}
              onChange={handleChange}
            />
            <FormInput
              type='text'
              name='lastName'
              placeholder="Last Name"
              required="required"
              value={formData.lastName}
              onChange={handleChange}
            />
            <FormInput
              style='full'
              type='text'
              name='phone'
              placeholder="Phone Number"
              required="required"
              value={formData.phone}
              onChange={handleChange}
            />
            <FormInput
              style='full'
              type='text'
              name='service'
              placeholder="What Service are you interested in?"
              required="required"
              value={formData.service}
              onChange={handleChange}
            />
            <Button type="submit" style="color">SUBMIT NOW</Button>
            {formSubmitted && <p>The form was sent correctly!</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
