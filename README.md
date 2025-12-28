# TravelBrand - Premium Travel Agency Website

A modern, responsive travel agency website built with React and Tailwind CSS, inspired by premium travel marketplaces like Tramondo and GetYourGuide.

## Features

- **Modern Design**: Clean, premium UI with smooth animations and hover effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Sticky navbar, search functionality, wishlist, testimonial slider
- **Reusable Components**: Modular architecture with reusable UI components
- **Premium Travel Experience**: Focus on tours, activities, and destinations

## Tech Stack

- React 18 (Functional Components)
- React Router for navigation
- Tailwind CSS for styling
- Modern ES6+ JavaScript

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Sticky navigation with transparency
│   ├── HeroSection.jsx # Full-width hero with search
│   ├── TrustSection.jsx # Trust badges and statistics
│   ├── TourCard.jsx    # Reusable tour card component
│   ├── BestSellers.jsx # Featured tours section
│   ├── PopularDestinations.jsx # Destination grid
│   ├── CustomerReviews.jsx # Testimonial slider
│   ├── InstagramGallery.jsx # Social media gallery
│   ├── Newsletter.jsx  # Email subscription
│   └── Footer.jsx      # Comprehensive footer
├── pages/
│   └── Home.jsx        # Main homepage
├── data/
│   └── mockData.js     # Sample data for tours, destinations, reviews
└── assets/             # Images and static assets
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Key Components

### Navbar
- Sticky navigation with transparent background over hero
- Responsive menu with language and currency selectors
- Smooth scroll animations

### Hero Section
- Full-width background image with overlay
- Prominent search functionality
- Call-to-action messaging

### Tour Cards
- Hover animations and wishlist functionality
- Star ratings and pricing display
- Responsive grid layout

### Popular Destinations
- Image grid with hover effects
- Smooth zoom and overlay animations
- Mobile-responsive design

### Customer Reviews
- Auto-rotating testimonial slider
- Star ratings and customer information
- Smooth transitions

## Customization

### Images
Replace the Unsplash URLs in `src/data/mockData.js` with your own images.

### Content
Update the mock data in `src/data/mockData.js` with your actual tours, destinations, and reviews.

### Styling
Modify the Tailwind configuration in `tailwind.config.js` to match your brand colors and fonts.

### Components
All components are modular and can be easily customized or extended.

## Production Build

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.