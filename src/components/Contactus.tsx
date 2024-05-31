import Image from 'next/image';

const ContactForm = () => {
  return (
    <div className="bg-gray-900 text-white min-h-[260px] py-16">
      <div className="container px-52  ">
        <div className='px-3' >
        <h3 className="text-3xl font-bold text-center mb-4">Contact Us</h3>
        <p className="text-center font-semibold text-lg mb-8">
          Contact us for more details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
            <form className="w-full max-w-md">
              <h3 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center space-x-2">
                {/* <Image src="/send-icon.png" alt="Send Icon" width={28} height={28} /> */}
                Send Message
              </h3>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" className="input-field hover:border-blue-500 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300 px-4 py-2 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" className="input-field hover:border-blue-500 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300 px-4 py-2 rounded-md" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" rows={5} className="input-field hover:border-blue-500 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300 px-4 py-2 rounded-md" placeholder="Enter your message"></textarea>
              </div>
              <div className="flex justify-center  pr-48  ">
                <button type="submit" className="btn">Send Email</button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center space-x-2">
                {/* <Image src="/info-icon.png" alt="Info Icon" width={28} height={28} /> */}
                Info
              </h3>
              <div className="mb-4 ">
                {/* <label htmlFor="contactName" className="block mb-1">Name</label> */}
              
              </div>
              <div className="mb-4">
                <label htmlFor="contactEmail" className="block mb-1">Email</label>
                <p className="font-semibold">Codev@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
