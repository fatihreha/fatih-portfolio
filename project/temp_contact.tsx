import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import OpenStreetMap from './OpenStreetMap';

interface ContactProps {
  id: string;
  socialLinks: {
    id: string;
    label: string;
    icon: React.ReactNode;
    url: string;
  }[];
}

const Contact: React.FC<ContactProps> = ({ id, socialLinks }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  
  // Validation functions
  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validateName = (name: string): string => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (name.trim().length > 50) return 'Name must be less than 50 characters';
    return '';
  };



  const validateMessage = (message: string): string => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters';
    if (message.trim().length > 1000) return 'Message must be less than 1000 characters';
    return '';
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name': return validateName(value);
      case 'email': return validateEmail(value);
      case 'message': return validateMessage(value);
      default: return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    
    // Validate all fields
    const newErrors: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      message: true
    });

    // If there are errors, don't submit
    if (Object.keys(newErrors).some(key => newErrors[key])) {
      console.log('Form validation failed:', newErrors);
      setSubmitMessage({
        type: 'error',
        text: 'Please fix the errors above before submitting.'
      });
      return;
    }

    console.log('Form validation passed, starting submission...');
    setIsSubmitting(true);
    
    try {
      // Create the data object to insert
      const messageData = { 
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      };
      
      console.log('Attempting to insert data:', messageData);
      console.log('Supabase client status:', supabase ? 'Connected' : 'Not connected');
      
      // Insert form data into Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([messageData])
        .select();
      
      console.log('Supabase response:', { data, error });
      
      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          code: error.code,
          hint: error.hint || 'No hint provided',
          details: error.details || 'No details provided'
        });
        
        // Check for specific error types and provide user-friendly messages
        if (error.code === '42501') {
          setSubmitMessage({
            type: 'error',
            text: 'Unable to send message due to database permissions. Please contact me directly at fatihreha@proton.me'
          });
        } else if (error.code === '23505') {
          setSubmitMessage({
            type: 'error',
            text: 'This message appears to be a duplicate. Please try again with different content.'
          });
        } else {
          setSubmitMessage({
            type: 'error',
            text: `Failed to send message (${error.code}): ${error.message}. Please contact me directly at fatihreha@proton.me`
          });
        }
        return;
      }
      
      console.log('Message sent successfully:', data);
      
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTouched({});
      setErrors({});
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    } catch (error: any) {
      console.error('Unexpected error sending message:', error);
      
      setSubmitMessage({
        type: 'error',
        text: `An unexpected error occurred: ${error.message}. Please try again or contact me directly at fatihreha@proton.me`
      });
    } finally {
      console.log('Form submission completed, setting isSubmitting to false');
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id={id} className="py-16 bg-white dark:bg-dark-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out if you're looking for an intern, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                  <MapPin size={20} />
                </div>
                <div className="w-full">
                  <h4 className="font-semibold mb-1 dark:text-white">Location</h4>
                  <div className="w-full max-w-xs h-[190px]">
                    <div className="h-[150px] w-full relative">
                      <OpenStreetMap 
                        center={[41.0233, 29.0244]} 
                        zoom={13} 
                        width="100%" 
                        height="100%" 
                      />
                    </div>
                    <div className="p-2 bg-gray-50 dark:bg-gray-800 text-xs text-center text-gray-500 dark:text-gray-400">
                      Üsküdar/Istanbul, Turkey
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 dark:text-white">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                    fatihreha@proton.me
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+90 0551-125-21-81</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold mb-4 dark:text-white">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-indigo-400 p-3 rounded-full transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors ${
                      errors.name && touched.name
                        ? 'border-red-500 dark:border-red-400'
                        : formData.name && !errors.name
                        ? 'border-green-500 dark:border-green-400'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {formData.name && !errors.name && touched.name && (
                    <CheckCircle className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
                  )}
                  {errors.name && touched.name && (
                    <AlertCircle className="absolute right-3 top-2.5 h-5 w-5 text-red-500" />
                  )}
                </div>
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors ${
                      errors.email && touched.email
                        ? 'border-red-500 dark:border-red-400'
                        : formData.email && !errors.email
                        ? 'border-green-500 dark:border-green-400'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formData.email && !errors.email && touched.email && (
                    <CheckCircle className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
                  )}
                  {errors.email && touched.email && (
                    <AlertCircle className="absolute right-3 top-2.5 h-5 w-5 text-red-500" />
                  )}
                </div>
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
              

              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message *
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    ({formData.message.length}/1000 characters)
                  </span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-colors resize-none ${
                      errors.message && touched.message
                        ? 'border-red-500 dark:border-red-400'
                        : formData.message && !errors.message
                        ? 'border-green-500 dark:border-green-400'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Tell me about your project, question, or how I can help you..."
                  />
                  {formData.message && !errors.message && touched.message && (
                    <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                  )}
                  {errors.message && touched.message && (
                    <AlertCircle className="absolute right-3 top-3 h-5 w-5 text-red-500" />
                  )}
                </div>
                {errors.message && touched.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>
              
              {submitMessage && (
                <div className={`p-3 rounded ${
                  submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full py-3 px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;