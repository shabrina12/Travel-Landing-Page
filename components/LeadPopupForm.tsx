'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface FormData {
  name: string
  phone: string
  email: string
  travelDate: string
  message: string
}

interface LeadPopupContextType {
  openPopup: () => void
  closePopup: () => void
}

const LeadPopupContext = createContext<LeadPopupContextType>({
  openPopup: () => {},
  closePopup: () => {},
})

export const useLeadPopup = () => useContext(LeadPopupContext)

const WHATSAPP_NUMBER = '919643961776'

export function LeadPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    message: '',
  })
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({})

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('leadPopupSeen')

    const timer = setTimeout(() => {
      if (!hasSeenPopup) {
        setIsOpen(true)
        sessionStorage.setItem('leadPopupSeen', 'true')
      }
    }, 8000)

    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasSeenPopup) {
        setIsOpen(true)
        sessionStorage.setItem('leadPopupSeen', 'true')
      }
    }

    document.addEventListener('mouseleave', handleExitIntent)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleExitIntent)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep1 = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Enter valid phone number'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter valid email address'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      console.error('Failed to submit lead:', error)
    }

    const whatsappMessage = encodeURIComponent(
      `Hi, I want Kerala tour quote.\nName: ${formData.name}\nEmail: ${formData.email}\nTravel Date: ${formData.travelDate || 'TBD'}\n${formData.message ? `Message: ${formData.message}` : ''}`
    )
    window.open(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${whatsappMessage}`,
      '_blank'
    )
    setLoading(false)
    setIsOpen(false)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  const openPopup = () => {
    setIsOpen(true)
    sessionStorage.setItem('leadPopupSeen', 'true')
  }

  const contextValue: LeadPopupContextType = {
    openPopup,
    closePopup,
  }

  return (
    <LeadPopupContext.Provider value={contextValue}>
      {children}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
          <div
            className='absolute inset-0 bg-black/60 backdrop-blur-sm'
            onClick={closePopup}
          />

          <div className='relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 max-h-[90vh] overflow-y-auto'>
            <button
              onClick={closePopup}
              className='absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors'
            >
              ✕
            </button>

            {step === 1 ? (
              <form onSubmit={handleStep1Submit} className='space-y-6'>
                <div className='text-center'>
                  <h2 className='text-2xl md:text-3xl font-bold text-[#191825] mb-2'>
                    Get Kerala Tour Quote in 30 Seconds
                  </h2>
                  <p className='text-gray-500'>Quick. Free. No obligations.</p>
                </div>

                <div className='space-y-4'>
                  <div>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Your Name *'
                      className={`w-full px-4 py-4 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && (
                      <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='WhatsApp Number *'
                      className={`w-full px-4 py-4 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && (
                      <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Your Email Address *'
                      className={`w-full px-4 py-4 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && (
                      <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className='space-y-2 text-sm text-gray-600'>
                  <p className='flex items-center gap-2'>
                    <span className='text-green-500'>✔</span> 10,000+ Travelers
                  </p>
                  <p className='flex items-center gap-2'>
                    <span className='text-green-500'>✔</span> Instant WhatsApp Support
                  </p>
                  <p className='flex items-center gap-2'>
                    <span className='text-green-500'>✔</span> Best Price Guaranteed
                  </p>
                </div>

                <button
                  type='submit'
                  className='w-full bg-[#5D50C6] hover:bg-[#4a3fb0] text-white py-4 text-lg font-semibold rounded-xl transition-colors'
                >
                  Get My Quote 🚀
                </button>
              </form>
            ) : (
              <form onSubmit={handleFinalSubmit} className='space-y-6'>
                <div className='text-center'>
                  <h2 className='text-2xl md:text-3xl font-bold text-[#191825] mb-2'>
                    Almost Done! 🎉
                  </h2>
                  <p className='text-gray-500'>Add a few more details to get accurate pricing</p>
                </div>

                <div className='bg-[#5D50C6]/10 rounded-xl p-4'>
                  <p className='text-sm text-gray-600 mb-2'>Contact Info</p>
                  <p className='font-semibold text-[#191825]'>{formData.name}</p>
                  <p className='text-sm text-gray-500'>{formData.phone}</p>
                  <p className='text-sm text-gray-500'>{formData.email}</p>
                </div>

                <div className='space-y-4'>
                  <div>
                    <input
                      type='date'
                      name='travelDate'
                      value={formData.travelDate}
                      onChange={handleChange}
                      placeholder='Travel Date'
                      className='w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow'
                    />
                  </div>

                  <div>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Any special requirements (honeymoon, kids, etc.)'
                      rows={3}
                      className='w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] transition-shadow resize-none'
                    />
                  </div>
                </div>

                <div className='flex gap-3'>
                  <button
                    type='button'
                    onClick={() => setStep(1)}
                    className='flex-1 bg-gray-100 hover:bg-gray-200 text-[#191825] py-4 text-lg font-semibold rounded-xl transition-colors'
                  >
                    Back
                  </button>
                  <button
                    type='submit'
                    disabled={loading}
                    className='flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 text-lg font-semibold rounded-xl transition-colors disabled:opacity-50'
                  >
                    {loading ? 'Opening...' : 'Check Price on WhatsApp'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </LeadPopupContext.Provider>
  )
}