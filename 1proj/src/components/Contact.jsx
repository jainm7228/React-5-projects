import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required  placeholder="abc"/>

          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required  placeholder="abc@"/>

          </div>
          <div>
            <label htmlFor="">Feedback</label>
            <input type="text" required  placeholder="Tell us about your query"/>

          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
