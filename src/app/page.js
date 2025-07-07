'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Star, Heart, Calendar, Users, Camera, Flower, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';

// Empty page components for navigation
const WeddingsPage = () => <div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-4xl text-orange-400 font-bold">Weddings Page - Coming Soon</h1></div>;
const EventsPage = () => <div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-4xl text-orange-400 font-bold">Events Page - Coming Soon</h1></div>;
const AboutPage = () => <div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-4xl text-orange-400 font-bold">About Page - Coming Soon</h1></div>;
const GalleryPage = () => <div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-4xl text-orange-400 font-bold">Gallery Page - Coming Soon</h1></div>;
const ContactPage = () => <div className="min-h-screen bg-gray-900 flex items-center justify-center"><h1 className="text-4xl text-orange-400 font-bold">Contact Page - Coming Soon</h1></div>;

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900" style={{ fontFamily: 'serif' }}>
      {/* Header */}
      <header className="bg-gray-800 border-b border-orange-500/30 shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="h-10 w-10 text-orange-400 animate-pulse" />
              <div>
                <h1 className="text-3xl font-bold text-orange-400" style={{ fontFamily: 'Georgia, Times, serif', fontStyle: 'italic', letterSpacing: '1px' }}>Shub Mangal</h1>
                <p className="text-sm text-amber-300 font-medium tracking-wide">Wedding Planners</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-orange-300 hover:text-orange-400 font-medium transition-colors border-b-2 border-transparent hover:border-orange-400">Home</a>
              <a href="#weddings" className="text-orange-300 hover:text-orange-400 font-medium transition-colors border-b-2 border-transparent hover:border-orange-400">Weddings</a>
              <a href="#events" className="text-orange-300 hover:text-orange-400 font-medium transition-colors border-b-2 border-transparent hover:border-orange-400">Events</a>
              <a href="#about" className="text-orange-300 hover:text-orange-400 font-medium transition-colors border-b-2 border-transparent hover:border-orange-400">About</a>
              <a href="#gallery" className="text-orange-300 hover:text-orange-400 font-medium transition-colors border-b-2 border-transparent hover:border-orange-400">Gallery</a>
              <a href="#contact" className="text-orange-300 hover:text-orange-400 font-medium transition-colors border-b-2 border-transparent hover:border-orange-400">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-orange-400 hover:text-orange-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-orange-500/30">
              <div className="flex flex-col space-y-3 pt-4">
                <a href="#home" className="text-orange-300 hover:text-orange-400 font-medium transition-colors">Home</a>
                <a href="#weddings" className="text-orange-300 hover:text-orange-400 font-medium transition-colors">Weddings</a>
                <a href="#events" className="text-orange-300 hover:text-orange-400 font-medium transition-colors">Events</a>
                <a href="#about" className="text-orange-300 hover:text-orange-400 font-medium transition-colors">About</a>
                <a href="#gallery" className="text-orange-300 hover:text-orange-400 font-medium transition-colors">Gallery</a>
                <a href="#contact" className="text-orange-300 hover:text-orange-400 font-medium transition-colors">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-amber-800/20 to-red-900/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-orange-400 mb-6 animate-pulse" style={{ fontFamily: 'serif' }}>
              Your Dream Wedding
              <span className="block text-amber-300">Awaits</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From traditional Tamil ceremonies to modern fusion celebrations, we craft unforgettable moments that tell your unique love story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-orange-500">
                Plan Your Wedding
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-gray-800 border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center hover:bg-orange-500 hover:text-white">
                View Gallery
                <Camera className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Flower className="h-12 w-12 text-orange-400 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-1000">
          <Flower className="h-16 w-16 text-amber-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-20 animate-bounce delay-500">
          <Sparkles className="h-10 w-10 text-yellow-400 opacity-40" />
        </div>
        <div className="absolute bottom-1/3 left-20 animate-bounce delay-700">
          <Sun className="h-14 w-14 text-orange-300 opacity-30" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-bounce delay-300">
          <Moon className="h-8 w-8 text-amber-300 opacity-50" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-orange-400 mb-4" style={{ fontFamily: 'serif' }}>Our Specialties</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We bring years of expertise in South Indian traditions combined with modern elegance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Heart className="h-12 w-12 text-red-400 mx-auto mb-4 animate-pulse" />
              <h4 className="text-xl font-semibold text-orange-400 mb-2">Traditional Weddings</h4>
              <p className="text-gray-300">Authentic ceremonies for every community</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-orange-400 mb-2">Destination Weddings</h4>
              <p className="text-gray-300">Exotic locations with traditional touch</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Calendar className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-orange-400 mb-2">Traditional Events</h4>
              <p className="text-gray-300">Seemantham, Grahapravesh, Sashtiapthapoorthi</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4 animate-pulse" />
              <h4 className="text-xl font-semibold text-orange-400 mb-2">Fusion Celebrations</h4>
              <p className="text-gray-300">Modern style with traditional values</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Types Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-orange-400 mb-4" style={{ fontFamily: 'serif' }}>Wedding Celebrations We Specialize In</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every community has its unique traditions. We honor and celebrate them all with authentic ceremonies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Tamil Weddings', desc: 'Traditional Brahmin & Non-Brahmin ceremonies', color: 'from-orange-600 to-amber-600' },
              { title: 'Telugu Weddings', desc: 'Authentic Andhra & Telangana traditions', color: 'from-red-600 to-orange-600' },
              { title: 'Kannada Weddings', desc: 'Beautiful Karnataka customs', color: 'from-amber-600 to-yellow-600' },
              { title: 'Malayalam Weddings', desc: 'Kerala traditions & rituals', color: 'from-yellow-600 to-orange-600' },
              { title: 'Outdoor Weddings', desc: 'Garden, beach & resort ceremonies', color: 'from-orange-600 to-red-600' },
              { title: 'Fusion Weddings', desc: 'Blend of traditions & modern style', color: 'from-amber-600 to-orange-600' }
            ].map((wedding, index) => (
              <div key={index} className="bg-gray-800 border border-orange-500/30 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`h-32 bg-gradient-to-br ${wedding.color} rounded-lg mb-6 flex items-center justify-center`}>
                  <Heart className="h-12 w-12 text-white animate-pulse" />
                </div>
                <h4 className="text-xl font-semibold text-orange-400 mb-2">{wedding.title}</h4>
                <p className="text-gray-300">{wedding.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute right-10 top-1/2 animate-bounce delay-200">
          <Sparkles className="h-8 w-8 text-amber-400 opacity-30" />
        </div>
        <div className="absolute left-10 bottom-1/3 animate-bounce delay-900">
          <Flower className="h-12 w-12 text-orange-400 opacity-40" />
        </div>
      </section>

      {/* Traditional Events Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-orange-400 mb-4" style={{ fontFamily: 'serif' }}>Traditional Celebrations & Events</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond weddings, we organize all your special traditional moments with cultural authenticity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Seemantham', desc: 'Baby shower ceremony', icon: '👶' },
              { title: 'Grahapravesh', desc: 'Housewarming ritual', icon: '🏠' },
              { title: 'Sashtiapthapoorthi', desc: '60th birthday celebration', icon: '🎂' },
              { title: 'Upanayanam', desc: 'Sacred thread ceremony', icon: '🧵' },
              { title: 'Puberty Ceremony', desc: 'Coming of age ritual', icon: '💐' },
              { title: 'Naming Ceremony', desc: 'Namakarana sanskar', icon: '👶' },
              { title: 'Birthday Parties', desc: 'Traditional & modern', icon: '🎉' },
              { title: 'Anniversary', desc: 'Milestone celebrations', icon: '💕' }
            ].map((event, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-700 to-gray-800 border border-orange-500/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{event.icon}</div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">{event.title}</h4>
                <p className="text-gray-300 text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* More floating decorative elements */}
        <div className="absolute top-20 right-1/4 animate-bounce delay-400">
          <Sun className="h-10 w-10 text-yellow-400 opacity-20" />
        </div>
        <div className="absolute bottom-20 left-1/3 animate-bounce delay-600">
          <Moon className="h-8 w-8 text-orange-300 opacity-30" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-amber-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: 'serif' }}>Ready to Plan Your Perfect Celebration?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create magical memories that will last a lifetime. Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gray-100">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-800 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 animate-bounce delay-100">
          <Sparkles className="h-16 w-16 text-yellow-400 opacity-20" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce delay-800">
          <Flower className="h-20 w-20 text-orange-300 opacity-20" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-bounce delay-1200">
          <Heart className="h-12 w-12 text-red-400 opacity-30" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-orange-500/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-orange-400" />
                <div>
                  <h4 className="text-xl font-bold text-orange-400" style={{ fontFamily: 'Georgia, Times, serif', fontStyle: 'italic', letterSpacing: '1px' }}>Shub Mangal</h4>
                  <p className="text-sm text-amber-300">Wedding Planners</p>
                </div>
              </div>
              <p className="text-gray-400">Creating beautiful memories for your special moments since years.</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-orange-400">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-orange-300 transition-colors">Traditional Weddings</li>
                <li className="hover:text-orange-300 transition-colors">Destination Weddings</li>
                <li className="hover:text-orange-300 transition-colors">Event Management</li>
                <li className="hover:text-orange-300 transition-colors">Decoration Services</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-orange-400">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-300 transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-orange-300 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-orange-300 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-300 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-orange-400">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2 hover:text-orange-300 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+91 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-orange-300 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>info@shubmangal.com</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-orange-300 transition-colors">
                  <MapPin className="h-4 w-4" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-orange-500/30 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Shub Mangal Wedding Planners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Main App Component with routing logic
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case 'weddings':
        return <WeddingsPage />;
      case 'events':
        return <EventsPage />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
};

export default App;