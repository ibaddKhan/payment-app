import React, { useEffect, useRef, useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    amountToPay: "",
    pin: "",
  });
  const [pay, setPay] = useState(null);
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
    if (formData.amountToPay) {
      const processingFee = parseFloat(formData.amountToPay) * 0.1;
      const totalAmount = parseFloat(formData.amountToPay) + processingFee;
      setPay(totalAmount.toFixed(2));
    }
  }, [formData.amountToPay]);

  useEffect(() => {
    if (pay && paypal.current) {
      if (paypal.current.children.length > 0) {
        paypal.current.innerHTML = "";
      }

      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Boost mobile re-fill",
                  amount: {
                    currency_code: "USD",
                    value: pay,
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
            console.error(err);
          },
          style: {
            layout: 'vertical',
            shape: 'rect',
            label: 'paypal',
          }
        })
        .render(paypal.current);
    }
  }, [pay]);

  return (
    <div className="container flex justify-center flex-col mx-auto p-6">
      <div className="card shadow-2xl bg-base-300 rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <div id="content1" className="mb-4 flex items-end justify-between border-b pb-2">
          <div>
            <h2 className="text-xl font-semibold">Phone Number</h2>
            <p>This is the phone number.</p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg mt-2">{formData.phoneNumber}</p>
            <h2 className="text-md">Boost Mobile</h2>
          </div>
        </div>

        <div id="content2" className="mb-4 flex items-end justify-between border-b pb-2">
          <div>
            <h2 className="text-xl font-semibold">Refill Amount</h2>
            <p>This is the amount of funds that you want to refill on the phone number above.</p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg mt-2">${formData.amountToPay}</p>
          </div>
        </div>

        <div id="content3" className="mb-4 flex items-end justify-between border-b pb-2">
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

        <div id="content4" className="mb-4 flex items-end justify-between border-b pb-2">
          <div>
            <h2 className="text-xl font-semibold">Total (USD)</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg mt-2">${pay}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-5 w-full max-w-xl mx-auto" ref={paypal}></div>
      </div>
    </div >
  );
};

export default Checkout;
