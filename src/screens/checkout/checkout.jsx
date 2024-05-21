import React, { useEffect, useRef, useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    amountToPay: "",
    pin: "",
  });
  let [pay, setPay] = useState(null);

  const paypal = useRef();

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    } else {
      alert("Please Try Again");
    }
  }, []);

  useEffect(() => {
    // Calculate total amount including tax
    const processingFee = parseFloat(formData.amountToPay) * 0.1;
    const totalAmount = parseFloat(formData.amountToPay) + processingFee;

    // Set the pay value equal to totalAmount
    setPay(totalAmount.toFixed(2));
  }, [formData]);

  useEffect(() => {
    if (pay !== null && paypal.current) {
      // Remove existing PayPal button before rendering again
      if (paypal.current.children.length > 0) {
        paypal.current.removeChild(paypal.current.children[0]);
      }
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Payboost mobile billing",
                  amount: {
                    currency_code: "USD",
                    value: pay, // Use the pay value here
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }
  }, [pay]);

  return (
    <div className="container mx-auto p-6">
      <div className="card shadow-2xl bg-base-300 rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <div
          id="content1"
          className="mb-4 flex items-end justify-between border-b pb-2"
        >
          <div>
            <h2 className="text-xl font-semibold">Phone Number</h2>
            <p>This is the phone number that you'd like to recharge for.</p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg mt-2">{formData.phoneNumber}</p>
            <h2 className="text-md">Boost Mobile</h2>
          </div>
        </div>

        <div
          id="content2"
          className="mb-4 flex items-end justify-between border-b pb-2"
        >
          <div>
            <h2 className="text-xl font-semibold">Refill Amount</h2>
            <p>
              This is the amount of funds that you want to refill on the phone
              number above.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg mt-2">${formData.amountToPay}</p>
          </div>
        </div>

        <div
          id="content3"
          className="mb-4 flex items-end justify-between border-b pb-2"
        >
          <div>
            <h2 className="text-xl font-semibold">Tax</h2>
            <p>This is the 10% tax on your bill.</p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg mt-2">
              ${(parseFloat(formData.amountToPay) * 0.1).toFixed(2)}
            </p>
          </div>
        </div>

        <div
          id="content4"
          className="mb-4 flex items-end justify-between border-b pb-2"
        >
          <div>
            <h2 className="text-xl font-semibold">Total (USD)</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg mt-2">
              $
              {(
                parseFloat(formData.amountToPay) +
                parseFloat(formData.amountToPay) * 0.1
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button className="">
          <div ref={paypal}></div>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
