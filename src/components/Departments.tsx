import React, { useState } from 'react';
import { 
  Activity, 
  Ambulance, 
  Stethoscope, 
  HeartPulse, 
  Scissors, 
  Pill,
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';
import { Department } from '../types/hospital';

interface DepartmentsProps {
  language: 'en' | 'mr';
  onSelectDepartment: (deptId: string) => void;
}

export const Departments: React.FC<DepartmentsProps> = ({ 
  language, 
  onSelectDepartment 
}) => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>(hospitalData.departments[0].id);
  const isMr = language === 'mr';

  const getDepartmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-sky-600" />;
      case 'Ambulance': return <Ambulance className="w-6 h-6 text-red-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-teal-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-indigo-600" />;
      case 'Pill': return <Pill className="w-6 h-6 text-emerald-600" />;
      default: return <Activity className="w-6 h-6 text-sky-600" />;
    }
  };

  const selectedDept = hospitalData.departments.find(d => d.id === selectedDeptId) || hospitalData.departments[0];

  return (
    <section id="departments" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>{isMr ? 'वैद्यकीय विभाग आणि सेवा' : 'Clinical Specialities & Services'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            {isMr ? 'सर्वसमावेशक आरोग्य सेवा एकाच छताखाली' : 'Comprehensive Medical Services Under One Roof'}
          </h2>

          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            {isMr ? (
              'क्रिटिकल केअर, अपघात व अस्थिरोग, लॅपरोस्कोपी आणि प्रसूती विभाग. आधुनिक वैद्यकीय तंत्रज्ञान व अनुभवी डॉक्टरांचे निरंतर सहकार्य.'
            ) : (
              'From acute trauma stabilization and modern intensive care to general inpatient medicine, maternity, and day-care surgery in Jamkhed.'
            )}
          </p>
        </div>

        {/* Department Interactive Grid / Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {hospitalData.departments.map((dept) => {
            const isSelected = dept.id === selectedDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-200 ${
                  isSelected 
                    ? 'bg-sky-50 border-sky-500 shadow-md ring-2 ring-sky-200' 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 ${
                  isSelected ? 'bg-white shadow-sm' : 'bg-slate-100'
                }`}>
                  {getDepartmentIcon(dept.iconName)}
                </div>

                <span className={`text-xs sm:text-sm font-bold line-clamp-2 ${
                  isSelected ? 'text-sky-900' : 'text-slate-700'
                }`}>
                  {isMr ? dept.nameMr : dept.name}
                </span>

                {dept.badge && (
                  <span className="mt-2 text-[10px] font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                    {dept.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Department Detailed View Card */}
        <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Detail Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  {selectedDept.badge || (isMr ? 'सत्यापित विभाग' : 'Verified Speciality')}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  {isMr ? 'हॉस्पिटल व्यवस्थापन मान्यताप्राप्त' : 'Hospital Core Clinical Unit'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
                {isMr ? selectedDept.nameMr : selectedDept.name}
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {isMr ? selectedDept.fullDescriptionMr : selectedDept.fullDescription}
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectDepartment(selectedDept.id)}
                  className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-2.5 rounded-lg shadow transition active:scale-95 text-sm"
                >
                  <span>{isMr ? 'या विभागासाठी वेळ नोंदवा' : 'Request Consultation for this Speciality'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Key Services Checklist */}
            <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-teal-600" />
                <span>{isMr ? 'प्रमुख वैद्यकीय सेवा व उपचार' : 'Key Services & Interventions'}</span>
              </h4>

              <ul className="space-y-3">
                {(isMr ? selectedDept.servicesMr : selectedDept.services).map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{isMr ? 'तातडीचा आपत्कालीन कक्ष २४ तास सुरू' : 'Emergency admissions 24 hours'}</span>
                <span className="font-semibold text-red-600">{isMr ? 'थेट प्रवेश' : 'Immediate Intake'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
