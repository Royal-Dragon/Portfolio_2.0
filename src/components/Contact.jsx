import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { DecoderText } from './decoder_text/decoder-text';
import { style} from "../style";
import  Earth  from "./canvas/Earth";
import { Section } from "../hoc";
import { slideIn } from "../utils/motion";

//-O6i_ER6IHMvU1yr1
//template_xf6fhxj
//service_zyvfnbx
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        'service_zyvfnbx',
        'template_xf6fhxj',
        {
          from_name: form.name,
          to_name: "Abhiram Royals",
          from_email: form.email,
          to_email: "abhiramroyals004@gmail.com",
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        '-O6i_ER6IHMvU1yr1'

      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 z-0 flex xl:flex-row flex-col-reverse bg-transparent gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-transparent p-8 rounded-2xl'
      >
        <p className={style.sectionSubText}>Get in touch</p>
        <h3 >
        <DecoderText className={`${style.sectionHeadText}`} text='Contact.' delay={300} />
      </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Wanna recurit Me</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Earth/>
      </motion.div>
    </div>
  );
};

export default Section(Contact, "contact");