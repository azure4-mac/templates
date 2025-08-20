import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Contato />
      <Footer />
    </main>
  );
}