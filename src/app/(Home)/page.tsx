import Header from '../components/Header'
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import SocialMedia from '../components/SocialMedia';
import MotivationalPhrase from '../components/MotivationalPhrase';

export default function Home() {
  return (
    <main className='px-[10%] max-xl:px-[7%] max-lg:px-[5%] text-white'>
      <SocialMedia />
      <Header />
      <NavBar />
      <Hero />
      <MotivationalPhrase />
    </main>
  );
}
