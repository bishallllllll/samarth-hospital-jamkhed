import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { About } from './components/About';
import { Departments } from './components/Departments';
import { Doctors } from './components/Doctors';
import { Facilities } from './components/Facilities';
import { LocationDirections } from './components/LocationDirections';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ClientPitchModal } from './components/ClientPitchModal';
import { hospitalData } from './data/hospitalData';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'mr'>('en');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [selectedDeptForAppointment, setSelectedDeptForAppointment] = useState<string | undefined>();
  const [selectedDoctorForAppointment, setSelectedDoctorForAppointment] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState('hero');

  const isMr = language === 'mr';

  // Handle section scrolling observer
  useEffect(() => {
    const sections = ['hero', 'about', 'departments', 'doctors', 'facilities', 'location', 'faq'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAppointment = (deptId?: string, doctorName?: string) => {
    setSelectedDeptForAppointment(deptId);
    setSelectedDoctorForAppointment(doctorName);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-teal-500 selection:text-white pb-20 sm:pb-0">
      {/* Top Prototype Client Presentation Ribbon */}
      <div className="bg-gradient-to-r from-teal-900 via-sky-900 to-navy-950 text-white text-[11px] py-1.5 px-4 border-b border-teal-500/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="font-semibold tracking-wide">
              {isMr ? 'हॉस्पिटल व्यवस्थापन प्रात्यक्षिक • समर्थ हॉस्पिटल, जामखेड' : 'Interactive Prototype for Samarth Hospital Management Review'}
            </span>
          </div>

          <button
            onClick={() => setIsPitchOpen(true)}
            className="inline-flex items-center gap-1 bg-teal-500 hover:bg-teal-400 text-navy-950 font-extrabold px-2.5 py-0.5 rounded shadow transition text-[10px]"
          >
            <Sparkles className="w-3 h-3" />
            <span>{isMr ? 'प्रकल्प प्रस्ताव पाहा' : 'View Proposal'}</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <Header 
        language={language}
        setLanguage={setLanguage}
        onOpenAppointment={() => handleOpenAppointment()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          language={language}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        <EmergencyBanner 
          language={language}
        />

        <About 
          language={language}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        <Departments 
          language={language}
          onSelectDepartment={(deptId) => handleOpenAppointment(deptId)}
        />

        <Doctors 
          language={language}
          onBookDoctor={(docName) => handleOpenAppointment(undefined, docName)}
        />

        <Facilities 
          language={language}
        />

        <LocationDirections 
          language={language}
        />

        <FAQ 
          language={language}
        />
      </main>

      {/* Footer */}
      <Footer 
        language={language}
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenPitchModal={() => setIsPitchOpen(true)}
      />

      {/* Persistent Sticky Mobile Action Bar (Crucial for Indian Patient Conversion) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`tel:${hospitalData.contact.emergencyNumber}`}
          className="flex-1 flex items-center justify-center gap-1.5 bg-red-600 active:bg-red-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs shadow"
        >
          <Phone className="w-3.5 h-3.5 animate-bounce" />
          <span>{isMr ? 'इमर्जन्सी २४/७' : 'Emergency 24/7'}</span>
        </a>

        {hospitalData.contact.whatsappNumber && (
          <a
            href={`https://wa.me/${hospitalData.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=Namaskar%20Samarth%20Hospital,%20I%20need%20information`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs shadow"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        )}

        <button
          onClick={() => handleOpenAppointment()}
          className="flex-1 flex items-center justify-center gap-1.5 bg-sky-600 active:bg-sky-700 text-white font-bold py-2.5 px-2 rounded-xl text-xs shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{isMr ? 'ओपीडी नोंद' : 'Book OPD'}</span>
        </button>
      </div>

      {/* Modals */}
      <AppointmentModal 
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        language={language}
        initialDepartment={selectedDeptForAppointment}
        initialDoctor={selectedDoctorForAppointment}
      />

      <ClientPitchModal 
        isOpen={isPitchOpen}
        onClose={() => setIsPitchOpen(false)}
        language={language}
      />
    </div>
  );
};

export default App;
