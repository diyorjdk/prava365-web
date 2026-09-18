import { useState } from 'react'
import { CheckCircle, XCircle, HelpCircle, RotateCcw, Award } from 'lucide-react'

export default function InteractiveQuestionDemo() {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sampleQuestion = {
    id: 1,
    badge: '1-Bilet • 4-Savol',
    question: 'Ushbu yo\'l belgisi qanday ma\'noni bildiradi va kimlarga tegishli?',
    signNumber: '3.1',
    signName: 'Kirish taqiqlangan ("G\'isht")',
    options: [
      { id: 'a', text: 'Barcha transport vositalarining kirishi taqiqlanadi', isCorrect: true },
      { id: 'b', text: 'Faqat yuk avtomobillari kirishi taqiqlanadi', isCorrect: false },
      { id: 'c', text: 'Faqat mototsikllar kirishi taqiqlanadi', isCorrect: false },
    ],
    explanation: '3.1 "Kirish taqiqlangan" belgisi ushbu yo\'nalishda barcha transport vositalarining harakatlanishini taqiqlaydi (yo\'nalishli transport vositalari bundan mustasno).'
  }

  const handleSelect = (optionId) => {
    if (isSubmitted) return
    setSelectedAnswer(optionId)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setIsSubmitted(false)
  }

  const isCorrect = selectedAnswer === 'a'

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-25"></div>

      <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-300">
              Jonli Sinov Savoli
            </span>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-blue-300 font-medium">
            {sampleQuestion.badge}
          </span>
        </div>

        {/* Content area */}
        <div className="p-5">
          {/* Question visual illustration */}
          <div className="mb-4 bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4">
            <div className="w-16 h-16 shrink-0 rounded-full bg-red-600 border-4 border-white shadow-md flex items-center justify-center">
              <div className="w-9 h-2.5 bg-white rounded-xs"></div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Belgi: {sampleQuestion.signNumber}
              </p>
              <h4 className="text-sm font-bold text-slate-900">
                {sampleQuestion.signName}
              </h4>
            </div>
          </div>

          {/* Question Text */}
          <p className="text-sm font-medium text-slate-800 mb-4">
            {sampleQuestion.question}
          </p>

          {/* Options */}
          <div className="space-y-2 mb-4">
            {sampleQuestion.options.map((option) => {
              let optionStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
              
              if (isSubmitted) {
                if (option.isCorrect) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500'
                } else if (selectedAnswer === option.id) {
                  optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-1 ring-rose-500'
                } else {
                  optionStyle = 'opacity-50 border-slate-200 bg-slate-50'
                }
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  disabled={isSubmitted}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <span className="leading-snug">{option.text}</span>
                  {isSubmitted && option.isCorrect && (
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  {isSubmitted && !option.isCorrect && selectedAnswer === option.id && (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Feedback & Explanation */}
          {isSubmitted && (
            <div
              className={`p-3.5 rounded-xl text-xs leading-relaxed animate-in fade-in duration-300 mb-4 ${
                isCorrect
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  : 'bg-amber-50 border border-amber-200 text-amber-900'
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold mb-1">
                {isCorrect ? (
                  <>
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Ofarin! To‘g‘ri javob!</span>
                  </>
                ) : (
                  <>
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span>Qoidaga e'tibor bering:</span>
                  </>
                )}
              </div>
              <p>{sampleQuestion.explanation}</p>
            </div>
          )}

          {/* Footer action */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
            <span>{!isSubmitted ? 'Bitta javobni tanlang' : 'Natija qayd etildi'}</span>
            {isSubmitted && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Qayta sinash
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
