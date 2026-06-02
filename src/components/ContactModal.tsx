import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { useContact } from '../context/ContactContext';
import contactHouse from '../assets/contact_house.png';

export default function ContactModal() {
  const { isContactOpen, closeContact } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Driveway Paving',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Driveway Paving',
        message: ''
      });
    }, 1500);
  };

  const handleClose = () => {
    closeContact();
    // Reset success state after modal finishes closing animation
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-[24px] shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row md:min-h-[550px] z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 md:right-6 text-gray-400 hover:text-black transition-colors z-20 p-2 rounded-full hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column: Premium Construction Image */}
            <div className="hidden md:flex md:w-1/2 relative overflow-hidden flex-col justify-end p-8 text-white">
              <img
                src={contactHouse}
                alt="Modern luxury house under construction"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
              
              {/* Text content inside the image */}
              <div className="relative z-10 space-y-3">
                <span className="text-[#FF4D11] text-xs font-semibold uppercase tracking-wider bg-[#FF4D11]/10 px-3 py-1 rounded-full border border-[#FF4D11]/30 w-fit block">
                  Yopavve Construction
                </span>
                <h3 className="text-3xl font-bold font-['Anta'] tracking-wide leading-tight">
                  Let's Build Your Dream Project Together
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Submit your details and our team of sales professionals will reach out to schedule a consultation within 24 hours.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Sales Form / Success State */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <h2 className="text-2xl sm:text-3xl font-semibold text-black tracking-tight mb-2">
                      Contact Sales
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Tell us about your project requirements and let's get started.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Input */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name here"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF4D11] focus:ring-1 focus:ring-[#FF4D11] transition-all text-sm"
                        />
                      </div>

                      {/* Contact Fields Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email Input */}
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="youremail@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF4D11] focus:ring-1 focus:ring-[#FF4D11] transition-all text-sm"
                          />
                        </div>

                        {/* Phone Input */}
                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF4D11] focus:ring-1 focus:ring-[#FF4D11] transition-all text-sm"
                          />
                        </div>
                      </div>

                      {/* Project Type Select */}
                      <div>
                        <label htmlFor="projectType" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF4D11] focus:ring-1 focus:ring-[#FF4D11] bg-white transition-all text-sm appearance-none cursor-pointer"
                        >
                          <option>Driveway Paving</option>
                          <option>Patio & Backyard</option>
                          <option>Garden Pathways</option>
                          <option>Steps & Staircases</option>
                          <option>Commercial Areas</option>
                          <option>Pool Surrounds</option>
                          <option>Other / Custom Paving</option>
                        </select>
                      </div>

                      {/* Message Input */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                          Project Description
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us details about your project size, timeline, and expectations..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF4D11] focus:ring-1 focus:ring-[#FF4D11] transition-all text-sm resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FF4D11] text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#E6450F] transition-all shadow-lg shadow-[#FF4D11]/25 hover:shadow-[#FF4D11]/35 hover:-translate-y-0.5 active:translate-y-0 disabled:bg-gray-400 disabled:shadow-none"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Request
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-8 px-4 flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-black mb-2">Request Received!</h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                      Thank you for contacting Yopavve sales. One of our project managers will reach out to you shortly to discuss your details.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-8 py-3 bg-[#1D1D1D] hover:bg-black text-white rounded-xl font-medium transition-colors shadow-lg"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
