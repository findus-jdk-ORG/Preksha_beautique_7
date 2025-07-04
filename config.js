const companyConfig = {
    companyName: "PREKSHA BEAUTIQUE",
    slogan: "Celebrating the spirit of Navaratri",
    logoUrl: "logo1.jpeg",
    contact: {
        phone: "+917990467477",
    },
   
    socialMedia: {
        whatsapp: "https://wa.me/917990467477",
        instagram: "https://www.instagram.com/_preksha_boutique_?igsh=MWFsdTl0aTdmZnFzcA==",
        facebook: "https://www.facebook.com/profile.php?id=100063156725127",
        map: "https://www.google.com/maps/dir//Cresent+Building,+to,+Haluriya+Chowk,+Nawa+Para,+Bhavnagar,+Gujarat+364001/@21.7743498,72.0687974,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x395f5b198b6d1b5b:0x2a5a328513d9cbed!2m2!1d72.151199!2d21.7743702?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D", // Add your Google Maps link here
        google: "https://www.google.com/search?kgmid=/g/11xl40bbnb&hl=en-IN&q=Preksha+Boutique&shndl=30&shem=lcuae,npsc3&source=sh/x/loc/osrp/m5/5&kgs=a277028cafbc8f91" // Add your 
    },
   
    galleryImages: [
        "./assets/image1.jpeg",
        "./assets/image2.jpeg",
        "./assets/image3.jpeg",
        "./assets/image4.jpeg",
        "./assets/image5.jpeg",
        "./assets/image6.jpeg",
        "./assets/image7.jpeg",
        "./assets/image8.jpeg",
        "./assets/image9.jpeg",
        "./assets/image10.jpeg",
        "./assets/image11.jpeg",
        "./assets/image12.jpeg",
        "./assets/image13.jpeg",
        "./assets/image14.jpeg",
        "./assets/image15.jpeg",
        "./assets/image16.jpeg",
        "./assets/image17.jpeg",
        "./assets/image18.jpeg",
        "./assets/image19.jpeg",
        "./assets/image20.jpeg",
        "./assets/image21.jpeg",
        "./assets/image22.jpeg",
        "./assets/image23.jpeg",
        "./assets/image24.jpeg",
        "./assets/image25.jpg",
        "./assets/PB 1 PNG.png",
        "./assets/PB Banner PNG.png",

    ]
};

// Apply configuration when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set logo
    const logo = document.querySelector('.logo img');
    logo.src = companyConfig.logoUrl;
    logo.alt = companyConfig.companyName + " Logo";
    
    // Set contact links
    document.getElementById('call-link').href = `tel:${companyConfig.contact.phone}`;
    
    // Set social media links
    document.getElementById('whatsapp-link').href = companyConfig.socialMedia.whatsapp;
    document.getElementById('instagram-link').href = companyConfig.socialMedia.instagram;
    document.getElementById('facebook-link').href = companyConfig.socialMedia.facebook;
    document.getElementById('map-link').href = companyConfig.socialMedia.map;
    document.getElementById('google-link').href = companyConfig.socialMedia.google;
    // Load gallery images
    const galleryGrid = document.getElementById('gallery-grid');
    companyConfig.galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${image}" alt="Gallery Image">`;
        galleryGrid.appendChild(galleryItem);
    });
    
    // Set up location modal
   
    // Modal functionality
    const aboutModal = document.getElementById('about-modal');
    
    const galleryModal = document.getElementById('gallery-modal');
    
    const aboutBtn = document.getElementById('about-btn');
   
    const galleryBtn = document.getElementById('gallery-btn');
    
    const closeAbout = document.getElementById('close-about');
    
    const closeGallery = document.getElementById('close-modal');
    
    // About modal
    aboutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        aboutModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeAbout.addEventListener('click', function() {
        aboutModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    
    
    // Gallery modal
    galleryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        galleryModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeGallery.addEventListener('click', function() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === aboutModal) {
            aboutModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    
        if (event.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
