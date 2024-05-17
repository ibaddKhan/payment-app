
import address from '../../assets/contact.png'
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

const Contact = () => {
    return (
        <div className='flex justify-center flex-wrap-reverse'>
            <div className=" p-10 rounded-lg shadow-md">
                <h2 className="text-center text-5xl font-semibold mb-6">GET IN TOUCH WITH US</h2>
                <p className=" text-lg mb-4">Give us a call or drop by anytime, we answer all enquiries within 24 hours.</p>
                <div className="">
                    <div className="mb-4">
                        <div className="flex items-center">
                            <MdOutlineMailOutline size={24} />
                            <h3 className="text-xl font-medium ml-2">Company Email</h3>
                        </div>
                        <p>Contact@payboostbills.com</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <MdOutlinePhone size={24} />
                            <h3 className="text-xl font-medium ml-2"> Contact Us</h3>
                        </div>
                        <p>+1 (833) 443-3203</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-2/4'>
                <img className='w-2/4' src={address} alt="" />
            </div>
        </div >
    );
};

export default Contact;
