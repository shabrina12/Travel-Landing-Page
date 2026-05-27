// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/#packages', key: 'packages', label: 'Packages' },
    { href: '/#destinations', key: 'destinations', label: 'Destinations' },
    { href: '/#contact', key: 'contacts', label: 'Contact' },
];

// TOUR PACKAGES
export const TOUR_PACKAGES = [
    {
        category: '5 Days Packages',
        packages: [
            { id: 'popular', name: 'Popular Kerala', places: 'Kochi | Munnar | Thekkady | Alleppey', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 12990, image: '/packages/Popular-Kerala.webp' },
            { id: 'adventure', name: 'Adventure Kerala', places: 'Athirapally | Munnar | Thekkady | Alleppey', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 13990, image: '/packages/Adventure-Kerala.webp' },
            { id: 'instagram', name: 'Instagram Kerala', places: 'Munnar | Alleppey | Varkala', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 16990, image: '/packages/Instagram-Kerala.webp' },
        ],
    },
    {
        category: '6 Days Packages',
        packages: [
            { id: 'amazing', name: 'Amazing Kerala', places: 'Kochi | Munnar | Thekkady | Alleppey', duration: '5 Nights & 6 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 16990, image: '/packages/Amazing-Kerala.webp' },
            { id: 'coastal', name: 'Coastal Kerala', places: 'Cochin | Alleppey | Varkala | Kovalam', duration: '5 Nights & 6 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 17990, image: '/packages/Coastal-Kerala.webp' },
            { id: 'relaxed', name: 'Relaxed Kerala', places: 'Munnar | Alleppey | Kovalam', duration: '5 Nights & 6 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 18990, image: '/packages/Relaxed-Kerala.webp' },
        ],
    },
    {
        category: '7 Days Packages',
        packages: [
            { id: 'temples', name: 'Temples Of Kerala', places: 'Guruvayur | Kochi | Chengannur | Trivandrum', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: '', hotel: '3 Star Hotels', price: 19990, image: '/packages/Temples-Of-Kerala.webp' },
            { id: 'bestof', name: 'Best Of Kerala', places: 'Munnar | Thekkady | Alleppey | Varkala | Kovalam', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 21990, image: '/packages/Best-Of-Kerala.webp' },
            { id: 'wonderful', name: 'Wonderful Kerala', places: 'Munnar | Thekkady | Alleppey | Kovalam', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 19990, image: '/packages/Wonderful-Kerala.webp' },
        ],
    },
    {
        category: 'Honeymoon Packages',
        packages: [
            { id: 'romantic', name: 'Romantic Kerala', places: 'Kochi | Munnar | Thekkady | Alleppey', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 18990, image: '/packages/Romantic-Kerala.webp' },
            { id: 'memorable', name: 'Memorable Kerala', places: 'Munnar | Thekkady | Alleppey | Varkala', duration: '5 Nights & 6 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 19990, image: '/packages/Memorable-Kerala.webp' },
            { id: 'exotic', name: 'Exotic Kerala', places: 'Munnar | Thekkady | Alleppey | Varkala | Kovalam', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 23990, image: '/packages/Exotic-Kerala.webp' },
        ],
    },
    {
        category: 'Premium Packages',
        packages: [
            { id: 'treehouse', name: 'Kerala With Tree House', places: 'Kochi | Munnar | Thekkady | Alleppey', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '4 Star Hotels', price: 22990, image: '/packages/Kerala-With-Tree-House.webp' },
            { id: 'jacuzzi', name: 'Kerala With Jacuzzi', places: 'Kochi | Munnar | Thekkady | Alleppey', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Premium Houseboat', hotel: '5 Star Hotels', price: 28990, image: '/packages/Kerala-With-Jaccuzzi.webp' },
            { id: 'poolvilla', name: 'Kerala With Pool Villa', places: 'Kochi | Munnar | Thekkady | Alleppey', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Premium Houseboat', hotel: '5 Star Hotels', price: 32999, image: '/packages/Kerala-With-Pool-Villa.webp' },
        ],
    },
    {
        category: 'Long Stay Packages',
        packages: [
            { id: 'allof', name: 'All of Kerala', places: 'Wayanad | Athirapilly | Munnar | Thekkady | Alleppey | Varkala | Kovalam | Kanyakumari', duration: '10 Nights & 11 Days', minGuests: 'Min. 4 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 34990, image: '/packages/All-Kerala.webp' },
            { id: 'madurai', name: 'Kerala & Madurai Rameshwaram', places: 'Kochi | Munnar | Thekkady | Rameshwaram | Madurai | Kanyakumari | Kovalam | Alleppey', duration: '9 Nights & 10 Days', minGuests: 'Min. 4 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 29990, image: '/packages/Kerala-With-Madurai.webp' },
            { id: 'kanyakumari', name: 'Kerala With Kanyakumari', places: 'Kochi | Munnar | Thekkady | Alleppey | Varkala | Kovalam | Kanyakumari', duration: '8 Nights & 9 Days', minGuests: 'Min. 4 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 24990, image: '/packages/Kerala-With-Kanyakumari.webp' },
        ],
    },
    {
        category: 'Weekend Packages',
        packages: [
            { id: 'wayanad', name: 'Wayanad', places: 'Wayanad', duration: '2 Nights & 3 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 9990, image: '/packages/Wayanad.webp' },
            { id: 'munnar-weekend', name: 'Munnar', places: 'Munnar', duration: '2 Nights & 3 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 7990, image: '/packages/Munnar.webp' },
            { id: 'houseboat', name: 'Alleppey Houseboat', places: 'Munnar | Alleppey - Houseboat', duration: '1 Night & 2 Days', minGuests: 'Min. 2 Adults', accommodation: 'All Meals', hotel: '3 Star Hotels', price: 3990, image: '/packages/Houseboat.webp' },
        ],
    },
];

export const KARNATAKA_PACKAGES = [
    {
        category: '3 Days Packages',
        packages: [
            { id: 'mysore', name: 'Mysore Heritage', places: 'Mysore | Srirangapatna', duration: '2 Nights & 3 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 8999, image: '/packages/mysore.webp' },
            { id: 'coorg', name: 'Coorg Weekend', places: 'Coorg | Madikeri', duration: '2 Nights & 3 Days', minGuests: 'Min. 2 Adults', accommodation: 'Resort', hotel: '3 Star Hotels', price: 11999, image: '/packages/coorg.webp' },
            { id: 'bandipur', name: 'Bandipur Safari', places: 'Bandipur | Mysore', duration: '2 Nights & 3 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 10999, image: '/packages/bandipur.webp' },
        ],
    },
    {
        category: '5 Days Packages',
        packages: [
            { id: 'karnataka', name: 'Best of Karnataka', places: 'Mysore | Coorg | Chikmagalur | Hampi', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 24999, image: '/packages/best-karnataka.webp' },
            { id: 'heritage', name: 'Heritage Karnataka', places: 'Mysore | Hampi | Badami', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 27999, image: '/packages/heritage-karnataka.webp' },
            { id: 'hillstation', name: 'Hill Stations Karnataka', places: 'Coorg | Chikmagalur | Kodachadri', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Resort', hotel: '3 Star Hotels', price: 22999, image: '/packages/hill-karnataka.webp' },
        ],
    },
    {
        category: '7 Days Packages',
        packages: [
            { id: 'complete', name: 'Complete Karnataka', places: 'Mysore | Coorg | Chikmagalur | Hampi | Gokarna | Udupi', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 42999, image: '/packages/complete-karnataka.webp' },
            { id: 'spiritual', name: 'Spiritual Karnataka', places: 'Udupi | Dharmasthala | Sringeri | Hampi', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 39999, image: '/packages/spiritual-karnataka.webp' },
            { id: 'adventure', name: 'Adventure Karnataka', places: 'Coorg | Dandeli | Banhanki | Ullal', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 37999, image: '/packages/adventure-karnataka.webp' },
        ],
    },
];

export const TAMIL_NADU_PACKAGES = [
    {
        category: '3 Days Packages',
        packages: [
            { id: 'ooty', name: 'Ooty Getaway', places: 'Ooty | Coonoor', duration: '2 Nights & 3 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 7999, image: '/packages/ooty.webp' },
            { id: 'kodaikanal', name: 'Kodaikanal Retreat', places: 'Kodaikanal', duration: '2 Nights & 3 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 7499, image: '/packages/kodaikanal.webp' },
            { id: 'yercaud', name: 'Yercaud Hill', places: 'Yercaud', duration: '2 Nights & 3 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 6999, image: '/packages/yercaud.webp' },
        ],
    },
    {
        category: '5 Days Packages',
        packages: [
            { id: 'hills', name: 'Hill Stations Tamil Nadu', places: 'Ooty | Kodaikanal | Yercaud | Coonoor', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 19999, image: '/packages/hills-tamil.webp' },
            { id: 'heritage', name: 'Tamil Heritage', places: 'Madurai | Thanjavur | Trichy | Chettinad', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 22999, image: '/packages/heritage-tamil.webp' },
            { id: 'nature', name: 'Nature Tamil Nadu', places: 'Mudumalai | Bandipur | Pykara | Kon', duration: '4 Nights & 5 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 18999, image: '/packages/nature-tamil.webp' },
        ],
    },
    {
        category: '7 Days Packages',
        packages: [
            { id: 'complete', name: 'Complete Tamil Nadu', places: 'Ooty | Kodaikanal | Kanyakumari | Rameshwaram | Madurai | Thanjavur', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 39999, image: '/packages/complete-tamil.webp' },
            { id: 'pilgrimage', name: 'Pilgrimage Tamil Nadu', places: 'Rameshwaram | Madurai | Kanyakumari | Tiruvannamalai', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Pvt Car', hotel: '3 Star Hotels', price: 37999, image: '/packages/pilgrimage-tamil.webp' },
            { id: 'honeymoon', name: 'Honeymoon Tamil Nadu', places: 'Ooty | Kodaikanal | Kanyakumari | Aleppey', duration: '6 Nights & 7 Days', minGuests: 'Min. 2 Adults', accommodation: 'Houseboat', hotel: '3 Star Hotels', price: 44999, image: '/packages/honeymoon-tamil.webp' },
        ],
    },
];

export const REGION_INFO = {
    karnataka: {
        name: 'Karnataka',
        heroTitle: 'Karnataka Tour Packages',
        heroSubtitle: 'Discover the Silicon Valley of India with our customized tour packages',
    },
    'tamil-nadu': {
        name: 'Tamil Nadu',
        heroTitle: 'Tamil Nadu Tour Packages',
        heroSubtitle: 'Explore the Land of Temples and Hill Stations',
    },
};

// DESTINATIONS
export const DESTINATIONS = [
    { name: 'Alleppey', discount: '30% OFF', image: '/destinations/d1.jpg' },
    { name: 'Thekkady', discount: '25% OFF', image: '/destinations/d2.jpg' },
    { name: 'Cochin', discount: '35% OFF', image: '/destinations/d3.jpg' },
    { name: 'Munnar', discount: '20% OFF', image: '/destinations/d4.jpg' },
    { name: 'Kanyakumari', discount: '20% OFF', image: '/destinations/d5.jpg' },
    { name: 'Kovalam', discount: '30% OFF', image: '/destinations/d6.jpg' },
    { name: 'Ooty', discount: '25% OFF', image: '/destinations/d7.jpg' },
    { name: 'Kodaikanal', discount: '35% OFF', image: '/destinations/d8.jpg' },
];

// STATS
export const STATS = [
    { value: '1240+', label: 'Hotel Deals' },
    { value: '123+', label: 'Car Fleet' },
    { value: '5234+', label: 'Happy Clients' },
];

// SERVICES
export const SERVICES = [
    {
        icon: 'Hotel',
        title: 'Hotel & Resorts',
        subtitle: 'Through extensive network and strong partnerships of 2200+ finest hotels in Kerala, we have curated exclusive deals that offer exceptional rates and added benefits.',
    },
    {
        icon: 'Ship',
        title: 'Houseboat Fleet',
        subtitle: 'Discover the allure of Kerala\'s backwaters with own Houseboat Fleet in Alleppey. Our experienced crew ensures an unforgettable experience.',
    },
    {
        icon: 'Car',
        title: 'Cab Fleet',
        subtitle: 'With own Cab Fleet & experienced chauffeurs, we are committed to providing you with a safe and enjoyable ride.',
    },
    {
        icon: 'Headphones',
        title: 'Local Support',
        subtitle: 'Our local support team (English, Hindi, Tamil, Telugu, Kannada) is readily available to address any travel-related queries.',
    },
    {
        icon: 'CreditCard',
        title: 'Easy Payment Terms',
        subtitle: 'Flexible installments, multiple payment options, and transparent pricing ensure a seamless booking process.',
    },
    {
        icon: 'Star',
        title: '4.5 Star Reviews',
        subtitle: 'Our past guests love us for exceptional service, memorable experiences and transparent pricing.',
    },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
    {
        title: 'Destinations',
        links: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Lakshadweep'],
    },
    {
        title: 'Company',
        links: ['About Us', 'Why Choose Us?', 'FAQs', 'Blog'],
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    address: 'NH-47, Edayappuram Road, Near Thaikkatukara Service Co-operative Bank, Thottumug, Kochi, Kerala 683108',
    phone: '+91 96439 61776',
    email: 'quote@KeralaTour.info',
};

export const SOCIALS = {
    title: 'Social',
    links: [
        '/facebook.svg',
        '/instagram.svg',
        '/twitter.svg',
        '/youtube.svg',
    ],
};

export const CONTACT_INFO = {
    phone: '+91 96439 61776',
    email: 'quote@KeralaTour.info',
    whatsapp: '919643961776',
    address: 'NH-47, Edayappuram Road, Near Thaikkatukara Service Co-operative Bank, Thottumug, Kochi, Kerala 683108',
};
