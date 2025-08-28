import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    onClose(); // Close the modal after submission
    // Reset form fields
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    // The main overlay, which dims the background
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      {/* The modal itself with the new "glass" effect styling */}
      <div 
        className="bg-slate-900/80 backdrop-blur-sm border border-white/20 rounded-xl max-w-md w-full p-6 relative text-white"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
            Contact Us
          </h3>
          <p className="text-gray-300">We'll get back to you as soon as possible.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-400"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-400"
            value={formData.company}
            onChange={handleChange}
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none placeholder:text-gray-400"
            value={formData.message}
            onChange={handleChange}
            required
          />
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;