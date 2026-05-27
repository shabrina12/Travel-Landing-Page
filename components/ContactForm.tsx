'use client'
import React, { useState } from 'react'
import { CONTACT_INFO } from '@/constants'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp number is required';
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          travelDate: formData.travelDate,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        const whatsappMessage = encodeURIComponent(
          `Hi, I want Kerala tour quote. Name: ${formData.name}, Travel Date: ${formData.travelDate || 'TBD'}`
        );
        window.open(
          `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${whatsappMessage}`,
          '_blank'
        );
        setFormData({ name: '', email: '', phone: '', travelDate: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className='max-container padding-container py-20'>
      <div className='bg-[#5D50C6] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12'>
        {/* Left - Info */}
        <div className='flex-1 text-white flex flex-col justify-center gap-6'>
          <h2 className='text-3xl md:text-4xl font-bold'>Plan Your Kerala Trip Now</h2>
          <p className='text-lg opacity-90'>
            Kindly provide below information for detailed quote in PDF
          </p>
          
          <div className='flex flex-col gap-4 mt-4'>
            <div className='flex items-center gap-4'>
              <span className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                📍
              </span>
              <p className='opacity-90'>{CONTACT_INFO.address}</p>
            </div>
            <div className='flex items-center gap-4'>
              <span className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                📞
              </span>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className='opacity-90 hover:opacity-100'>
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className='flex items-center gap-4'>
              <span className='w-12 h-12 bg-white/20 rounded-full flex items-center justify-center'>
                ✉️
              </span>
              <a href={`mailto:${CONTACT_INFO.email}`} className='opacity-90 hover:opacity-100'>
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <a
            href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=I%20need%20help%20in%20planning%20Kerala%20Trip`}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-8 rounded-full font-semibold text-center transition-colors w-fit'
          >
            WhatsApp Us Directly
          </a>
        </div>

        {/* Right - Form */}
        <div className='flex-1 bg-white rounded-3xl p-8'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-[#191825] font-medium mb-2'>
                Your Name *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name *'
                autoComplete='name'
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor='phone' className='block text-[#191825] font-medium mb-2'>
                WhatsApp Number *
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='WhatsApp number *'
                autoComplete='tel'
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor='email' className='block text-[#191825] font-medium mb-2'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email address'
                autoComplete='email'
                className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow'
              />
            </div>

            <div>
              <label htmlFor='travelDate' className='block text-[#191825] font-medium mb-2'>
                Travel Date
              </label>
              <input
                type='date'
                id='travelDate'
                name='travelDate'
                value={formData.travelDate}
                onChange={handleChange}
                title='Travel date'
                className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-[#191825] font-medium mb-2'>
                Special Requirements
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder='Special requirements (honeymoon, anniversary, accessibility...)'
                className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow resize-none'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-[#5D50C6] hover:bg-[#4a3fb0] text-white py-4 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Sending...' : 'Check Price on WhatsApp 🚀'}
            </button>

            <div className='space-y-2 text-sm text-gray-500'>
              <p className='flex items-center gap-2'>
                <span className='text-green-500'>✔</span> 10,000+ Happy Travelers
              </p>
              <p className='flex items-center gap-2'>
                <span className='text-green-500'>✔</span> Instant WhatsApp Support
              </p>
              <p className='flex items-center gap-2'>
                <span className='text-green-500'>✔</span> Best Price Guaranteed
              </p>
            </div>

            {submitStatus === 'success' && (
              <p className='text-green-600 text-center font-medium'>
                Thank you! We will contact you shortly.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className='text-red-500 text-center font-medium'>
                Something went wrong. Please try again or contact us via WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
