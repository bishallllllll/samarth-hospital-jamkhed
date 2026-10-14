import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Phone, 
  User, 
  ShieldCheck, 
  CheckCircle, 
  AlertTriangle,
  Info,
  HelpCircle
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'mr';
  initialDepartment?: string;
  initialDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  language,
  initialDepartment,
  initialDoctor,
}) => {
  const isMr = language === 'mr';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState(initialDepartment || hospitalData.departments[0].id);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredShift, setPreferredShift] = useState<'morning' | 'evening'>('morning');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setValidationError(isMr ? 'कृपया रुग्णाचे पूर्ण नाव प्रविष्ट करा.' : 'Please enter patient full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setValidationError(isMr ? 'कृपया वैध १०-अंकी मोबाईल नंबर प्रविष्ट करा.' : 'Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!preferredDate) {
      setValidationError(isMr ? 'कृपया तपासणीची तारीख निवडा.' : 'Please select preferred date.');
      return;
    }

    setValidationError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setPreferredDate('');
    setNotes('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-navy-900 to-navy-800 text-white flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {isMr ? 'ओपीडी तपासणी वेळ नोंदणी (Enquiry)' : 'Request OPD Consultation Slot'}
              </h3>
              <p className="text-xs text-slate-300">
                {isMr ? 'समर्थ हॉस्पिटल, बीड रोड, जामखेड' : 'Samarth Hospital, Beed Road, Jamkhed'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Demo Guardrail Notice */}
          <div className="mb-6 p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">
                {isMr ? 'प्रोटोटाइप प्रात्यक्षिक सूचना:' : 'Prototype Demonstration Notice:'}
              </span>{' '}
              {isMr ? (
                'हे हॉस्पिटल व्यवस्थापनासाठी बनवलेले वेब प्रात्यक्षिक आहे. तातडीच्या आपत्कालीन उपचारांसाठी कृपया फॉर्म भरण्याऐवजी थेट ९५४५४ ०३१०० या क्रमांकावर कॉल करा किंवा हॉस्पिटलला भेट द्या.'
              ) : (
                'This interaction is a prototype demonstration for Samarth Hospital. For acute medical emergencies, please do not wait for online replies — call the 24/7 casualty desk at +91 95454 03100 immediately.'
              )}
            </div>
          </div>

          {isSubmitted ? (
            /* Safe Feedback State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h4 className="text-xl font-bold text-navy-950">
                {isMr ? 'चौकशी नोंद यशस्वी झाली (Demo)' : 'Enquiry Simulation Received'}
              </h4>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {isMr ? (
                  `धन्यवाद, ${fullName}. प्रत्यक्ष प्रणालीमध्ये हा तपशील हॉस्पिटलच्या रिसेप्शन डेस्कवर त्वरित पाठवला जातो आणि कर्मचारी फोन करून वेळ निश्चित करतात.`
                ) : (
                  `Thank you, ${fullName}. In the live deployment, this enquiry is routed straight to the hospital reception desk for telephone confirmation.`
                )}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 max-w-sm mx-auto text-left space-y-1.5">
                <div><strong>{isMr ? 'रुग्ण:' : 'Patient:'}</strong> {fullName}</div>
                <div><strong>{isMr ? 'मोबाईल:' : 'Phone:'}</strong> {phone}</div>
                <div><strong>{isMr ? 'तारीख:' : 'Date:'}</strong> {preferredDate} ({preferredShift === 'morning' ? (isMr ? 'सकाळ सत्र' : 'Morning') : (isMr ? 'संध्याकाळ सत्र' : 'Evening')})</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm shadow transition"
                >
                  {isMr ? 'बंद करा' : 'Close Demo'}
                </button>
              </div>
            </div>
          ) : (
            /* Input Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {validationError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs font-semibold text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isMr ? 'रुग्णाचे पूर्ण नाव *' : 'Patient Full Name *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isMr ? 'उदा. रमेश ज्ञानदेव पाटील' : 'e.g. Ramesh Patil'}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isMr ? 'मोबाईल नंबर (पुष्टीकरणासाठी) *' : 'Mobile Number (For Confirmation) *'}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98XXXXXXXX"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Department & Date Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Department Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'विभाग / तज्ज्ञ *' : 'Department *'}
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                  >
                    {hospitalData.departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {isMr ? dept.nameMr : dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isMr ? 'अपेक्षित तारीख *' : 'Preferred Date *'}
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                  />
                </div>
              </div>

              {/* Shift Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isMr ? 'पसंतीची वेळ (सत्र)' : 'Preferred OPD Session'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPreferredShift('morning')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                      preferredShift === 'morning'
                        ? 'bg-sky-100 border-sky-500 text-sky-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{isMr ? 'सकाळ (१० ते २)' : 'Morning (10AM - 2PM)'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredShift('evening')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                      preferredShift === 'evening'
                        ? 'bg-sky-100 border-sky-500 text-sky-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{isMr ? 'संध्याकाळ (५ ते ९)' : 'Evening (5PM - 9PM)'}</span>
                  </button>
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isMr ? 'तक्रार किंवा संक्षिप्त माहिती (पर्यायी)' : 'Brief Symptoms / Reason (Optional)'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isMr ? 'उदा. ताप, सांधेदुखी, रक्तदाब तपासणी...' : 'e.g. routine checkup, fever, joint pain'}
                  className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
                ></textarea>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2.5 px-4 rounded-lg text-slate-600 hover:bg-slate-100 text-sm font-semibold transition"
                >
                  {isMr ? 'रद्द करा' : 'Cancel'}
                </button>

                <button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2.5 px-6 rounded-lg text-sm shadow transition active:scale-95"
                >
                  {isMr ? 'नोंदणी विनंती पाठवा' : 'Submit OPD Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
