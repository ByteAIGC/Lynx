import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { FileText, Github, Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from 'react';

export default function App() {
  const highResScrollRef = useRef<HTMLDivElement>(null);

  const scrollHighResLeft = () => {
    if (highResScrollRef.current) {
      highResScrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };

  const scrollHighResRight = () => {
    if (highResScrollRef.current) {
      highResScrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <div className="navigation-content">
          <div className="navigation-title">
            <strong>Lynx:</strong> Towards High-Fidelity Personalized Video Generation
          </div>
          <div className="navigation-buttons">
            <Button className="bg-transparent text-white hover:bg-white hover:text-black transition-colors px-4 py-2 h-auto border border-white/20">
              <FileText className="w-4 h-4 mr-2 text-white" />
              Technical Report
            </Button>
            
            <Button variant="outline" className="border-border hover:bg-white hover:text-black transition-colors px-4 py-2 h-auto">
              <Github className="w-4 h-4 mr-2" />
              Code (Coming Soon)
            </Button>
          </div>
          <div className="navigation-logo">
            <svg height="2194" viewBox="1.37 0 1198.25 1051.64" width="2500" xmlns="http://www.w3.org/2000/svg">
              <path d="m206.82 943.8-205.45 52.74v-941.44l205.45 53.14z" fill="#fff"/>
              <path d="m532.79 972.14-205.44 53.13v-554.55l205.44 53.13z" fill="#fff"/>
              <path d="m667.02 388.86 205.84-53.14v554.55l-205.84-53.13z" fill="#fff"/>
              <path d="m1199.62 998.9-205.84 52.74v-1051.64l205.84 53.13z" fill="#fff"/>
            </svg>
          </div>
        </div>
      </nav>

      {/* Video Teaser Section */}
      <section className="video-teaser-section">
        <div className="video-teaser-background">
          <video muted loop autoPlay playsInline>
            <source src="assets/teaser.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-teaser-overlay"></div>
        <div className="video-teaser-content">
          <h1 className="video-teaser-title">
            <strong>Lynx</strong>
          </h1>
          <p className="video-teaser-subtitle">
          a high-fidelity video generation model for personalized synthesis from a single image. It leverages lightweight ID- and Ref-adapters to preserve identity and enrich spatial detail, achieving strong face resemblance, and smooth motion across diverse subjects and prompts.
          </p>
        </div>
      </section>

      {/* Main Generation Examples - Full Width with Large Videos */}
      <section className="section-fullwidth mb-[100px]">
        <div className="px-4 md:px-[10%]">
          <h3 className="text-xl font-semibold py-5 mb-5">
            Identity-Preserving Video Generation
          </h3>
          <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
            Lynx generates high-quality videos while preserving the precise identity characteristics from a single input image. 
            Our method maintains facial features, expressions, and identity consistency throughout the generated video sequence. Lynx is trained from Wan 2.1 and can be adopted into existing echosystems.<em>Hover over videos to see the generation prompts.</em>
          </p>
        </div>
        
        <div className="video-grid-large">
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/main/0023.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A musician playing a violin in a candlelit room, their face reflecting deep emotion and passion as they perform a heartfelt melody.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/main/0021.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">An astronaut floating in zero gravity inside a spaceship, reaching out to grab a floating apple while smiling with curiosity and wonder.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/main/0017.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">In a bustling urban street at dusk, a curious person stands near vibrant neon signs, their expression reflecting a blend of determination and wonder. They wear casual modern attire with intricate patterns, illuminated by the warm glow of city lights.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/main/0015.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">In a bustling open-air market filled with vibrant colors and aromatic spices, an animated person engages enthusiastically with their surroundings, exploring stalls brimming with exotic goods and handcrafted treasures.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/main/0014.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A person sits beside a large window in a cozy café while city lights blur and shimmer through the steady rain outside. They glance at their phone and react with a bright laugh, engaging with something off-screen.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/main/0013.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A person sits at a wooden table in a warmly lit kitchen, joyfully eating a plate of steaming dumplings. The camera frames them from the waist up as they lift each dumpling with chopsticks, dipping it into sauce before taking a bite.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/main/0010.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A person dives into a clear lake and resurfaces smiling. The camera dips underwater briefly, then follows their wet face in a close-up as water drips from their hair.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/main/0005.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A person plays a handheld video game on a sunny balcony. The camera stays mid-frame as they lean forward in concentration, tap buttons rapidly, then suddenly cheer and pump a fist in victory.</div>
          </div>
        </div>
      </section>

      {/* High Resolution Examples - Horizontal Scrolling */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          Gallery
        </h3>
        <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
          Explore our gallery of diverse video generations showcasing various scenarios and characters. 
          <em>Scroll horizontally to explore more examples.</em>
        </p>
        
        <div className="video-scroll-container">
          {/* Scroll Controls */}
          <button className="scroll-indicator left" onClick={scrollHighResLeft}>
            <ChevronLeft />
          </button>
          <button className="scroll-indicator right" onClick={scrollHighResRight}>
            <ChevronRight />
          </button>
          
          <div className="video-scroll-wrapper" ref={highResScrollRef}>
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/gallery/0025.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person walks slowly through a modern museum space with high ceilings and soft natural light, stopping to appreciate minimal art pieces with curiosity and calm.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/gallery/0007.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person enters a building through glass doors. The camera follows steadily from behind, capturing their full upper body and the sharp reflections in the glass.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/gallery/0016.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">On a picturesque rural farm bathed in the soft light of early morning, a thoughtful person tends to a blooming garden with serene concentration and deep respect for nature.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/gallery/0002.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person enthusiastically explains something to a friend across the table at a street-side cafe, gesturing with one hand and taking quick sips of coffee in between animated speech.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/gallery/0022.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A chef passionately tossing vegetables in a sizzling wok, their face glowing with concentration and pride as flames briefly flare up.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/gallery/0012.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person with a delicate flower crown stands amidst a field of gently swaying wildflowers, eyes sparkling with a serene gaze and a faint smile suggesting peaceful contentment.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/gallery/0026.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person waits at a crosswalk in an urban setting just after sunset, glancing at the traffic light and shifting their bag strap while colored street lights flicker subtly on their skin.</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Diverse Generation */}
      <section className="mb-[100px]">
        <div className="max-w-[1920px] mx-auto px-4 md:px-[10%]">
          <h3 className="text-xl font-semibold py-5 mb-5">
            Diverse Generation from Single Identity
          </h3>
          <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
            Given a single identity image, Lynx can generate diverse scenarios and expressions 
            while maintaining the core identity characteristics.
          </p>
        </div>
        
        <div className="flex flex-col gap-6 items-center">
          <div className="video-container">
            <video autoPlay playsInline muted loop>
              <source src="assets/multiscenes/0086.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="video-container">
            <video autoPlay playsInline muted loop>
              <source src="assets/multiscenes/0778.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>


      {/* Footer */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] py-20 mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        
        <div className="text-center space-y-8 relative z-10">
          <h4 className="text-lg font-medium">Research Team</h4>
          
          <div className="text-xs font-light text-[#999999] -mt-4 mb-4">
            *Equal Contribution
          </div>
          
          <div className="space-y-2 text-sm font-light">
            <div>
              <a
                href="https://ssangx.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999999] hover:text-white transition-colors underline"
              >
                Shen Sang*
              </a>
            </div>
            <div>
              <a
                href="https://tiancheng-zhi.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999999] hover:text-white transition-colors underline"
              >
                Tiancheng Zhi*
              </a>
            </div>
            <div>
              <a
                href="https://gutianpei.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999999] hover:text-white transition-colors underline"
              >
                Tianpei Gu
              </a>
            </div>
            <div>
              <a
                href="https://www.jingliu.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999999] hover:text-white transition-colors underline"
              >
                Jing Liu
              </a>
            </div>
            <div>
              <a
                href="https://linjieluo.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999999] hover:text-white transition-colors underline"
              >
                Linjie Luo
              </a>
            </div>
          </div>
          
          <div className="text-sm font-light text-[#999999]">
            Intelligent Creation Lab, ByteDance
          </div>
          
          <div className="text-xs font-light text-[#666666] mt-8">
            Webpage design inspired by <a href="https://seaweed-apt.com/2" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors underline">Seaweed-APT2</a>
          </div>
        </div>
      </section>
    </div>
  );
}