import Header from '../components/Header'
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import SocialMedia from '../components/SocialMedia';
import MotivationalPhrase from '../components/MotivationalPhrase';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Aboutme from '../components/About-me';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main id='house' className=' text-white'>
      <div className='px-[10%] max-xl:px-[7%] max-lg:px-[5%]'>
        <SocialMedia />
        <Header />
        <NavBar />
        <Hero />
        <MotivationalPhrase />
        <Projects />
        <Skills />
        <Aboutme />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
