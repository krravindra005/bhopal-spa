import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConfigEditorDrawer } from './components/ConfigEditorDrawer';
import { SpaService } from './data/spaData';
import { BUSINESS_CONFIG } from './config/business';

/**
 * ScrollToTop component to reset scroll position on route transitions
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<SpaService | null>(null);
  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedServiceId(undefined);
  };

  const handleOpenDetail = (service: SpaService) => {
    setSelectedServiceForDetail(service);
  };

  const handleCloseDetail = () => {
    setSelectedServiceForDetail(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#28231D] selection:bg-[#E7EFEA] selection:text-[#365143] font-sans">
        
        {/* Responsive Header */}
        <Header 
          onOpenBooking={handleOpenBooking}
          onOpenConfig={() => setIsConfigDrawerOpen(true)}
        />

        {/* Main Application Routing */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={handleOpenBooking}
                  onSelectService={handleOpenDetail}
                  onOpenConfig={() => setIsConfigDrawerOpen(true)}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  onOpenBooking={handleOpenBooking} 
                />
              } 
            />
            <Route 
              path="/services" 
              element={
                <ServicesPage 
                  onOpenBooking={handleOpenBooking}
                  onSelectService={handleOpenDetail}
                />
              } 
            />
            <Route 
              path="/gallery" 
              element={
                <GalleryPage 
                  onOpenBooking={handleOpenBooking} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactPage 
                  onOpenBooking={handleOpenBooking}
                  onOpenConfig={() => setIsConfigDrawerOpen(true)}
                />
              } 
            />
            {/* Fallback to Home */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenBooking={handleOpenBooking}
                  onSelectService={handleOpenDetail}
                  onOpenConfig={() => setIsConfigDrawerOpen(true)}
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer 
          onOpenBooking={handleOpenBooking}
          onOpenConfig={() => setIsConfigDrawerOpen(true)}
        />

        {/* Interactive Modals & Drawers */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          preselectedServiceId={preselectedServiceId}
        />

        <ServiceDetailModal
          service={selectedServiceForDetail}
          onClose={handleCloseDetail}
          onBook={handleOpenBooking}
        />

        <ConfigEditorDrawer
          isOpen={isConfigDrawerOpen}
          onClose={() => setIsConfigDrawerOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
