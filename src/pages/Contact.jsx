import { useState } from "react";
import axios from "axios";
export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

  e.preventDefault();


  try {

    await axios.post(
      "http://localhost:5000/contact",
      form
    );


    alert("Message sent successfully 🚀");


    setForm({
      name:"",
      email:"",
      message:""
    });


  } catch(error) {


    console.log(error);

    alert("Message failed ❌");


  }

};

  return (

    <div className="contact">


      <h1>Contact Me 📞</h1>


      <p className="contact-sub">
        Have a project or opportunity? Feel free to connect with me.
      </p>



      {/* CONTACT INFO */}

      <div className="contact-cards">


        <div className="contact-card">

          <h3>📧 Email</h3>

          <a href="mailto:tasneemfatma8271@gmail.com">
            tasneemfatma8271@gmail.com
          </a>

        </div>



        <div className="contact-card">

          <h3>💼 LinkedIn</h3>

          <a 
            href="https://www.linkedin.com/in/tasneem-fatma-7933ba344"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>

        </div>




        <div className="contact-card">

          <h3>💻 GitHub</h3>

          <a
            href="https://github.com/TasneemFatma012"
            target="_blank"
            rel="noreferrer"
          >
            View Projects
          </a>

        </div>



      </div>





      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="contact-form"
      >


        <input

          type="text"

          name="name"

          placeholder="Your Name"

          value={form.name}

          onChange={handleChange}

          required

        />



        <input

          type="email"

          name="email"

          placeholder="Your Email"

          value={form.email}

          onChange={handleChange}

          required

        />



        <textarea

          name="message"

          placeholder="Your Message"

          value={form.message}

          onChange={handleChange}

          rows="5"

          required

        />



        <button type="submit">

          Send Message 🚀

        </button>



      </form>


    </div>

  );
}