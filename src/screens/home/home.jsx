const Home = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">

                <div className="card w-11/12	 md:w-2/4 lg:w-2/4 max-w-4xl shadow-2xl bg-base-100 p-8">
                    <form className="card-body space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Enter Full name" className="input input-bordered w-full block" required />
                        </div>
                        <div className="form-control">
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount to Pay</span>
                            </label>
                            <input type="number" placeholder="Amount to pay" className="input input-bordered w-full block" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">4 Digit PIN</span>
                            </label>
                            <input type="password" placeholder="4 digit PIN" className="input input-bordered w-full block" required />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home;
