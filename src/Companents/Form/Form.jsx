import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import '../Form/form.css'
import emailjs from '@emailjs/browser'
const Forum = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
    };

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4e4tv2p', 'template_ih2qfsd', form.current, 'I4QzzLgIy6brxHtMz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div>
            {isSubscribed ? (
                <p className='page-note' data-aos='fade-up'>Thank you for subscribing! You will receive notifications via email.</p>
            ) : (
                <form className="page-form" ref={form} onChange={sendEmail} onSubmit={handleSubscribe}>
                    <label>
                        <input type="email" className='form-email' placeholder='Email' name='sexsin_emaili' value={email} onChange={handleEmailChange} />
                    </label>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => (modalOpen ? close() : open())}
                        className="button-19" type='submit'>
                        Notify Me
                    </motion.button>
                </form>
            )}
        </div>
    );
};

export default Forum;
