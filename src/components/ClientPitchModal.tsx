import React from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Rocket, 
  ShieldCheck, 
  Globe, 
  Phone, 
  FileText, 
  DollarSign, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface ClientPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'mr';
}

export const ClientPitchModal: React.FC<ClientPitchModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const isMr = language === 'mr';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-navy-950 via-navy-900 to-sky-900 text-white flex justify-between items-start rounded-t-2xl">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-teal-400/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full border border-teal-400/30 mb-2">
              <Rocket className="w-3.5 h-3.5 text-teal-400" />
              <span>Project Commercial Proposal & Pitch Package</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Official Digital Portal for Samarth Hospital, Jamkhed
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Presented to Dr. Bharat Darkunde & Hospital Management Team
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700">
          {/* Executive Value Proposition */}
          <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 space-y-2">
            <h4 className="font-bold text-sky-950 text-sm flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-600" />
              <span>The Strategic Opportunity: #1 Digital Healthcare Authority in Jamkhed</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Our market research confirms that <strong>zero private hospitals in Jamkhed currently operate an official, modern, mobile-friendly website</strong>. Competitors rely on third-party aggregators with outdated phone numbers. Launching this official portal establishes Samarth Hospital as the undisputed first choice for emergency trauma, ICU, and maternity care across 87+ villages and the Beed–Nagar highway corridor.
            </p>
          </div>

          {/* Section 1: Verified Facts vs Outstanding Approvals */}
          <div className="space-y-3">
            <h4 className="font-bold text-navy-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>1. Current Verification Status & Onboarding Audit</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 space-y-2">
                <div className="font-bold text-teal-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Verified & Built into Prototype:</span>
                </div>
                <ul className="space-y-1.5 text-teal-800">
                  <li>• Official facility identity & Beed Road landmark</li>
                  <li>• Leadership by Dr. Bharat Darkunde & Dr. Sonali Darkunde</li>
                  <li>• 24/7 Casualty, Emergency & ICU status</li>
                  <li>• Direct contact numbers: 9545403100 & 7776938712</li>
                  <li>• Advanced C-Arm and orthopedic surgical scope</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>To Confirm with Dr. Darkunde (Pre-Launch):</span>
                </div>
                <ul className="space-y-1.5 text-amber-900">
                  <li>• Exact medical degree letters (MBBS, MS, MD, BAMS)</li>
                  <li>• MMC / MCIM state medical registration numbers</li>
                  <li>• High-resolution authentic photos (using our Photo Guide)</li>
                  <li>• Official domain selection (`samarthhospitaljamkhed.com`)</li>
                  <li>• Active list of cashless health insurance / TPA tie-ups</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Proposed Scope of Work & Production Roadmap */}
          <div className="space-y-3">
            <h4 className="font-bold text-navy-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-600" />
              <span>2. Proposed Production Deliverables (Paid Package)</span>
            </h4>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</div>
                <div>
                  <strong>Domain, Hosting & Enterprise SSL Setup:</strong> Registration of `samarthhospitaljamkhed.com`, cloud deployment with 99.9% uptime SLA, and automated daily backups.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</div>
                <div>
                  <strong>WhatsApp & SMS Appointment Router:</strong> Integration of an automated WhatsApp Business desk routing OPD enquiries directly to the reception phone.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</div>
                <div>
                  <strong>Google Business Profile (GBP) & Local SEO Dominance:</strong> Verification and optimization of Google Maps pin, achieving top-3 ranking for "hospital in Jamkhed" and "ICU Jamkhed".
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">4</div>
                <div>
                  <strong>Complete Marathi & English Localization:</strong> Full dual-language toggle with local healthcare terminology for patient comfort.
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Next Steps to Execute Contract */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-navy-900 to-navy-800 text-white space-y-3">
            <h4 className="font-bold text-sm text-teal-300">
              Immediate Recommended Action
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Demonstrate this interactive prototype live on tablet and desktop to Dr. Bharat Darkunde. Review the photo checklist, receive his degree approvals, and initiate the 14-day production deployment to secure the primary domain.
            </p>
            <div className="pt-1 flex items-center justify-between text-xs">
              <span className="text-sky-300 font-semibold">Ready for Client Review</span>
              <button
                onClick={onClose}
                className="bg-teal-500 hover:bg-teal-600 text-navy-950 font-bold px-4 py-2 rounded-lg transition"
              >
                Return to Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
