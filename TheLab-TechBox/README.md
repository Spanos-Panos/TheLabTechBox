# The Lab Techbox - Business Website

A modern, responsive Blazor WebAssembly website for "The Lab Techbox" electronics repair and security systems business in Greece.

## Features

### 🎯 Complete Business Website
- **Home Page**: Hero section with company logo and rotating photo gallery
- **Services Section**: Overview of services with professional cards
- **Full Services Page**: Detailed 6-service grid layout as requested
- **About Us Page**: Company history and team profiles
- **Contact Page**: Contact form, business hours, and location info

### 🎨 Modern Design & Tech Stack
- **Blazor WebAssembly**: Latest .NET 9 framework
- **Tailwind CSS**: Utility-first responsive design
- **Greek Language Support**: Fully localized content
- **Mobile-First**: Perfect responsive design for all devices

### ⚡ Interactive Features
- **Photo Gallery**: 6 photos rotating every 2 seconds with manual controls
- **Payment Modal**: Professional payment methods popup
- **Smooth Scrolling**: Enhanced navigation experience
- **Contact Forms**: Working email integration
- **Loading States**: Professional loading animations

### 📱 Layout & Structure

#### Top Header (as requested)
- Rectangle border covering full screen width
- Inner rectangle with two images:
  - Left image: 30% width
  - Right image: 70% width

#### Navigation Bar
- Home (default active)
- Our Services  
- Who We Are
- Contact

#### Hero Section
- Company logo on the left
- Photo gallery box on the right (6 photos, auto-rotating every 2 seconds)
- Call-to-action buttons

#### Services Section  
- Background image as requested
- Service overview text in Greek
- 5 service cards as specified
- "View More" button leading to full services

#### Full Services Page
- Title "Οι Υπηρεσίες" 
- Description text as provided
- 6 service cards in 2 rows x 3 columns:
  1. **Security Systems** - ΜΕΛΕΤΗ - ΕΓΚΑΤΑΣΤΑΣΗ - ΣΥΝΤΗΡΗΣΗ ΣΥΣΤΗΜΑΤΩΝ ΑΣΦΑΛΕΙΑΣ
  2. **Electronics Repair** - ΕΠΙΣΚΕΥΗ ΗΛΕΚΤΡΟΝΙΚΩΝ ΕΙΔΩΝ  
  3. **Mobile Repair** - ΕΠΙΣΚΕΥΗ ΚΙΝΗΤΩΝ ΤΗΛΕΦΩΝΩΝ
  4. **Computer Services** - ΕΠΙΣΚΕΥΗ & ΑΝΑΒΑΘΜΙΣΗ Η/Υ
  5. **TV Services** - ΤΟΠΟΘΕΤΗΣΗ & ΕΠΙΣΚΕΥΗ ΤΗΛΕΟΡΑΣΕΩΝ
  6. **Commercial Department** - ΕΜΠΟΡΙΚΟ ΤΜΗΜΑ

#### About Us Page ("Who We Are")
- Company logo at top
- Complete company story as provided
- "Our Team" section with 3 team members:
  - **Ντίνος Τσούτσικας** - Owner & Security Systems Technician
  - **Ευτυχία Αλεξανδρή** - Commercial Department & Customer Service
  - **Arber Zeqollari** - Mobile, TV & Computer Technician

#### Contact Page
- Split layout: 50% contact info, 50% map placeholder
- **Contact Information**:
  - Address: ΚΑΛΥΒΑ ΜΠΑΚΟΓΙΑΝΝΗ 17, 35132 ΛΑΜΙΑ
  - Email: thelabtechbox@gmail.com  
  - Phones: 2231044850, 6977060519
- **Contact Form** with Greek labels:
  - Email field
  - Subject field  
  - Message field
  - "Αποστολή" (Send) button
