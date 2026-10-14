import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Ambulance, 
  Activity, 
  Calendar,
  MessageCircle,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface HeroProps {
  language: 'en' | 'mr';
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenAppointment }) => {
  const isMr = language === 'mr';

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-50 via-sky-50/40 to-white pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-slate-200">
      {/* Subtle Background Geometry */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Verification Status Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 px-3 py-1 rounded-full text-xs font-semibold border border-sky-300">
            <ShieldCheck className="w-4 h-4 text-sky-700" />
            <span>{isMr ? 'सत्यापित आरोग्य संस्था • जामखेड' : 'Verified Healthcare Facility • Jamkhed'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-900 px-3 py-1 rounded-full text-xs font-semibold border border-teal-300">
            <Activity className="w-3.5 h-3.5 text-teal-700" />
            <span>{isMr ? '२४/७ अतिदक्षता विभाग (ICU) कार्यरत' : '24/7 ICU & Trauma Ready'}</span>
          </div>

          <span className="text-xs text-slate-500 hidden sm:inline">
            {isMr ? 'बीड रोड, विश्वक्रांती चौकाजवळ' : 'Beed Road, Near Vishvkranti Chowk'}
          </span>
        </div>

        {/* Hero Grid: Left Content / Right Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              {isMr ? (
                <>
                  जामखेडमधील २४ तास <span className="text-sky-600">अतिदक्षता विभाग (ICU)</span> व अपघात उपचार केंद्र
                </>
              ) : (
                <>
                  24/7 Intensive Care Unit & <span className="text-sky-600">Accident Trauma Care</span> in Jamkhed
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
              {isMr ? (
                <>
                  डॉ. भारत डार्कुंडे आणि डॉ. सोनाली डार्कुंडे यांच्या मार्गदर्शनाखाली तत्पर आपत्कालीन उपचार, सुसज्ज आयसीयू, लॅपरोस्कोपिक शस्त्रक्रिया आणि सर्वसमावेशक रुग्णसेवा. अहमदनगर किंवा पुण्याला जाण्याची धावपळ टाळा.
                </>
              ) : (
                <>
                  Frontline emergency trauma stabilization, modern ICU with ventilator and cardiac monitoring, and dedicated surgical care on Beed Road, Jamkhed. Led by Dr. Bharat Darkunde & team.
                </>
              )}
            </p>

            {/* Crucial Emergency Helpline Ribbon */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                    {isMr ? 'तातडीची वैद्यकीय मदत / अपघात मदत कक्ष' : 'Immediate Casualty & Trauma Dispatch'}
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                    {hospitalData.contact.emergencyNumber}
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {isMr ? 'रात्रंदिवस सुरू • थेट संपर्क' : 'Round-the-clock emergency casualty reception'}
                  </p>
                </div>

                <div className="flex sm:flex-col gap-2">
                  <a
                    href={`tel:${hospitalData.contact.emergencyNumber}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition transform active:scale-95 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{isMr ? 'कॉल करा' : 'Call Now'}</span>
                  </a>

                  {hospitalData.contact.whatsappNumber && (
                    <a
                      href={`https://wa.me/${hospitalData.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Samarth%20Hospital,%20I%20need%20assistance.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2.5 rounded-lg text-xs shadow-sm transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAppointment}
                className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-3 rounded-lg shadow transition active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{isMr ? 'ओपीडी वेळ बुक करा' : 'Book OPD Consultation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={hospitalData.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold px-4 py-3 rounded-lg border border-slate-300 shadow-sm transition"
              >
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>{isMr ? 'हॉस्पिटलचे दिशानिर्देश (Google Maps)' : 'Directions to Hospital'}</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">
                  {isMr ? 'हायवेवर मोक्याचे ठिकाण' : 'Prime Beed Road Location'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">
                  {isMr ? 'अत्याधुनिक सी-आर्म व शस्त्रक्रिया' : 'Advanced C-Arm Fluoroscopy'}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">
                  {isMr ? '२४ तास औषधालय व लॅब' : '24/7 In-House Pharmacy'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              {/* Main Visual Image with Representative Notice */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" 
                  alt="ICU Bed and Critical Care Monitor"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

                {/* Honest Representative Imagery Tag */}
                <div className="absolute bottom-3 left-3 bg-navy-950/80 backdrop-blur-sm text-slate-300 text-[10px] px-2.5 py-1 rounded border border-slate-700">
                  {isMr ? 'प्रातिनिधिक वैद्यकीय छायाचित्र • प्रत्यक्ष सुविधा उपलब्ध' : 'Representative Clinical Imagery • Actual Equipment On-Site'}
                </div>

                {/* 24/7 Floating Badge */}
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  24/7 EMERGENCY
                </div>
              </div>

              {/* Card Body: Key Local Highlights */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-navy-900 text-base">
                    {isMr ? 'समर्थ हॉस्पिटल व आयसीयू सेंटर' : 'Samarth Hospital & ICU Centre'}
                  </h3>
                  <span className="text-xs bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded">
                    Jamkhed, 413201
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {isMr ? (
                    'विद्युत मंडळ (MSEB) कार्यालयासमोर, विश्वक्रांती चौकाजवळ, जामखेड. रस्ते अपघात, तीव्र आजारपण व तातडीच्या शस्त्रक्रियेसाठी स्थानिक स्तरावर तत्पर सेवा.'
                  ) : (
                    'Located opposite MSEDCL Electricity Office on Beed Road, Jamkhed. Providing local emergency coverage to avoid risky 85 km travel to Ahmednagar in acute situations.'
                  )}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {isMr ? 'ओपीडी: सकाळी १० ते २ | सायं ५ ते ९' : 'OPD: 10AM-2PM | 5PM-9PM'}
                  </span>
                  <span className="font-semibold text-teal-700">
                    {isMr ? 'सल्लागार उपलब्ध' : 'Consultants On-Call'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
