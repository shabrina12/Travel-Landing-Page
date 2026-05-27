'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface PackageModalProps {
    pkg: {
        id: string
        name: string
        places: string
        duration: string
        minGuests: string
        accommodation: string
        hotel: string
        price: number
        image: string
    } | null
    isOpen: boolean
    onClose: () => void
}

const PackageModal = ({ pkg, isOpen, onClose }: PackageModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        travelDate: '',
        message: '',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    if (!isOpen || !pkg) return null

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.phone.trim()) {
            newErrors.phone = 'WhatsApp number is required'
        }
        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors = validateForm()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    travelDate: formData.travelDate,
                    message: `Package: ${pkg.name}\nPlaces: ${pkg.places}\n${formData.message}`,
                }),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', phone: '', email: '', travelDate: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            <div className='absolute inset-0 bg-black/50' onClick={onClose} />
            <div className='relative bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto'>
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-2xl'
                >
                    ×
                </button>

                <div className='relative h-48'>
                    <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className='object-cover rounded-t-3xl'
                    />
                    <div className='absolute inset-0 bg-black/30 rounded-t-3xl' />
                    <div className='absolute bottom-4 left-4 text-white'>
                        <h3 className='text-xl font-bold'>{pkg.name}</h3>
                        <p className='text-sm opacity-90'>{pkg.places}</p>
                    </div>
                </div>

                <div className='p-6'>
                    <div className='flex flex-wrap gap-2 text-xs text-[#5D50C6] mb-4'>
                        <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{pkg.duration}</span>
                        <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{pkg.minGuests}</span>
                        {pkg.accommodation && (
                            <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{pkg.accommodation}</span>
                        )}
                        {pkg.hotel && (
                            <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{pkg.hotel}</span>
                        )}
                    </div>

                    <div className='flex items-baseline gap-2 mb-6'>
                        <span className='text-2xl font-bold text-[#5D50C6]'>from ₹{pkg.price.toLocaleString('en-IN')}</span>
                        <span className='text-sm text-gray-500'>/ person</span>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div>
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your name *'
                                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] ${
                                    errors.name ? 'border-red-500' : 'border-gray-200'
                                }`}
                            />
                            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type='tel'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='WhatsApp number *'
                                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] ${
                                    errors.phone ? 'border-red-500' : 'border-gray-200'
                                }`}
                            />
                            {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
                        </div>

                        <div>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email address'
                                className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6]'
                            />
                        </div>

                        <div>
                            <input
                                type='date'
                                name='travelDate'
                                value={formData.travelDate}
                                onChange={handleChange}
                                className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6]'
                            />
                        </div>

                        <div>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                rows={2}
                                placeholder='Special requirements...'
                                className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5D50C6] resize-none'
                            />
                        </div>

                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='w-full bg-[#5D50C6] hover:bg-[#4a3fb0] text-white py-3 rounded-xl font-semibold transition-colors disabled:opacity-50'
                        >
                            {isSubmitting ? 'Sending...' : 'Get Quote'}
                        </button>

                        {submitStatus === 'success' && (
                            <p className='text-green-600 text-center font-medium'>
                                Thank you! We will contact you shortly.
                            </p>
                        )}
                        {submitStatus === 'error' && (
                            <p className='text-red-500 text-center font-medium'>
                                Please try again or contact us via WhatsApp.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PackageModal