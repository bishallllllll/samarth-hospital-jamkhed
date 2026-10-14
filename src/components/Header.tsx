import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Calendar, 
  Activity, 
  Languages, 
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface HeaderProps {
  language: 'en' | 'mr';
  setLanguage: (lang: 'en' | 'mr') => void;
  onOpenAppointment: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  language, 
  setLanguage, 
  onOpenAppointment,
  activeSection 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMr = language === 'mr';

  const navLinks = [
    { id: 'hero', label: isMr ? 'मुख्यपृष्ठ' : 'Home' },
    { id: 'about', label: isMr ? 'हॉस्पिटलविषयी' : 'About' },
    { id: 'departments', label: isMr ? 'विभाग व सेवा' : 'Departments' },
    { id: 'doctors', label: isMr ? 'डॉक्टर्स' : 'Doctors' },
    { id: 'facilities', label: isMr ? 'सुविधा व आयसीयू' : 'Facilities' },
    { id: 'location', label: isMr ? 'पत्ता व नकाशे' : 'Location' },
    { id: 'faq', label: isMr ? 'प्रश्नोत्तरे' : 'FAQs' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Utility & Emergency Bar */}
      <div className="bg-navy-950 text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Emergency Helpline highlight */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1.5 bg-red-600 text-white font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider animate-pulse">
              <ShieldAlert className="w-3.5 h-3.5" />
              {isMr ? '२४/७ आपत्कालीन' : '24/7 Emergency'}
            </span>
            <a 
              href={`tel:${hospitalData.contact.emergencyNumber}`} 
              className="flex items-center gap-1 text-sky-300 font-semibold hover:text-white transition"
              title="Click to dial emergency desk"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{hospitalData.contact.emergencyNumber}</span>
            </a>
          </div>

          {/* OPD Timing & Location snippet (hidden on small mobile) */}
          <div className="hidden md:flex items-center space-x-5 text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{isMr ? hospitalData.contact.hours.opdMr : hospitalData.contact.hours.opd}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{isMr ? hospitalData.location.landmarkMr : hospitalData.location.landmark}</span>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-1.5 ml-auto">
            <Languages className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                language === 'en' 
                  ? 'bg-sky-600 text-white' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              English
            </button>
            <span className="text-slate-500">|</span>
            <button
              onClick={() => setLanguage('mr')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                language === 'mr' 
                  ? 'bg-teal-600 text-white' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              मराठी
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        {/* Brand Logo & Wordmark */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-navy-900 flex items-center justify-center text-sky-400 shadow-md group-hover:bg-navy-800 transition">
            <Activity className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight leading-none">
                {isMr ? hospitalData.identity.nameMr : hospitalData.identity.nameEn}
              </span>
              <span className="hidden sm:inline-block bg-teal-50 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-teal-200">
                ICU & Trauma
              </span>
            </div>
            <p className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-wide mt-0.5">
              {isMr ? hospitalData.identity.taglineMr : hospitalData.identity.taglineEn}
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`hover:text-sky-600 transition pb-1 border-b-2 ${
                activeSection === link.id 
                  ? 'border-sky-600 text-sky-600 font-bold' 
                  : 'border-transparent text-slate-600'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAppointment}
            className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition transform active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>{isMr ? 'ओपीडी नोंदणी' : 'Book OPD Slot'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-lg"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center justify-between text-left py-2 px-3 rounded-lg text-slate-800 font-medium hover:bg-sky-50 hover:text-sky-700 transition"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold py-3 rounded-lg shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>{isMr ? 'ओपीडी नोंदणी (Book OPD)' : 'Book OPD Consultation'}</span>
              </button>

              <a
                href={`tel:${hospitalData.contact.emergencyNumber}`}
                className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-2.5 rounded-lg shadow"
              >
                <Phone className="w-4 h-4" />
                <span>{isMr ? 'तातडीने कॉल करा: ९५४५४ ०३१००' : 'Emergency Dial: 95454 03100'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
