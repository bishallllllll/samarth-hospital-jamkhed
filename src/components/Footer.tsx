import React from 'react';
import { 
  Activity, 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface FooterProps {
  language: 'en' | 'mr';
  onOpenAppointment: () => void;
  onOpenPitchModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  language, 
  onOpenAppointment,
  onOpenPitchModal 
}) => {
  const isMr = language === 'mr';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Hospital Brand & Core Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-teal-400">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {isMr ? hospitalData.identity.nameMr : hospitalData.identity.nameEn}
                </h3>
                <p className="text-xs text-teal-400 font-medium">
                  {isMr ? hospitalData.identity.taglineMr : hospitalData.identity.taglineEn}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              {isMr ? (
                'जामखेड शहर व परिसरातील ग्रामीण जनतेसाठी २४ तास आपत्कालीन सेवा, अतिदक्षता विभाग (ICU), आधुनिक सी-आर्म शस्त्रक्रिया आणि दर्जेदार आरोग्य सुविधा पुरवणारे केंद्र.'
              ) : (
                'Serving Jamkhed taluka and surrounding highway routes with 24/7 emergency casualty care, intensive monitoring, advanced C-arm orthopedic surgery, and compassionate treatment under Dr. Bharat Darkunde & team.'
              )}
            </p>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{isMr ? 'स्थानिक सेवा वचनबद्धता' : 'Community Care Lifeline'}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {isMr ? 'बीड-जामखेड महामार्गावर विद्युत मंडळासमोर, विश्वक्रांती चौकाजवळ.' : 'Located on Beed Road frontage opposite MSEDCL Electricity Office.'}
              </p>
            </div>
          </div>

          {/* Col 2: Clinical Departments Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isMr ? 'वैद्यकीय विभाग' : 'Key Departments'}
            </h4>
            <ul className="space-y-2 text-xs">
              {hospitalData.departments.map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => scrollTo('departments')}
                    className="hover:text-sky-400 transition flex items-center gap-1.5 text-left text-slate-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    <span>{isMr ? dept.nameMr : dept.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Emergency (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isMr ? 'थेट संपर्क व आपत्कालीन मदत' : 'Contact & Emergency Helpline'}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {isMr ? hospitalData.location.addressLine1Mr : hospitalData.location.addressLine1}, Jamkhed, Ahilyanagar 413201
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <span>
                  <strong>{isMr ? 'इमर्जन्सी:' : 'Emergency:'}</strong>{' '}
                  <a href={`tel:${hospitalData.contact.emergencyNumber}`} className="text-white hover:text-sky-300 font-bold underline">
                    {hospitalData.contact.emergencyNumber}
                  </a>
                </span>
              </div>

              {hospitalData.contact.tpaInsuranceNumber && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    <strong>{isMr ? 'कॅशलेस डेस्क:' : 'TPA Desk:'}</strong>{' '}
                    <a href={`tel:${hospitalData.contact.tpaInsuranceNumber}`} className="text-slate-200 hover:text-teal-300">
                      {hospitalData.contact.tpaInsuranceNumber}
                    </a>
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{isMr ? 'आपत्कालीन कक्ष: २४ तास अविरत सुरू' : 'Emergency Casualty: Open 24/7/365'}</span>
              </div>
            </div>

            {/* Quick Action in Footer */}
            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs py-2.5 px-4 rounded-lg shadow transition text-center"
              >
                {isMr ? 'ओपीडी तपासणी वेळ नोंदवा' : 'Request OPD Consultation'}
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimers & Ethics Note */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>{isMr ? 'वैद्यकीय माहिती व कायदेशीर अस्वीकरण:' : 'Medical & Statutory Disclaimer:'}</strong>{' '}
            {isMr ? (
              'या वेबसाइटवरील माहिती सामान्य मार्गदर्शनासाठी आहे आणि ती प्रत्यक्ष वैद्यकीय सल्ल्याचा पर्याय नाही. गंभीर आजार किंवा अपघाताच्या वेळी तात्काळ जवळच्या आपत्कालीन कक्षाशी प्रत्यक्ष संपर्क साधावा. महाराष्ट्र मेडिकल कौन्सिल आणि एनएमसी आचारसंहितेनुसार येथे कोणतेही अतिशयोक्तीपूर्ण दावे केलेले नाहीत.'
            ) : (
              'The information on this website is for institutional and patient informational purposes and does not constitute formal medical advice. In life-threatening emergencies, patients must immediately proceed to the hospital casualty department. In compliance with the National Medical Commission (NMC) regulations, this facility refrains from making unverified superlative claims.'
            )}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Management Pitch Trigger */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {isMr ? hospitalData.identity.nameMr : hospitalData.identity.nameEn}, Jamkhed. All rights reserved.
          </div>

          {/* Client Presentation Trigger Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPitchModal}
              className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>{isMr ? 'हॉस्पिटल व्यवस्थापन सादरीकरण माहिती' : 'Hospital Management Pitch Package'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
