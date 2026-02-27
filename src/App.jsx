import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveUpRight, ArrowRight, BrainCircuit, Bot, BarChart, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// SVG Noise Filter Component for Cinematic Texture
const NoiseOverlay = () => (
  <div className="pointer-events-none absolute inset-0 z-[-1] opacity-[0.04]">
    <svg className="h-full w-full">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

// Main App Component
export default function App() {
  const main = useRef();

  useGSAP(() => {
    // --- NAVBAR MORPH ANIMATION ---
    gsap.to('.navbar', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'bottom 80%',
        end: 'bottom top',
        scrub: 0.5,
        toggleActions: 'play none none reverse',
      },
      width: '180px',
      padding: '0.5rem 1.5rem',
      backgroundColor: 'rgba(57, 255, 20, 0.1)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(57, 255, 20, 0.2)',
      ease: 'power2.inOut',
    });

    // --- HERO STAGGERED FADE-UP ANIMATION ---
    gsap.from('.hero-element', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.5,
    });

    // --- FEATURES MICRO-INTERFACE ANIMATION ---
    const featuresTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top 50%',
        end: 'bottom 80%',
        scrub: 1,
      }
    });
    featuresTl.fromTo('.feature-line', { scaleY: 0 }, { scaleY: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' })
              .fromTo('.feature-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2, ease: 'power2.out' }, "-=0.8");

    // --- PROCESS VERTICAL STACKED CARDS ANIMATION ---
    const processPanels = gsap.utils.toArray('.process-panel');
    gsap.to(processPanels, {
      xPercent: -100 * (processPanels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.process-container',
        pin: true,
        scrub: 1,
        snap: 1 / (processPanels.length - 1),
        end: () => "+=" + document.querySelector('.process-container').offsetWidth,
      },
    });

  }, { scope: main });

  return (
    <main ref={main} className="bg-[#0A0F1A] text-gray-200 font-sans overflow-x-hidden">
      <NoiseOverlay />

      {/* 1. NAVBAR (Floating Smart System) */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="navbar flex items-center justify-center gap-2 w-[320px] h-[52px] rounded-full bg-transparent transition-all duration-300">
          <a href="#contact" className="flex items-center justify-center gap-2 text-[#39FF14] text-[clamp(0.8rem,1.5vw,1rem)] font-medium">
            <span>Fale Conosco</span>
            <MoveUpRight className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section className="hero-section relative flex items-center justify-center min-h-[100dvh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F1A] z-10"></div>
        <div className="absolute inset-0 bg-[#0A0F1A] opacity-50 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-[#39FF14] rounded-full blur-[250px] opacity-10 z-0"></div>

        <div className="container mx-auto px-6 text-center z-20">
          <h1 className="hero-element text-[clamp(2.5rem,10vw,6rem)] font-bold leading-none tracking-tighter">
            Automação Inteligente <br /> que <span className="text-[#39FF14]">Escala</span>
          </h1>
          <p className="hero-element text-[clamp(1rem,2.5vw,1.25rem)] mt-6 max-w-2xl mx-auto text-gray-400">
            A LMB transforma negócios com Inteligência Artificial preditiva, otimizando processos e impulsionando o crescimento.
          </p>
          <div className="hero-element mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#39FF14] text-[#0A0F1A] font-bold py-4 px-8 rounded-[2rem] text-[clamp(1rem,2vw,1.1rem)] transition-transform duration-300 hover:scale-105"
            >
              <span>Solicitar Demonstração</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. FUNCTIONAL FEATURES (Micro-Interface) */}
      <section className="features-section py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-tighter">
            Automação Corporativa com IA
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] mt-4 max-w-3xl mx-auto text-gray-400">
            Nossas soluções são desenhadas para se integrar perfeitamente aos seus sistemas existentes, criando um ecossistema inteligente e autônomo.
          </p>

          <div className="mt-24 flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              {/* Central Brain Icon */}
              <div className="feature-item absolute z-10 p-6 bg-[#0A0F1A] rounded-full border border-gray-800">
                <BrainCircuit size={64} className="text-[#39FF14]" />
              </div>

              {/* Feature 1 */}
              <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 text-center">
                <div className="feature-line w-[2px] h-[60px] bg-gray-800 mx-auto origin-bottom"></div>
                <div className="feature-item p-4 bg-[#101827] rounded-[2rem] border border-gray-800 mt-[-2px]">
                  <Bot size={24} className="text-[#39FF14] mx-auto mb-2" />
                  <p className="font-semibold text-sm">IA Preditiva</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 text-center">
                <div className="feature-line w-[100px] h-[2px] bg-gray-800 my-auto origin-left absolute left-[-100px] top-1/2"></div>
                <div className="feature-item p-4 bg-[#101827] rounded-[2rem] border border-gray-800">
                  <BarChart size={24} className="text-[#39FF14] mx-auto mb-2" />
                  <p className="font-semibold text-sm">Análise de Dados</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 text-center">
                <div className="feature-line w-[2px] h-[60px] bg-gray-800 mx-auto origin-top"></div>
                <div className="feature-item p-4 bg-[#101827] rounded-[2rem] border border-gray-800 mb-[-2px]">
                  <Layers size={24} className="text-[#39FF14] mx-auto mb-2" />
                  <p className="font-semibold text-sm">Integração Total</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 text-center">
                <div className="feature-line w-[100px] h-[2px] bg-gray-800 my-auto origin-right absolute right-[-100px] top-1/2"></div>
                <div className="feature-item p-4 bg-[#101827] rounded-[2rem] border border-gray-800">
                  <Bot size={24} className="text-[#39FF14] mx-auto mb-2" />
                  <p className="font-semibold text-sm">RPA Avançado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS (Vertical Stacked Full-Screen Cards) */}
      <section className="process-container relative h-screen w-full flex overflow-hidden">
        <div className="flex w-[300vw] h-full">
          {/* Panel 1 */}
          <div className="process-panel w-screen h-screen flex items-center justify-center p-8 bg-[#101827]">
            <div className="text-center max-w-3xl">
              <p className="text-2xl font-bold text-[#39FF14] mb-4">01.</p>
              <h3 className="text-[clamp(2rem,7vw,4rem)] font-bold tracking-tighter">Diagnóstico e Estratégia</h3>
              <p className="text-[clamp(1rem,2.5vw,1.25rem)] mt-6 text-gray-400">
                Analisamos profundamente seus processos para identificar os melhores pontos de automação e o maior potencial de ROI.
              </p>
            </div>
          </div>
          {/* Panel 2 */}
          <div className="process-panel w-screen h-screen flex items-center justify-center p-8 bg-[#0A0F1A]">
            <div className="text-center max-w-3xl">
              <p className="text-2xl font-bold text-[#39FF14] mb-4">02.</p>
              <h3 className="text-[clamp(2rem,7vw,4rem)] font-bold tracking-tighter">Implementação e Integração</h3>
              <p className="text-[clamp(1rem,2.5vw,1.25rem)] mt-6 text-gray-400">
                Nossa equipe de especialistas, com experiência no Google AI, desenvolve e integra as soluções de IA de forma transparente em seu ecossistema.
              </p>
            </div>
          </div>
          {/* Panel 3 */}
          <div className="process-panel w-screen h-screen flex items-center justify-center p-8 bg-[#101827]">
            <div className="text-center max-w-3xl">
              <p className="text-2xl font-bold text-[#39FF14] mb-4">03.</p>
              <h3 className="text-[clamp(2rem,7vw,4rem)] font-bold tracking-tighter">Otimização e Escala</h3>
              <p className="text-[clamp(1rem,2.5vw,1.25rem)] mt-6 text-gray-400">
                Monitoramos o desempenho e otimizamos continuamente os algoritmos para garantir que sua automação evolua e escale com seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROOF & FINAL OFFER */}
      <section id="contact" className="py-32 bg-[#0A0F1A]">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-[#101827] p-12 rounded-[3rem] border border-gray-800 max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-[#39FF14]">Prova de Expertise</p>
            <h3 className="text-[clamp(1.8rem,5vw,3rem)] font-bold tracking-tighter mt-4">
              Desenvolvido por Especialistas do Google AI
            </h3>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Nossa equipe fundadora traz anos de experiência liderando projetos de ponta em Inteligência Artificial no Google, garantindo uma base de conhecimento e inovação incomparável para o seu negócio.
            </p>
            <div className="mt-12">
              <a
                href="mailto:contato@lmb.digital"
                className="inline-flex items-center gap-3 bg-[#39FF14] text-[#0A0F1A] font-bold py-5 px-10 rounded-[2rem] text-[clamp(1.1rem,2.5vw,1.25rem)] transition-transform duration-300 hover:scale-105 shadow-[0_0_30px_rgba(57,255,20,0.4)]"
              >
                <span>Transforme seu Negócio Agora</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#101827] rounded-t-[4rem] pt-16 pb-8">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-2xl font-bold">LMB Digital AI</h4>
              <p className="text-gray-400 mt-2">Automação Inteligente que Escala.</p>
            </div>
            <div>
              <h5 className="font-bold text-lg text-gray-300">Contato</h5>
              <ul className="space-y-2 mt-4 text-gray-400">
                <li>Email: contato@lmb.digital</li>
                <li>Telefone: 11 99999-9999</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg text-gray-300">Endereço</h5>
              <p className="text-gray-400 mt-4">São Paulo, SP</p>
              <p className="text-gray-500 text-sm mt-2">CNPJ: 00.000.000/0001-00</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} LMB Digital AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}