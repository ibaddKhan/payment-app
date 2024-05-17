import missionImg from '../../assets/ourmission.png';

const About = () => {
    return (
        <div className='flex flex-wrap lg:flex-nowrap justify-center p-6 md:p-12'>
            <div className='w-3/4 lg:w-1/2 flex justify-center items-center lg:order-2 mb-6 lg:mb-0'>
                <img src={missionImg} className='w-full lg:w-3/4' alt="Our Mission" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col shadow-2xl items-center justify-center">
                <div className="p-6 rounded-lg shadow-md ">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-center">Our Service Mission</h2>
                    <p className="text-lg mb-4">
                        Pay Boost Bills gives services by using our top-up system. Our goal is to help users get access and connectivity. Our team understands the importance of providing our customers with a fast and secure solution to refill their Boost mobile phones and works around the clock to guarantee a hassle-free experience. That is the reason Take care of Your Mobile Bill makes it simpler than any time in recent memory to top off your Boost Mobile account right away!
                    </p>
                    <p className="text-lg mb-4">
                        We offer a fast, helpful way for you to get to the most recent highlights on Boost Mobile. Our online Boost Mobile top-up service is the most convenient way to refill your Boost Mobile account with a credit or debit card. Our 24/7 support makes it simple for you to get access to your loved ones even faster. Feel at ease placing a refill order for Boost Mobile that we offer, since we specialize in delivering your recharge instantly.
                    </p>
                    <p className="text-lg mb-4">
                        Your mobile phone company is the only one who can stop your bill from going up. When they don’t increase your phone plan, they know you’re taking advantage of their fast, friendly customer service just to get a better deal. If a customer has a good relationship with their carrier and follows few steps to avoid recurrence, chances are that customer will get their refill on time and without any hassle.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
