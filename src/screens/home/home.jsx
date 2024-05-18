import { FaArrowAltCircleRight } from "react-icons/fa";
import phoneImg from '../../assets/phoneFor Home.png';
import img1 from '../../assets/thumsbanner1.png'
import img2 from '../../assets/banner2.png'
import img3 from '../../assets/banner3.png'
import img4 from '../../assets/banner4.png'

const Home = () => {
    return (
        <>
            <div className="hero gap-10 mb-20 min-h-screen flex flex-col items-center justify-center space-y-8 md:space-y-16">
                <div className="card mt-10 w-11/12 md:w-2/4 max-w-4xl shadow-2xl bg-base-100 p-3">
                    <form className="card-body space-y-4">
                        <h1 className="text-center text-2xl font-bold">Boost Mobile Refill</h1>
                        <div className="form-control">
                            <h1 className="text-lg font-semibold">Let's start with the phone number you want to pay</h1>
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <div className="flex">
                                <input type="tel" placeholder="Phone number" className="input input-bordered flex-1" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Phone Number</span>
                            </label>
                            <div className="flex">
                                <input type="tel" placeholder="Confirm phone number" className="input input-bordered flex-1" required />
                            </div>
                        </div>
                        <hr />
                        <div className="form-control">
                            <h1 className="text-lg font-semibold">Please let us know how much money should be added to your Boost Mobile number.</h1>
                            <label className="label">
                                <span className="label-text">Amount to Pay</span>
                            </label>
                            <input type="number" placeholder="Amount to pay" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">4 Digit PIN</span>
                            </label>
                            <input type="password" placeholder="4 digit PIN" className="input input-bordered w-full" required />
                        </div>
                    </form>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl space-y-4 md:space-y-0 md:space-x-6">
                    <div className="card flex-grow min-w-full md:min-w-[200px] shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Step No 1</h2>
                            <p>Enter Your Mobile Number</p>
                        </div>
                    </div>
                    <FaArrowAltCircleRight className="rotate-90 md:rotate-0" size={24} />
                    <div className="card flex-grow min-w-full md:min-w-[200px] shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Step No 2</h2>
                            <p>Enter your due amount</p>
                        </div>
                    </div>
                    <FaArrowAltCircleRight className="rotate-90 md:rotate-0" size={24} />
                    <div className="card flex-grow min-w-full md:min-w-[200px] shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Step No 3</h2>
                            <p>Check out</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-6">
                    <div className="md:w-1/2 mx-4">
                        <h1 className="text-5xl text-center md:text-left font-semibold mb-4">Why Choose Us ?</h1>
                        <p className="text-lg text-center md:text-left">
                            Our online top-up service is the quickest and easiest way to refill your phone with a credit or debit card. Our 24/7 support makes it quick and simple for you to get access to your loved ones even faster.
                        </p>
                    </div>
                    <div className="md:w-2/4 flex justify-center">
                        <img src={phoneImg} alt="" className="w-2/4 md:w-3/4" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-8 md:space-y-0">
                    <div className="mb-7 ml-4">
                        <h1 className="text-5xl  font-semibold mb-4">You are Safe with Us</h1>
                        <p className="text-lg w-10/12 ">Without strong encryption, you will be spied on systematically by lots of people. We strongly use encryption; your security is our first priority.</p>
                    </div>
                    <div className="flex justify-evenly flex-wrap gap-10 items-center w-full">
                        <div>
                            <img src={img1} alt="" className="w-72" />
                        </div>
                        <div>
                            <img src={img2} alt="" className="w-72" />
                        </div>
                        <div>
                            <img src={img3} alt="" className="w-72" />
                        </div>
                        <div>
                            <img src={img4} alt="" className="w-72" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
