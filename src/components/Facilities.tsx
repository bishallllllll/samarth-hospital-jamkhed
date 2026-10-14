import React from 'react';
import { 
  Building2, 
  Activity, 
  ShieldCheck, 
  Home, 
  Zap, 
  Ambulance, 
  CheckCircle2, 
  Info,
  Sparkles
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface FacilitiesProps {
  language: 'en' | 'mr';
}

export const Facilities: React.FC<FacilitiesProps> = ({ language }) => {
  const isMr = language === 'mr';

  const getFacilityIcon = (icon: string) => {
    switch (icon) {
      case 'Activity': return <Activity className="w-5 h-5 text-sky-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'Home': return <Home className="w-5 h-5 text-indigo-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Ambulance': return <Ambulance className="w-5 h-5 text-red-600" />;
      default: return <Building2 className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="facilities" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>{isMr ? 'हॉस्पिटल पायाभूत सुविधा' : 'Clinical Infrastructure & Facilities'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            {isMr ? 'रुग्ण सुरक्षेसाठी सुसज्ज व आधुनिक व्यवस्था' : 'Equipped for Patient Safety & Rapid Recovery'}
          </h2>

          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            {isMr ? (
              'ग्रामीण व निमशहरी भागातील विजेची कमतरता आणि आपत्कालीन गरजा लक्षात घेऊन २४ तास जनरेटर बॅकअप आणि अत्याधुनिक साधने.'
            ) : (
              'Modern surgical and life-support infrastructure engineered for rural reliability, including 100% power generator backup and specialized trauma care.'
            )}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitalData.facilities.map((facility) => {
            return (
              <div 
                key={facility.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Label */}
                  <div className="relative aspect-[16/10] bg-slate-800 overflow-hidden">
                    {facility.image ? (
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-navy-900 text-sky-400">
                        {getFacilityIcon(facility.icon)}
                      </div>
                    )}

                    {/* Badge */}
                    <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-sm text-teal-300 text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-700">
                      {isMr ? facility.highlightMr : facility.highlight}
                    </div>

                    {/* Ethical Representative Tag */}
                    <div className="absolute bottom-2 left-2 bg-black/70 text-slate-300 text-[9px] px-2 py-0.5 rounded">
                      {isMr ? 'प्रातिनिधिक छायाचित्र' : 'Representative Imagery'}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0">
                        {getFacilityIcon(facility.icon)}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-navy-950">
                        {isMr ? facility.titleMr : facility.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {isMr ? facility.descriptionMr : facility.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/60 mt-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3">
                    <span className="flex items-center gap-1 text-teal-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {isMr ? 'स्थानिक स्तरावर उपलब्ध' : 'Available On-Site'}
                    </span>
                    <span>Jamkhed, Beed Road</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* C-Arm Fluoroscopy Special Feature Banner */}
        <div className="mt-12 bg-gradient-to-r from-navy-900 via-navy-800 to-sky-950 text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-navy-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-400/30">
                {isMr ? 'अत्याधुनिक शस्त्रक्रिया तंत्रज्ञान' : 'High-Precision Surgical Technology'}
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                {isMr ? (
                  'सी-आर्म (C-Arm) फ्लोरोस्कोपी युनिटद्वारे अचूक ऑर्थोपेडिक शस्त्रक्रिया'
                ) : (
                  'Advanced C-Arm Fluoroscopy Unit for Precision Orthopedic Surgery'
                )}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                {isMr ? (
                  'हाडे मोडणे, फॅक्चर प्लॅटिंग आणि सांध्यांच्या गुंतागुंतीच्या शस्त्रक्रिया प्रत्यक्ष स्क्रीनवर पाहून अचूकपणे करण्यासाठी समर्थ हॉस्पिटलमध्ये सी-आर्म मशिन उपलब्ध आहे.'
                ) : (
                  'Real-time intra-operative X-ray fluoroscopy enables minimally invasive fracture fixation, implant positioning, and orthopedic trauma surgery right in Jamkhed.'
                )}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-xs text-slate-200 space-y-2">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  {isMr ? 'रुग्णांसाठी फायदे:' : 'Patient Benefits:'}
                </div>
                <ul className="space-y-1.5 pl-1">
                  <li>• {isMr ? 'लहान चीर आणि जलद बरे होणे' : 'Smaller incisions & faster healing'}</li>
                  <li>• {isMr ? 'कमी रक्तस्त्राव व अचूक स्क्रू फिक्सिंग' : 'High accuracy bone screw placement'}</li>
                  <li>• {isMr ? 'पुण्या-मुंबईच्या मोठ्या हॉस्पिटलसारखी सुविधा' : 'Metro-standard surgical imaging locally'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
