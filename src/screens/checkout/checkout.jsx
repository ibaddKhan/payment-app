import React, { useEffect, useState } from 'react';

const Checkout = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        amountToPay: '',
        pin: ''
    });

    useEffect(() => {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    const processingFee = parseFloat(formData.amountToPay) * 0.1;
    const totalAmount = parseFloat(formData.amountToPay) + processingFee;

    return (
        <div className="container mx-auto p-6">
            <div className="card shadow-2xl bg-base-300 rounded-md p-6">
                <h1 className="text-3xl font-bold mb-4">Checkout</h1>
                <div id='content1' className="mb-4 flex items-end justify-between border-b pb-2">
                    <div>
                        <h2 className="text-xl font-semibold">Phone Number</h2>
                        <p>This is the phone number that you'd like to recharge for.</p>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <p className="text-lg mt-2">{formData.phoneNumber}</p>
                        <h2 className="text-md">Boost Mobile</h2>
                    </div>
                </div>

                <div id='content2' className="mb-4 flex items-end justify-between border-b pb-2">
                    <div>
                        <h2 className="text-xl font-semibold">Refill Amount</h2>
                        <p>This is the amount of funds that you want to refill on the phone number above.</p>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <p className="text-lg mt-2">${formData.amountToPay}</p>
                    </div>
                </div>

                <div id='content3' className="mb-4 flex items-end justify-between border-b pb-2">
                    <div>
                        <h2 className="text-xl font-semibold">Tax</h2>
                        <p>This is the 10% tax on your bill.</p>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <p className="text-lg mt-2">${processingFee.toFixed(2)}</p>
                    </div>
                </div>

                <div id='content4' className="mb-4 flex items-end justify-between border-b pb-2">
                    <div>
                        <h2 className="text-xl font-semibold">Total (USD)</h2>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <p className="text-lg mt-2">${totalAmount.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <h1 className='text-red-500 font-semibold text-3xl  text-center'>//Paypal button will be here</h1>
        </div>
    );
}

export default Checkout;
