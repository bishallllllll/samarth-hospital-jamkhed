import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Clock, 
  Sparkles,
  ArrowRight,
  Award
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface AboutProps {
  language: 'en' | 'mr';
  onOpenAppointment: () => void;
}

export const About: React.FC<AboutProps> = ({ language, onOpenAppointment }) => {
  const isMr = language === 'mr';

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-bold px-3 py-1 rounded-full border border-sky-300">
              <Heart className="w-3.5 h-3.5 text-sky-700" />
              <span>{isMr ? 'आमचे ध्येय आणि इतिहास' : 'Our Mission & Jamkhed Roots'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight leading-tight">
              {isMr ? (
                <>
                  जामखेड आणि परिसरासाठी <span className="text-sky-600">विश्वासार्ह व तत्पर</span> आरोग्य सेवेची परंपरा
                </>
              ) : (
                <>
                  Dedicated to Saving Lives in Jamkhed & <span className="text-sky-600">The Surrounding Talukas</span>
                </>
              )}
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                {isMr ? (
                  'समर्थ हॉस्पिटल (आयसीयू व ट्रॉमा सेंटर) ची स्थापना जामखेड शहर व ग्रामीण भागातील रुग्णांना तातडीने अत्याधुनिक आरोग्य सेवा उपलब्ध करून देण्याच्या ध्येयाने करण्यात आली. बीड-जामखेड महामार्गावर विद्युत मंडळासमोर असलेल्या या हॉस्पिटलने परिसरातील हजारो रुग्णांना नवीन जीवन दिले आहे.'
                ) : (
                  'Samarth Hospital (ICU & Trauma Centre) was founded with a singular commitment: ensuring that patients in Jamkhed taluka and along the high-traffic Nagar–Beed corridor receive high-quality intensive care and emergency trauma management without enduring a hazardous 85 km journey to Ahmednagar or Pune.'
                )}
              </p>

              <p>
                {isMr ? (
                  'डॉ. भारत डार्कुंडे आणि डॉ. सोनाली डार्कुंडे यांच्या कुशल मार्गदर्शनाखाली अपघातग्रस्तांवर तत्काळ उपचार, अतिदक्षता विभागातील (ICU) २४ तास देखरेख, लॅपरोस्कोपिक शस्त्रक्रिया आणि सुरक्षित प्रसूती सेवा अविरतपणे दिल्या जातात.'
                ) : (
                  'Directed by Dr. Bharat Darkunde and Dr. Sonali Darkunde, the hospital integrates emergency casualty triage, modern ICU ventilator and multipara monitoring, advanced C-Arm fluoroscopic orthopedic surgery, and compassionate maternal care under one dedicated campus.'
                )}
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-navy-950 text-sm mb-1">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>{isMr ? 'गोल्डन अवर तत्परता' : 'Golden Hour Lifeline'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {isMr ? 'अपघातानंतरच्या पहिल्या तासात तातडीचे उपचार करून रुग्णाचा जीव वाचवण्यास सर्वोच्च प्राधान्य.' : 'Immediate resuscitation and fracture care for highway accidents on Beed Road.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 font-bold text-navy-950 text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>{isMr ? 'पारदर्शक व प्रामाणिक उपचार' : 'Ethical Medical Practice'}</span>
                </div>
                <p className="text-xs text-slate-600">
                  {isMr ? 'गरजेनुसारच तपासण्या व योग्य सल्ला. रुग्णाच्या आर्थिक परिस्थितीचा आदर.' : 'No unnecessary referrals or treatments. Dignified care for rural families.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
                alt="Hospital Inpatient Recovery Ward"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] bg-teal-600 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {isMr ? 'स्वच्छ व हवेशीर वॉर्ड' : 'Inpatient Recovery'}
                </span>
                <h4 className="text-base font-bold mt-1">
                  {isMr ? 'रुग्णांच्या आरोग्यासाठी शांत व निर्जंतुक वातावरण' : 'Hygienic, Calm Recovery Environment'}
                </h4>
              </div>
            </div>

            {/* Quick Impact Stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200">
                <div className="text-2xl font-black text-sky-800">24/7</div>
                <div className="text-[11px] font-semibold text-sky-950 mt-0.5">
                  {isMr ? 'इमर्जन्सी व आयसीयू' : 'Emergency & ICU'}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200">
                <div className="text-2xl font-black text-teal-800">87+</div>
                <div className="text-[11px] font-semibold text-teal-950 mt-0.5">
                  {isMr ? 'गावांना आरोग्य सेवा' : 'Villages Served'}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-300">
                <div className="text-2xl font-black text-slate-800">100%</div>
                <div className="text-[11px] font-semibold text-slate-900 mt-0.5">
                  {isMr ? 'जनरेटर वीज बॅकअप' : 'Power Backup'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