- **Business Hours** as specified:
  - Δευτέρα: 09:00 - 14:00
  - Τρίτη: 09:00 - 14:00 & 17:30 - 21:00
  - Τετάρτη: 09:00 - 14:00
  - Πέμπτη: 09:00 - 14:00 & 17:30 - 21:00
  - Παρασκευή: 09:00 - 14:00 & 17:30 - 21:00
  - Σάββατο: 09:00 - 14:00
  - Κυριακή: Κλειστά

#### Footer
- **Payment Methods**: Clickable button showing payment modal with:
  - ALPHA BANK: GR15 0140 3240 3240 0200 2002 110
  - ΠΕΙΡΑΙΩΣ: GR24 0171 7700 0067 7013 6435 045
- **Store Name**: "The Lab Techbox"
- **Copyright**: "©2022 by The Lab Techbox"  
- **Contact Link**: "Επικοινωνία" (links to contact section)

## 🚀 Getting Started

### Prerequisites
- .NET 9 SDK
- Node.js (for Tailwind CSS)

### Installation
1. Clone or extract the project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   dotnet restore
   ```
4. Build Tailwind CSS:
   ```bash
   npm run build-css-prod
   ```
5. Run the application:
   ```bash
   dotnet watch run
   ```
6. Open your browser to `http://localhost:5242`

## 📂 Project Structure

```
TheLab-TechBox/
├── Layout/
│   ├── MainLayout.razor     # Main layout with header & navigation
│   └── NavMenu.razor        # Navigation component (simplified)
├── Pages/
│   └── Home.razor          # Main page combining all sections
├── Shared/
│   ├── Hero.razor          # Hero section with gallery
│   ├── Services.razor      # Services overview  
│   ├── FullServices.razor  # Complete services page
│   ├── About.razor         # About us & team
│   └── Contact.razor       # Contact form & info
├── wwwroot/
│   ├── Assets/
│   │   ├── css/           # Stylesheets
│   │   ├── js/            # JavaScript functionality
│   │   └── images/        # Image assets (placeholder ready)
│   ├── tailwind.css       # Generated Tailwind styles
│   └── index.html         # Main HTML with Greek language
└── Configuration files...
```

## 🎨 Customization

### Adding Images
Replace placeholder images in `wwwroot/Assets/images/`:
- `header-left.jpg`, `header-right.jpg` - Top header images
- `logo.png` - Company logo
- `gallery1.jpg` through `gallery6.jpg` - Photo gallery
- `services-bg.jpg` - Services section background
- `security.jpg`, `electronics.jpg`, etc. - Service card images
- `team1.jpg`, `team2.jpg`, `team3.jpg` - Team member photos

### Styling
- Edit `tailwind.config.js` for design tokens
- Modify `wwwroot/Assets/css/app.css` for custom styles
- Update component files for content changes

### Functionality
- `wwwroot/Assets/js/gallery.js` - Photo gallery behavior
- `wwwroot/Assets/js/modal.js` - Payment modal
- `wwwroot/Assets/js/navigation.js` - Smooth scrolling

## 🌐 Greek Language Support

The website is fully localized in Greek with proper:
- Meta tags and language attributes
- Business-specific terminology
- Contact information in Greek format
- All user interface elements translated

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Touch-friendly photo gallery with swipe support
- Responsive navigation with mobile menu
- Optimized layouts for all screen sizes
- Perfect rendering on phones and tablets

## ✨ Professional Features

- **Performance**: Optimized Blazor WebAssembly build
- **SEO**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with focus management
- **UX**: Smooth animations and professional interactions
- **Browser Support**: Works on all modern browsers

## 📞 Business Information

**The Lab Techbox**
- Address: ΚΑΛΥΒΑ ΜΠΑΚΟΓΙΑΝΝΗ 17, 35132 ΛΑΜΙΑ
- Email: thelabtechbox@gmail.com
- Phone: 2231044850, 6977060519
- Services: Electronics repair, mobile phones, computers, security systems
- Established: March 9, 2015 (moved to current location December 3, 2021)

This website perfectly recreates the requested Wix website functionality using modern web technologies while maintaining all the specific requirements and Greek content.
