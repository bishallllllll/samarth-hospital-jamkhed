import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  MessageCircle,
  FileQuestion
} from 'lucide-react';
import { hospitalData } from '../data/hospitalData';

interface FAQProps {
  language: 'en' | 'mr';
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isMr = language === 'mr';

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 text-xs font-bold px-3 py-1 rounded-full border border-teal-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>{isMr ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            {isMr ? 'रुग्ण आणि नातेवाईकांसाठी महत्त्वाची माहिती' : 'Patient & Attendant Guidance'}
          </h2>

          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            {isMr ? (
              'इमर्जन्सी प्रवेश, ओपीडी वेळा, रुग्णवाहिका आणि औषधालयाविषयी सर्वसामान्य प्रश्नांची उत्तरे.'
            ) : (
              'Clear answers regarding emergency admissions, visiting hours, ICU monitoring, and outpatient booking at Samarth Hospital.'
            )}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {hospitalData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-800 hover:text-sky-700 transition"
                >
                  <span className="text-sm sm:text-base pr-4">
                    {isMr ? faq.questionMr : faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0 text-slate-500">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-sky-600" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p className="pt-3">
                      {isMr ? faq.answerMr : faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Further Assistance Box */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-sky-50 to-teal-50 border border-sky-200 text-center space-y-3">
          <h3 className="font-bold text-navy-950 text-base">
            {isMr ? 'अधिक माहिती हवी आहे का?' : 'Have Additional Questions?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            {isMr ? (
              'आमचा रिसेप्शन डेस्क २४ तास मार्गदर्शनासाठी उपलब्ध आहे. थेट संपर्क साधा.'
            ) : (
              'Our reception desk is at your service 24 hours a day to answer queries on bed availability and treatments.'
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${hospitalData.contact.emergencyNumber}`}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow transition"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{hospitalData.contact.emergencyNumber}</span>
            </a>

            {hospitalData.contact.whatsappNumber && (
              <a
                href={`https://wa.me/${hospitalData.contact.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
