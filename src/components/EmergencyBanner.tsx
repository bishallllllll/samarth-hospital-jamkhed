import React from 'react';
import { 
  Phone, 
  Ambulance, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface EmergencyBannerProps {
  language: 'en' | 'mr';
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ language }) => {
  const isMr = language === 'mr';

  return (
    <section className="bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white py-6 px-4 sm:px-6 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Urgent Medical Alert Message */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/30">
              <Ambulance className="w-7 h-7 text-white animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-white text-red-700 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {isMr ? 'आपत्कालीन सेवा' : 'Emergency Casualty'}
                </span>
                <span className="text-red-100 text-xs font-medium">
                  {isMr ? 'बीड-जामखेड महामार्ग अपघात व क्रिटिकल केअर' : 'Beed-Jamkhed Highway Trauma & Critical Care'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-1">
                {isMr ? (
                  'रस्ते अपघात किंवा अतिदक्षतेची गरज असल्यास विलंब करू नका'
                ) : (
                  'Highway Accident, Severe Trauma, or Acute Cardiac Emergency?'
                )}
              </h2>
              <p className="text-xs sm:text-sm text-red-100 mt-0.5 max-w-2xl">
                {isMr ? (
                  'सुसज्ज आयसीयू कक्ष, ऑक्सिजन, व्हेंटिलेटर सपोर्ट व शस्त्रक्रिया पथक सज्ज. नगर किंवा बीडला रुग्ण हलवण्यातील धोका टाळा.'
                ) : (
                  'Immediate stabilization, ICU ventilator support, and emergency surgical care right here in Jamkhed. Avoid risky 80 km transit delay to Ahmednagar.'
                )}
              </p>
            </div>
          </div>

          {/* Right: Emergency Contact Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
            <a
              href={`tel:${hospitalData.contact.emergencyNumber}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-red-700 font-extrabold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition transform active:scale-95 text-base"
            >
              <Phone className="w-5 h-5 text-red-600" />
              <span>{hospitalData.contact.emergencyNumber}</span>
            </a>

            {hospitalData.contact.tpaInsuranceNumber && (
              <a
                href={`tel:${hospitalData.contact.tpaInsuranceNumber}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-red-900/60 hover:bg-red-900 text-white font-medium px-4 py-3.5 rounded-xl border border-white/20 transition text-xs"
                title="Insurance & TPA Desk"
              >
                <span>{isMr ? 'कॅशलेस मदत:' : 'Cashless Desk:'} {hospitalData.contact.tpaInsuranceNumber}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
