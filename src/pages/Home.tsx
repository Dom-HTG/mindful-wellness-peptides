import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { TrustBento } from '../components/TrustBento'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { QuizTeaser } from '../components/QuizTeaser'
import { DesireScroll } from '../components/DesireScroll'
import { Testimonials } from '../components/Testimonials'
import { FAQ } from '../components/FAQ'

export const Home = () => (
  <>
    <Hero />
    <Marquee />
    <TrustBento />
    <FeaturedProducts />
    <QuizTeaser />
    <DesireScroll />
    <Testimonials />
    <FAQ />
  </>
)
