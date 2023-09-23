import React from 'react'

export default function Contact() {
  return (
<>


  <form>
    <h2>Contact Form</h2>

    <div className="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
    </div>

    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
    </div>

    <div className="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <div className="form-group">
      <label for="country">Country:</label>
      <select id="country" name="country" required>
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="au">Australia</option>
        
      </select>
    </div>

    <div className="form-group">
      <label for="subscribe">Subscribe to Newsletter:</label>
      <input type="checkbox" id="subscribe" name="subscribe"/>
    </div>

    <div className="form-group">
      <input type="submit" value="Submit"/>
    </div>
  </form>





</>
  )
}
