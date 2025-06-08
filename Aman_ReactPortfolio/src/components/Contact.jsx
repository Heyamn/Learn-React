import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally handle sending logic here (API call, email service, etc.)
    console.log('Form Submitted:', formData);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className='mb-20'>
        <div>
          <h1 className='text-black mt-20 text-3xl'>Contact Me</h1>
          <p className='text-gray-600 text-sm mt-2'>Get In Touch</p>
        </div>

        <div className='flex gap-10 mt-14 ml-22'>
          <div className='w-96 h-96'>
            <div className='mt-4'>
              <h1 className='text-gray-700 mr-8'>Talk to me</h1>
            </div>
            <div className='border rounded-xl border-solid border-gray-300 w-44 h-24 ml-24 mt-10 p-2'>
              <i className="fas fa-envelope" style={{ marginRight: '10px', color: '#D44638' }}></i>
              <h2 className='text-black mt-2 font-serif'>Email</h2>
              <p className='text-gray-500 text-xs' style={{ fontSize: '10px' }}>aman2000tailor29@gmail.com</p>
            </div>
            <div className='border rounded-xl border-solid border-gray-300 w-44 h-24 ml-24 mt-10 p-2'>
              <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
              <h2 className='text-black mt-2 font-serif'>Whatsapp</h2>
              <p className='text-gray-500 text-xs'>+91 9680993087</p>
            </div>
          </div>

          <div className='ml-44'>
            <h1 className='text-gray-700 mb-4'>Write me your message</h1>
            <form onSubmit={handleSubmit}>
              <div className='relative w-72'>
                <p className='absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10'>Name</p>
                <input
                  className='border rounded-xl border-solid border-gray-500 w-full h-10 px-3 pt-2 text-black'
                  type='text'
                  placeholder='Insert your name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='relative w-72 mt-4'>
                <p className='absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10'>Email</p>
                <input
                  className='border rounded-xl border-solid border-gray-500 w-full h-10 px-3 pt-2 text-black'
                  type='email'
                  placeholder='Insert your email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='relative w-72 mt-4'>
                <p className='absolute -top-2 left-3 bg-white px-1 text-sm text-gray-500 z-10'>Message</p>
                <textarea
                  className="border rounded-xl border-solid border-gray-500 w-full h-40 px-3 py-2 placeholder:text-gray-400 placeholder:align-top resize-none text-black"
                  placeholder="Write your message"
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="py-2.5 px-5 mt-6 text-sm font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
