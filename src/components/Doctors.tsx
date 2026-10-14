import React from 'react';
import { 
  UserCheck, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  AlertCircle,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface DoctorsProps {
  language: 'en' | 'mr';
  onBookDoctor: (doctorName: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ language, onBookDoctor }) => {
  const isMr = language === 'mr';

  return (
    <section id="doctors" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 text-xs font-bold px-3 py-1 rounded-full border border-sky-300 mb-3">
            <UserCheck className="w-3.5 h-3.5 text-sky-700" />
            <span>{isMr ? 'तज्ज्ञ वैद्यकीय नेतृत्व' : 'Medical Leadership & Specialists'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            {isMr ? 'अनुभवी व समर्पित डॉक्टरांचे मार्गदर्शन' : 'Experienced Clinical Leadership in Jamkhed'}
          </h2>

          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            {isMr ? (
              'जामखेड व परिसरातील रुग्णांच्या आरोग्यासाठी वर्षानुवर्षे अविरत कार्यरत असलेले संचालक व सल्लागार डॉक्टर्स.'
            ) : (
              'Guided by experienced resident practitioners with over a decade of community care and emergency response in the Jamkhed taluka.'
            )}
          </p>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitalData.directors.map((doctor) => {
            return (
              <div 
                key={doctor.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                {/* Doctor Avatar Card Header */}
                <div className="relative p-6 bg-gradient-to-br from-navy-900 to-navy-800 text-white flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-slate-700 border-2 border-sky-400 overflow-hidden shrink-0 flex items-center justify-center shadow-md">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback icon if image fails to load
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <Stethoscope className="w-8 h-8 text-sky-300" />
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block mb-1">
                      {isMr ? doctor.roleMr : doctor.role}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {isMr ? doctor.nameMr : doctor.name}
                    </h3>
                    <p className="text-xs text-sky-200 mt-1">
                      {isMr ? doctor.departmentMr : doctor.department}
                    </p>
                  </div>
                </div>

                {/* Doctor Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Qualification & Verification Status Notice */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">
                        {isMr ? 'पात्रता व पदवी:' : 'Credentials:'}
                      </span>
                      <span className="font-semibold text-slate-800">
                        {doctor.qualification}
                      </span>
                    </div>

                    {doctor.qualificationStatus === 'provisional_pending_approval' && (
                      <div className="flex items-start gap-1.5 p-2 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>
                          {isMr ? (
                            'पदवी प्रमाणपत्र व नोंदणी क्रमांक व्यवस्थापन पडताळणी प्रलंबित'
                          ) : (
                            'Medical degree certificates & council ID to be audited during client onboarding'
                          )}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isMr ? doctor.bioMr : doctor.bio}
                  </p>

                  {/* OPD Consultation Timings */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>{isMr ? 'ओपीडी सल्लामसलत वेळ:' : 'OPD Consultation Hours:'}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-5">
                      {isMr ? doctor.opdTimingsMr : doctor.opdTimings}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => onBookDoctor(doctor.name)}
                    className="w-full flex items-center justify-center gap-2 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold py-2.5 px-4 rounded-xl border border-sky-200 transition text-xs sm:text-sm"
                  >
                    <Calendar className="w-4 h-4 text-sky-600" />
                    <span>{isMr ? 'यांच्याकडे वेळ मागवा' : 'Request Appointment'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Doctor Verification Transparency Notice */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100 border border-slate-300/80 text-xs text-slate-600 max-w-4xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800">
              {isMr ? 'पारदर्शकता आणि नैतिक वैद्यकीय हमी:' : 'Medical Ethics & Transparency Note:'}
            </span>{' '}
            {isMr ? (
              'या प्रोटोटाइप वेबसाइटवर कोणत्याही बनावट पदव्या किंवा खोटे दावे केलेले नाहीत. प्रत्यक्ष वेबसाइट लाइव्ह करण्यापूर्वी डॉ. भारत डार्कुंडे व संबंधित डॉक्टरांची पदवी प्रमाणपत्रे (MBBS/MD/MS) व महाराष्ट्र मेडिकल कौन्सिल (MMC) नोंदणी क्रमांक व्यवस्थापनाकडून प्राप्त करून अचूक प्रसिद्ध केले जातील.'
            ) : (
              'In accordance with National Medical Commission (NMC) guidelines, this prototype strictly refrains from inventing unverified degrees or false success statistics. Formal degree letters and Maharashtra Medical Council (MMC) registration numbers will be verified and displayed upon client sign-off.'
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
