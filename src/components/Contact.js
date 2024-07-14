import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-500">
      <div className="container mx-auto">
        <h2 className="text-3xl text-white mb-6">Contact</h2>
        <form className="bg-white p-8 shadow-md rounded">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" id="message"></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
