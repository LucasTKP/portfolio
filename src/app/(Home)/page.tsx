import Header from '../components/Header'
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import SocialMedia from '../components/SocialMedia';
import MotivationalPhrase from '../components/MotivationalPhrase';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <main id='house' className='px-[10%] max-xl:px-[7%] max-lg:px-[5%] text-white pb-[50%]'>
      <SocialMedia />
      <Header />
      <NavBar />
      <Hero />
      <MotivationalPhrase />
      <Projects />
      <Skills />
    </main>
  );
}
