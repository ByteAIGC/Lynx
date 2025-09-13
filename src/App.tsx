import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { FileText, Github, Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from 'react';

export default function App() {
  const highResScrollRef = useRef<HTMLDivElement>(null);
  const base = import.meta.env.BASE_URL; // "/Lynx/" in production

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
        </div>
      </nav>

      {/* Video Teaser Section */}
      <section className="video-teaser-section">
        <div className="video-teaser-background">
          <video muted loop autoPlay playsInline>
            <source src={`${base}assets/teaser.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="video-teaser-overlay"></div>
        <div className="video-teaser-content">
          <h1 className="video-teaser-title"><strong>Lynx</strong></h1>
          <p className="video-teaser-subtitle">
            a high-fidelity video generation model for personalized synthesis from a single image. It leverages lightweight ID- and Ref-adapters to preserve identity and enrich spatial detail, achieving strong face resemblance, and smooth motion across diverse subjects and prompts.
          </p>
        </div>
      </section>

      {/* Main Generation Examples */}
      <section className="section-fullwidth mb-[100px]">
        <div className="px-4 md:px-[10%]">
          <h3 className="text-xl font-semibold py-5 mb-5">Identity-Preserving Video Generation</h3>
          <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
            Lynx generates high-quality videos while preserving the precise identity characteristics from a single input image. 
            Our method maintains facial features, expressions, and identity consistency throughout the generated video sequence. Lynx is trained from Wan 2.1 and can be adopted into existing echosystems.<em>Hover over videos to see the generation prompts.</em>
          </p>
        </div>

        <div className="video-grid-large">
          {["0023","0021","0017","0015","0014","0013","0010","0005"].map((id, idx) => (
            <div className="prompt-wrap" key={idx}>
              <div className="video-container-large">
                <video muted loop autoPlay playsInline>
                  <source src={`${base}assets/main/${id}.mp4`} type="video/mp4" />
                </video>
              </div>
              <div className="prompt-large">Prompt text for {id}…</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">Gallery</h3>
        <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
          Explore our gallery of diverse video generations showcasing various scenarios and characters. 
          <em>Scroll horizontally to explore more examples.</em>
        </p>
        <div className="video-scroll-container">
          <button className="scroll-indicator left" onClick={scrollHighResLeft}><ChevronLeft /></button>
          <button className="scroll-indicator right" onClick={scrollHighResRight}><ChevronRight /></button>
          <div className="video-scroll-wrapper" ref={highResScrollRef}>
            {["0025","0007","0016","0002","0022","0012","0026"].map((id, idx) => (
              <div className="video-scroll-item" style={{ width: '480px' }} key={idx}>
                <div className="prompt-wrap">
                  <div className="video-container">
                    <video muted loop autoPlay playsInline>
                      <source src={`${base}assets/gallery/${id}.mp4`} type="video/mp4" />
                    </video>
                  </div>
                  <div className="prompt">Prompt text for {id}…</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diverse Generation */}
      <section className="mb-[100px]">
        <div className="max-w-[1920px] mx-auto px-4 md:px-[10%]">
          <h3 className="text-xl font-semibold py-5 mb-5">Diverse Generation from Single Identity</h3>
          <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
            Given a single identity image, Lynx can generate diverse scenarios and expressions 
            while maintaining the core identity characteristics.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="video-container">
            <video autoPlay playsInline muted loop>
              <source src={`${base}assets/multiscenes/0086.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="video-container">
            <video autoPlay playsInline muted loop>
              <source src={`${base}assets/multiscenes/0778.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

{/* Footer */} <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] py-20 mt-20 relative"> <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" /> <div className="text-center space-y-8 relative z-10"> <h4 className="text-lg font-medium">Research Team</h4> <div className="text-xs font-light text-[#999999] -mt-4 mb-4"> *Equal Contribution </div> <div className="space-y-2 text-sm font-light"> <div> <a href="https://ssangx.github.io/" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors underline" > Shen Sang* </a> </div> <div> <a href="https://tiancheng-zhi.github.io/" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors underline" > Tiancheng Zhi* </a> </div> <div> <a href="https://gutianpei.github.io/" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors underline" > Tianpei Gu </a> </div> <div> <a href="https://www.jingliu.net/" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors underline" > Jing Liu </a> </div> <div> <a href="https://linjieluo.github.io/" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors underline" > Linjie Luo </a> </div> </div> <div className="text-sm font-light text-[#999999]"> Intelligent Creation Lab, ByteDance </div> <div className="text-xs font-light text-[#666666] mt-8"> Webpage design inspired by <a href="https://seaweed-apt.com/2" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors underline">Seaweed-APT2</a> </div> </div> </section> </div> ); }