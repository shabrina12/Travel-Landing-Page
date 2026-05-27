'use client'
import React, { useState } from 'react'
import Title from './Title'
import Image from 'next/image'
import { TOUR_PACKAGES } from '@/constants'
import PackageModal from './PackageModal'
import type { CMSTourPackage, CMSImage } from '@/lib/types'

interface PackageData {
    id: string
    name: string
    places: string
    duration: string
    minGuests: string
    accommodation: string
    hotel: string
    price: number
    image: string
}

interface CategoryData {
    category: string
    packages: PackageData[]
}

interface TourPackagesProps {
    cmsData?: CMSTourPackage[]
    packages?: CategoryData[]
    title?: string
    subtitle?: string
}

const TourPackages = ({ 
    cmsData,
    packages = TOUR_PACKAGES, 
    title: propsTitle = 'KERALA TOUR PACKAGES', 
    subtitle = 'Explore Our Tour Packages' 
}: TourPackagesProps) => {
    // Use CMS data if provided
    let packageCategories: CategoryData[]
    
    if (cmsData && cmsData.length > 0) {
        // Convert CMS data to category format
        packageCategories = [{
            category: 'All Packages',
            packages: cmsData.map(pkg => ({
                id: pkg.slug?.current || pkg._id,
                name: pkg.title,
                places: pkg.locations?.join(' | ') || '',
                duration: pkg.duration || '',
                minGuests: pkg.minGuests || '',
                accommodation: pkg.accommodation || '',
                hotel: pkg.hotel || '3 Star Hotels',
                price: pkg.price || 0,
                image: pkg.heroImage?.asset?.url || '/packages/default.webp'
            }))
        }]
    } else {
        packageCategories = packages as CategoryData[]
    }

    const [activeCategory, setActiveCategory] = useState(0);
    const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLearnMore = (pkg: PackageData) => {
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    return (
        <section id="packages" className='max-container padding-container py-20 flex flex-col gap-12'>
            <div className='top text-center'>
                <Title title={propsTitle} subtitle={subtitle} />
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
                {packageCategories.map((category, index) => (
                    <button
                        key={category.category}
                        onClick={() => setActiveCategory(index)}
                        className={`px-6 py-3 rounded-full transition-all ${
                            activeCategory === index
                                ? 'bg-[#5D50C6] text-white'
                                : 'bg-white border hover:border-[#5D50C6]'
                        }`}
                    >
                        {category.category}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {packageCategories[activeCategory]?.packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} onLearnMore={handleLearnMore} />
                ))}
            </div>

            <PackageModal
                pkg={selectedPackage}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}

interface PackageCardProps {
    pkg: {
        id: string;
        name: string;
        places: string;
        duration: string;
        minGuests: string;
        accommodation: string;
        hotel: string;
        price: number;
        image: string;
    };
    onLearnMore: (pkg: PackageCardProps['pkg']) => void;
}

const PackageCard = ({ pkg, onLearnMore }: PackageCardProps) => {
    return (
        <div className='bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col'>
            <div className='relative h-64'>
                <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className='absolute top-4 right-4 bg-[#5D50C6] text-white px-4 py-2 rounded-full text-sm font-semibold'>
                    Customization Available
                </div>
            </div>

            <div className='p-6 flex flex-col gap-4 flex-1'>
                <h3 className='text-xl font-bold text-[#191825]'>{pkg.name}</h3>
                <p className='text-sm text-gray-600'>{pkg.places}</p>

                <div className='flex flex-wrap gap-2 text-xs text-[#5D50C6]'>
                    <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{pkg.duration}</span>
                    <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{pkg.minGuests}</span>
                    {pkg.accommodation && (
                        <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{pkg.accommodation}</span>
                    )}
                    {pkg.hotel && (
                        <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{pkg.hotel}</span>
                    )}
                </div>

                <div className='border-t pt-4'>
                    <div className='flex items-baseline gap-2'>
                        <span className='text-2xl font-bold text-[#5D50C6]'>from ₹{pkg.price.toLocaleString('en-IN')}</span>
                        <span className='text-sm text-gray-500'>/ person</span>
                    </div>
                </div>

                <div className='mt-auto pt-4 flex gap-3'>
                    <a
                        href={`https://api.whatsapp.com/send?phone=919643961776&text=I%20need%20help%20in%20planning%20${encodeURIComponent(pkg.name)}%20Trip`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 bg-[#25D366] text-white py-3 rounded-xl text-center font-semibold hover:bg-[#20bd5a] transition-colors'
                    >
                        WhatsApp Us
                    </a>
                    <button 
                        onClick={() => onLearnMore(pkg)}
                        className='flex-1 bg-[#5D50C6] text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors'
                    >
                        Get Quote
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TourPackages
