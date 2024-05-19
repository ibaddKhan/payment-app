import { useState } from 'react';
import Swal from 'sweetalert2'
const Home = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        confirmPhoneNumber: '',
        amountToPay: '',
        pin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.phoneNumber.length != 11 && formData.confirmPhoneNumber.length != 11) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "There should be 11 numbers",
                showConfirmButton: false,
                timer: 1500
            });

            return
        }
        else if (formData.phoneNumber !== formData.confirmPhoneNumber) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Passwords are not same",
                showConfirmButton: false,
                timer: 1500
            });

            return
        } else if (formData.amountToPay < 10 || formData.amountToPay > 200) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Due Amount must be equal to or greater than 10 and less than or equal to 200",
                showConfirmButton: false,
                timer: 1500
            });
            return
        } else if (formData.pin.length !== 4) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Pin Should be 4 Digits",
                showConfirmButton: false,
                timer: 1500
            });
            return
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Checking out",
                showConfirmButton: false,
                timer: 1500
            });

            console.log('Form Data:', formData);

        }




    };
    return (
        <>
            <div className="hero gap-10 mb-20 min-h-screen flex flex-col items-center justify-center space-y-8 md:space-y-16">
                <div className="card mt-10 w-11/12 md:w-2/4 max-w-4xl shadow-2xl bg-base-100 p-3">
                    <form className="card-body space-y-4" onSubmit={handleSubmit}>
                        <h1 className="text-center text-2xl font-bold">Boost Mobile Refill</h1>
                        <div className="form-control">
                            <h1 className="text-lg font-semibold">Let's start with the phone number you want to pay</h1>
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <div className="flex">
                                <input
                                    type="number"
                                    minLength={11}
                                    maxLength={11}
                                    placeholder="+1 xxxxxxxxxx"
                                    className="input input-bordered flex-1"
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
                            <div className="flex">
                                <input
                                    type="number"
                                    minLength={11}
                                    maxLength={11}
                                    placeholder="+1 xxxxxxxxxx"
                                    className="input input-bordered flex-1"
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">4 Digit PIN</span>
                            </label>
                            <input
                                type="number"
                                minLength={4}
                                maxLength={4}
                                placeholder="4 digit PIN"
                                className="input input-bordered w-full"
                                name="pin"
                                value={formData.pin}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn btn-primary w-full">Submit</button>
                        </div>
                    </form>
                </div>
                <div id="content" className="p-5 shadow-2xl rounded-lg w-full max-w-6xl">
                    <h1 className="text-3xl font-bold mb-4 ">Welcome to MyBoostMobileBill - The Mobile Bill Payment System You Can Rely On</h1>
                    <p className=" mb-6">
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
                    <div className='mb-8'>
                        <p className="mb-4">Check out the Pay Boost Bills website</p>
                        <p className="">Go to Pay Boost Bills and login to your account. If you don’t have an account, sign up to get started.</p>
                    </div>
                    <ol className="list-decimal space-y-6 pl-5 mb-4">
                        <li><div className="font-bold">Pay Boost Mobile Bill Payment</div> Go to bill payment section and select Boost Mobile from the list of service providers.</li>
                        <li><div className="font-bold">Enter your Boost Mobile account details</div> Enter your Boost Mobile account number and payment amount.</li>
                        <li><div className="font-bold">Select PayPal as Payment Method</div> Select PayPal as your preferred payment method. You will be redirected to the PayPal login page.</li>
                        <li><div className="font-bold">Login to your PayPal account</div> Enter your PayPal credentials to sign in and confirm payment.</li>
                        <li><div className="font-bold">Confirm and pay the bill</div> Check your payment details and click ‘Confirm’ to complete the transaction. You will receive a confirmation email from Pay Boost Bills and PayPal.</li>
                    </ol>
                    <h3 className="text-xl mt-10 font-bold mb-2">Pay by debit card</h3>
                    <div className='mb-8'>
                        <p className="mb-4">Check out the Pay Boost Bills website</p>
                        <p className="">Visit the Pay Boost Bills website and sign in or create a new account if you are a new user.
                        </p>
                    </div>
                    <ol className="list-decimal space-y-6 pl-5 mb-4">
                        <li><div className="font-bold">Paw Boost Mobile Bill Payment</div> Visit the Pay Boost Bills website and sign in or create a new account if you are a new user.</li>
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
