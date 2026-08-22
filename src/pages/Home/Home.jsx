import Hero from "../../components/Hero/Hero.jsx"
import Manifesto from "../../components/Manifesto/Manifesto.jsx"
import JdmSection from "../../components/JdmSection/JdmSection.jsx"
import GoldenEra from "../../components/GoldenEra/GoldenEra.jsx"
import Timeline from "../../components/Timeline/Timeline.jsx"
import CarGrid from "../../components/CarGrid/CarGrid.jsx"
import { DriftSection, TougeSection, WanganSection, DaikokuSection } from "../../components/Atmosphere/Atmosphere.jsx"
import Archive, { CultureSection } from "../../components/Archive/Archive.jsx"
import EngineSection from "../../components/EngineSection/EngineSection.jsx"
import Eras from "../../components/Eras/Eras.jsx"
import RussiaSection from "../../components/RussiaSection/RussiaSection.jsx"
import EventsSection from "../../components/EventsSection/EventsSection.jsx"
import VisitSection from "../../components/VisitSection/VisitSection.jsx"
import Tickets from "../../components/Tickets/Tickets.jsx"
import FinalCTA from "../../components/FinalCTA/FinalCTA.jsx"
import Seo, { museumJson } from "../../components/Seo/Seo.jsx"

export default function Home() {
  return (
    <>
      <Seo json={museumJson} />
      <Hero />
      <Manifesto />
      <JdmSection />
      <GoldenEra />
      <Timeline />
      <CarGrid />
      <DriftSection />
      <TougeSection />
      <WanganSection />
      <DaikokuSection />
      <CultureSection />
      <Archive />
      <EngineSection />
      <Eras />
      <RussiaSection />
      <EventsSection />
      <VisitSection />
      <Tickets />
      <FinalCTA />
    </>
  )
}
