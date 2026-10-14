import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Bus, 
  Car, 
  Clock, 
  CheckCircle2,
  ExternalLink,
  Compass
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface LocationDirectionsProps {
  language: 'en' | 'mr';
}

export const LocationDirections: React.FC<LocationDirectionsProps> = ({ language }) => {
  const isMr = language === 'mr';

  const regionalRoutes = [
    {
      from: isMr ? 'अहमदनगर / पुणे कडून' : 'From Ahmednagar / Pune',
      route: isMr ? 'एनएच-५६१ए (नगर-जामखेड महामार्ग)' : 'Via NH-561A Highway',
      distance: '~75 km (1.5 hrs)',
      desc: isMr ? 'जामखेड शहरात प्रवेश करून विश्वक्रांती चौकाकडून बीड रोडकडे वळा. विद्युत मंडळासमोर डाव्या हाताला.' : 'Enter Jamkhed city towards Vishvkranti Chowk; head onto Beed Road. Opposite MSEDCL Office.'
    },
    {
      from: isMr ? 'बीड / आष्टी कडून' : 'From Beed / Ashti',
      route: isMr ? 'बीड-जामखेड थेट महामार्ग' : 'Via Direct Beed-Jamkhed Road',
      distance: '~45 km / ~30 km',
      desc: isMr ? 'जामखेडमध्ये प्रवेश करताना विद्युत मंडळाच्या अगदी समोर हॉस्पिटलचा मुख्य फलक दिसेल.' : 'Approaching Jamkhed, hospital is situated directly on the highway frontage opp. Electricity Board.'
    },
    {
      from: isMr ? 'कर्जत / करमाळा कडून' : 'From Karjat / Karmala',
      route: isMr ? 'जामखेड जोडरस्ता' : 'Via State Highway Link',
      distance: '~25 km / ~45 km',
      desc: isMr ? 'मध्यवर्ती बस स्टँड ओलांडून अवघ्या ४ मिनिटांत (१.२ किमी) हॉस्पिटलला पोहोचता येते.' : 'Cross Central ST Bus Stand; hospital is only 1.2 km away on Beed Road.'
    }
  ];

  return (
    <section id="location" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-bold px-3 py-1 rounded-full border border-sky-300 mb-3">
            <Compass className="w-3.5 h-3.5 text-sky-700" />
            <span>{isMr ? 'पत्ता आणि मार्गदर्शक' : 'Hospital Location & Highway Navigation'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            {isMr ? 'मोक्याचे ठिकाण — बीड रोड, जामखेड' : 'Easily Accessible on the Beed-Jamkhed Highway'}
          </h2>

          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            {isMr ? (
              'विद्युत मंडळ (MSEB) कार्यालयासमोर, विश्वक्रांती चौकाजवळ. रुग्णवाहिका व खाजगी वाहनांसाठी प्रशस्त रस्ता आणि तत्पर प्रवेश व्यवस्था.'
            ) : (
              'Conveniently situated opposite the MSEDCL Electricity Office on Beed Road. Wide highway access for emergency ambulances and family vehicles.'
            )}
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map Box */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div className="p-5 border-b border-slate-100 bg-navy-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-sky-400" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">
                    {isMr ? 'समर्थ हॉस्पिटल (गूगल मॅप स्थान)' : 'Samarth Hospital Google Maps Location'}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Jamkhed, Ahilyanagar (Ahmednagar) 413201
                  </p>
                </div>
              </div>

              <a
                href={hospitalData.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow transition"
              >
                <span>{isMr ? 'मॅप उघडा' : 'Open GPS'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="aspect-[16/10] sm:aspect-[16/9] bg-slate-200 relative">
              <iframe
                title="Samarth Hospital Jamkhed Google Map"
                src={hospitalData.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Address Banner */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {isMr ? 'अधिकृत पत्ता:' : 'Official Physical Address:'}
              </div>
              <p className="text-sm font-semibold text-slate-800 leading-snug">
                {isMr ? (
                  'समर्थ हॉस्पिटल (आयसीयू व ट्रॉमा सेंटर), बीड रोड, विद्युत मंडळ (MSEB) कार्यालयासमोर, विश्वक्रांती चौकाजवळ, जामखेड, जि. अहिल्यानगर (अहमदनगर), महाराष्ट्र – ४१३२०१.'
                ) : (
                  'Samarth Hospital (ICU & Trauma Centre), Beed Road, Opposite Electricity Board (MSEDCL Sub-Division Office), Near Vishvkranti Chowk, Jamkhed, Dist. Ahilyanagar (Ahmednagar), Maharashtra – 413201.'
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Transit Times & Regional Route Guides */}
          <div className="lg:col-span-5 space-y-6">
            {/* Local Transit Times */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-navy-950 flex items-center gap-2 mb-4">
                <Bus className="w-5 h-5 text-teal-600" />
                <span>{isMr ? 'स्थानिक वाहतूक व अंतर' : 'Local Transit Proximity'}</span>
              </h3>

              <div className="space-y-3">
                {hospitalData.location.nearbyTransport.map((trans, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <div>
                      <div className="font-bold text-slate-800">
                        {isMr ? trans.busStationMr : trans.busStation}
                      </div>
                      <div className="text-slate-500 mt-0.5">
                        {isMr ? 'रिक्षा किंवा वाहनाने सहज प्रवेश' : 'Direct auto-rickshaw access'}
                      </div>
                    </div>
                    <span className="font-black text-sky-700 bg-sky-100 px-2 py-1 rounded">
                      {trans.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Driving Guides */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-navy-950 flex items-center gap-2 mb-4">
                <Car className="w-5 h-5 text-sky-600" />
                <span>{isMr ? 'परिसरातील तालुक्यातून कसे यावे?' : 'Feeder Routes from Surrounding Towns'}</span>
              </h3>

              <div className="space-y-3.5">
                {regionalRoutes.map((route, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{route.from}</span>
                      <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        {route.distance}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {route.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
