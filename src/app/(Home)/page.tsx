import Header from '../components/Header'
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <main className='px-[10%] max-xl:px-[7%] max-lg:px-[5%] max-md:px-[2%]'>
      <Header />
      <NavBar />
      <Hero />
    </main>
  );
}
