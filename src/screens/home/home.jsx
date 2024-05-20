import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowAltCircleRight } from 'react-icons/fa'
const Home = () => {
    let [limitOnAmount, setAmountLimit] = useState();
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        phoneNumber: '+1',
        confirmPhoneNumber: '+1',
        amountToPay: '',
        pin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber' || name === 'confirmPhoneNumber') {
            if (!value.startsWith('+1')) return;
            if (value.length > 12) return;
        }
        if (name === 'pin') {
            if (value.length > 4) return;
        }
        if (name === 'amountToPay') {
            if (value > 200) {
                setAmountLimit("Amount must be in between 10 and 200");
                return;
            } else {
                setAmountLimit(null);
            }
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.phoneNumber.length !== 12 || formData.confirmPhoneNumber.length !== 12) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'There should be 10 digits after +1',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (formData.phoneNumber !== formData.confirmPhoneNumber) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Phone numbers do not match',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (formData.amountToPay < 10 || formData.amountToPay > 200) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Amount must be between 10 and 200',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (formData.pin.length !== 4) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'PIN should be 4 digits',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Checking out',
            showConfirmButton: false,
            timer: 1500
        });

        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form Data:', formData);
        navigate('checkout');
    };

    return (
        <>
            <div id='home-div' className="hero gap-10 mb-20 min-h-screen flex flex-col items-center justify-center space-y-8 md:space-y-16 px-4">
                <div className="card mt-10 w-full md:w-2/4 max-w-4xl shadow-2xl bg-base-200 p-3">
                    <form className="card-body space-y-4" onSubmit={handleSubmit}>
                        <h1 className="text-center text-2xl font-bold">Boost Mobile Refill</h1>
                        <div className="form-control">
                            <h1 className="text-lg font-semibold">Let's start with the phone number you want to pay</h1>
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <div className="flex flex-col md:flex-row">
                                <input
                                    type="text"
                                    placeholder="+1 xxxxxxxxxx"
                                    className="input input-bordered w-full"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Phone Number</span>
                            </label>
                            <div className="flex flex-col md:flex-row">
                                <input
                                    type="text"
                                    placeholder="+1 xxxxxxxxxx"
                                    className="input input-bordered w-full"
                                    name="confirmPhoneNumber"
                                    value={formData.confirmPhoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="form-control">
                            <h1 className="text-lg font-semibold">Please let us know how much money should be added to your Boost Mobile number.</h1>
                            <label className="label">
                                <span className="label-text">Amount to Pay</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Amount to pay"
                                className="input input-bordered w-full"
                                name="amountToPay"
                                value={formData.amountToPay}
                                onChange={handleChange}
                                required
                            />
                            <p className="text-red-600 mt-3">{limitOnAmount}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">4 Digit PIN</span>
                            </label>
                            <input
                                type="number"
                                placeholder="4 digit PIN"
                                className="input input-bordered w-full"
                                name="pin"
                                value={formData.pin}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn border border-slate-600 transition-colors duration-300 hover:bg-white hover:text-black rounded-md mx-auto w-full md:w-2/3">Next</button>
                        </div>
                    </form>
                </div>
                <div id='steps-div' className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl space-y-4 md:space-y-0 md:space-x-6">
                    <div className="card bg-base-200 border border-slate-700	 flex-grow min-w-full md:min-w-[200px] shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Step No 1</h2>
                            <p>Enter Your Mobile Number</p>
                        </div>
                    </div>
                    <FaArrowAltCircleRight className="rotate-90 md:rotate-0" size={24} />
                    <div className="card bg-base-200 border border-slate-700	 flex-grow min-w-full md:min-w-[200px] shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Step No 2</h2>
                            <p>Enter your due amount</p>
                        </div>
                    </div>
                    <FaArrowAltCircleRight className="rotate-90 md:rotate-0" size={24} />
                    <div className="card bg-base-200 border border-slate-700	 flex-grow min-w-full md:min-w-[200px] shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">Step No 3</h2>
                            <p>Check out</p>
                        </div>
                    </div>
                </div>
                <div id="content" className="p-5 shadow-2xl rounded-lg w-full max-w-6xl">
                    <h1 className="text-3xl font-bold mb-4">Welcome to MyBoostMobileBill - The Mobile Bill Payment System You Can Rely On</h1>
                    <p className="mb-6">
                        Through our website, we're rocking the world of Boost Mobile bill payment by taking things to the next level. Our platform provides a smooth and convenient way for you to maintain sufficient balance in your account, whether you are running late and in a rush or you have 5 minutes to spare in between meetings. Here's how it works:
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Use PayPal to Pay Boost Mobile bundle and follow the instructions below.</h2>
                    <p className="mb-4">
                        Without a real doubt we have realized the need of versatile and adaptable payment options at Pay Your Phone Bill. In order to avoid any hassles on your end, we have integrated the use of PayPal as a payment option for settlement of Boost Mobile bill.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">How do you pay your Boost Mobile Bill with PayPal and Debit Card?</h2>
                    <p className="mb-4">
                        Paying your Boost Mobile bills has never been easier, thanks to Pay Boost Bills. Follow these simple steps to settle your Boost Mobile bill easily using PayPal or your debit card using our platform.
                    </p>
                    <h3 className="text-xl mt-10 font-bold mb-2">Paying with PayPal payment</h3>
                    <div className="mb-8">
                        <p className="mb-4">Check out the Pay Boost Bills website</p>
                        <p>Go to Pay Boost Bills and login to your account. If you don’t have an account, sign up to get started.</p>
                    </div>
                    <ol className="list-decimal space-y-6 pl-5 mb-4">
                        <li><div className="font-bold">Pay Boost Mobile Bill Payment</div> Go to bill payment section and select Boost Mobile from the list of service providers.</li>
                        <li><div className="font-bold">Enter your Boost Mobile account details</div> Enter your Boost Mobile account number and payment amount.</li>
                        <li><div className="font-bold">Select PayPal as Payment Method</div> Select PayPal as your preferred payment method. You will be redirected to the PayPal login page.</li>
                        <li><div className="font-bold">Login to your PayPal account</div> Enter your PayPal credentials to sign in and confirm payment.</li>
                        <li><div className="font-bold">Confirm and pay the bill</div> Check your payment details and click ‘Confirm’ to complete the transaction. You will receive a confirmation email from Pay Boost Bills and PayPal.</li>
                    </ol>
                    <h3 className="text-xl mt-10 font-bold mb-2">Pay by debit card</h3>
                    <div className="mb-8">
                        <p className="mb-4">Check out the Pay Boost Bills website</p>
                        <p>Visit the Pay Boost Bills website and sign in or create a new account if you are a new user.</p>
                    </div>
                    <ol className="list-decimal space-y-6 pl-5 mb-4">
                        <li><div className="font-bold">Pay Boost Mobile Bill Payment</div> Visit the Pay Boost Bills website and sign in or create a new account if you are a new user.</li>
                        <li><div className="font-bold">Enter your Boost Mobile account details</div> Fill in your Boost Mobile account number and payment amount.</li>
                        <li><div className="font-bold">Choose a debit card as a payment option</div> Select the debit card option for the payment method.</li>
                        <li><div className="font-bold">Enter the debit card details</div> Provide your debit card information.</li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Home;
