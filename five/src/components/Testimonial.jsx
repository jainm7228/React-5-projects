import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Ritviz"}
          feedback={"Your Coding skills are too good"}
        />

        <TestimonialCard
          name={"Rahul"}
          feedback={
            "Wow what a portfolio ,doesn't expected this to be on Internet"
          }
        />

        <TestimonialCard name={"Deep"} feedback={"Amazing portfolio website"} />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);
export default Testimonial;
