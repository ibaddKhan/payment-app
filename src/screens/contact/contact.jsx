import { useState } from 'react';
import emailjs from '@emailjs/browser';
import address from '../../assets/contact.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_0k58rjq', 'template_qe2jfj6', formData, 'gpf30VYp_SYQ1rlws')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for your message. It has been sent.');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Sorry, something went wrong. Please try again.');
            });
    };

    return (
        <div className='flex flex-wrap-reverse justify-center'>
            <div className="p-10 flex flex-col justify-center items-center w-full lg:w-1/2 rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <h2 className="text-3xl lg:text-5xl font-semibold mb-4">GET IN TOUCH WITH US</h2>
                    <p className="text-lg">Give us a call or drop by anytime, we answer all enquiries within 24 hours.</p>
                </div>

                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="w-full mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea maxLength="100" className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" name="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} required />
                    </div>
                    <div className="flex justify-center">
                        <button className="border hover:bg-black transition-colors duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <div className='flex justify-center w-3/4 lg:w-1/2 p-10'>
                <img className='w-full lg:w-3/4' src={address} alt="Contact" />
            </div>
        </div>
    );
};

export default Contact;
