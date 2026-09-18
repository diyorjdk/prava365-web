import HeroSection from '@/components/landing/HeroSection'
import StatsSection from '@/components/landing/StatsSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import HowItWorksSection from '@/components/landing/HowItWorksSection'
import FaqSection from '@/components/landing/FaqSection'
import CtaSection from '@/components/landing/CtaSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero with interactive demo widget */}
      <HeroSection />

      {/* Key Stats Counter */}
      <StatsSection />

      {/* 6 Core Platform Features */}
      <FeaturesSection />

      {/* 3 Step Preparation Workflow */}
      <HowItWorksSection />

      {/* Interactive FAQ Accordion */}
      <FaqSection />

      {/* Call to Action Banner */}
      <CtaSection />
    </div>
  )
}
