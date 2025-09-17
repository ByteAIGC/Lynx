import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { FileText, Github, Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from 'react';

export default function App() {
  const highResScrollRef = useRef<HTMLDivElement>(null);
  const diverseScrollRef = useRef<HTMLDivElement>(null);
  const base = import.meta.env.BASE_URL;

  // Diverse Generation videos
  const diverseVideos = [
    { src: "assets/multiscenes/0086.mp4", title: "Subject 1", description: "Multiple diverse scenarios" },
    { src: "assets/multiscenes/0778.mp4", title: "Subject 2", description: "Multiple diverse scenarios" },
    { src: "assets/multiscenes/0828.mp4", title: "Subject 3", description: "Multiple diverse scenarios" },
    { src: "assets/multiscenes/0335.mp4", title: "Subject 4", description: "Multiple diverse scenarios" }
  ];

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

  const scrollDiverseLeft = () => {
    if (diverseScrollRef.current) {
      diverseScrollRef.current.scrollBy({ left: -diverseScrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollDiverseRight = () => {
    if (diverseScrollRef.current) {
      diverseScrollRef.current.scrollBy({ left: diverseScrollRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollToVideo = (index: number) => {
    if (diverseScrollRef.current) {
      const scrollAmount = index * diverseScrollRef.current.offsetWidth;
      diverseScrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <div className="navigation-content">
          {/* <div className="navigation-title">
            <strong>Lynx:</strong> Towards High-Fidelity Personalized Video Generation
          </div> */}
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

      {/* Teaser Description Section */}
      <section className="teaser-description-section">
        <div className="teaser-description-content">
          <h1 className="teaser-main-title">
            <strong>Lynx</strong>
          </h1>
          <h2 className="teaser-subtitle">
            Towards High-Fidelity Personalized Video Generation
          </h2>
          <p className="teaser-description">
            We present Lynx, a high-fidelity model for personalized video synthesis from a single input image.
            Built on an open-source Diffusion Transformer (DiT) foundation model, Lynx introduces two
            lightweight adapters to ensure identity fidelity. The ID-adapter employs a Perceiver Resampler to
            convert ArcFace-derived facial embeddings into compact identity tokens for conditioning, while the
            Ref-adapter integrates dense VAE features from a frozen reference pathway, injecting fine-grained
            details across all transformer layers through cross-attention. These modules collectively enable
            robust identity preservation while maintaining temporal coherence and visual realism. Through
            evaluation on a curated benchmark of 40 subjects and 20 unbiased prompts, which yielded 800
            test cases, Lynx has demonstrated superior face resemblance, competitive prompt following, and
            strong video quality, thereby advancing the state of personalized video generation.
          </p>
        </div>
      </section>

      {/* Video Teaser Section */}
      <section className="video-teaser-section">
        <div className="video-teaser-background">
          <video muted loop autoPlay playsInline>
            <source src={`${base}assets/teaser_v2.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="video-teaser-overlay"></div>
      </section>

      {/* Main Generation Examples - Full Width with Large Videos */}
      <section className="section-fullwidth mb-[100px]">
        <div className="px-4 md:px-[10%]">
          <h3 className="text-xl font-semibold py-5 mb-5">
            Identity-Preserving Video Generation
          </h3>
          <p className="section-description">
            Lynx generates high-quality videos while preserving the precise identity characteristics from a single input image.
            Our method maintains facial features, expressions, and identity consistency throughout the generated video sequence. Lynx is trained from Wan 2.1 and can be adopted into existing echosystems.<em>Hover over videos to see the generation prompts.</em>
          </p>
        </div>
        
        <div className="video-grid video-grid-3">
          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src={`${base}assets/main/0021.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="prompt">An astronaut floating in zero gravity inside a spaceship, reaching out to grab a floating apple while smiling with curiosity and wonder.</div>
          </div>

          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src={`${base}assets/main/0017.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="prompt">In a bustling urban street at dusk, a curious person stands near vibrant neon signs, their expression reflecting a blend of determination and wonder. They wear casual modern attire with intricate patterns, illuminated by the warm glow of city lights.</div>
          </div>

          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src={`${base}assets/main/0015.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="prompt">In a bustling open-air market filled with vibrant colors and aromatic spices, an animated person engages enthusiastically with their surroundings, exploring stalls brimming with exotic goods and handcrafted treasures.</div>
          </div>

          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src={`${base}assets/main/0014.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="prompt">A person sits beside a large window in a cozy café while city lights blur and shimmer through the steady rain outside. They glance at their phone and react with a bright laugh, engaging with something off-screen.</div>
          </div>

          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src={`${base}assets/main/0013.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="prompt">A person sits at a wooden table in a warmly lit kitchen, joyfully eating a plate of steaming dumplings. The camera frames them from the waist up as they lift each dumpling with chopsticks, dipping it into sauce before taking a bite.</div>
          </div>

          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src={`${base}assets/main/0005.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="prompt">A person plays a handheld video game on a sunny balcony. The camera stays mid-frame as they lean forward in concentration, tap buttons rapidly, then suddenly cheer and pump a fist in victory.</div>
          </div>
        </div>
      </section>

      {/* High Resolution Examples - Horizontal Scrolling */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px] mt-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          Gallery
        </h3>
        <p className="section-description">
          Explore our gallery of diverse video generations showcasing various scenarios and characters. <em>Scroll horizontally to explore more examples.</em>
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
                    <source src={`${base}assets/gallery/0025.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person walks slowly through a modern museum space with high ceilings and soft natural light, stopping to appreciate minimal art pieces with curiosity and calm.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}assets/gallery/0007.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person enters a building through glass doors. The camera follows steadily from behind, capturing their full upper body and the sharp reflections in the glass.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}assets/gallery/0002.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person enthusiastically explains something to a friend across the table at a street-side cafe, gesturing with one hand and taking quick sips of coffee in between animated speech.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}assets/gallery/0026.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person waits at a crosswalk in an urban setting just after sunset, glancing at the traffic light and shifting their bag strap while colored street lights flicker subtly on their skin.</div>
              </div>
            </div>

            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}assets/gallery/0003.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person stands on a city balcony overlooking quiet streets at dusk. The camera starts at mid-torso level and slowly moves inward as they sip from a mug, their gaze shifting between the horizon and something below.</div>
              </div>
            </div>

            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}assets/gallery/0011.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person packs a hiking backpack, pulling items from the table and stuffing them inside. The camera follows at half-body level as they zip compartments, strap in a water bottle, and hoist the bag briefly to test the weight.</div>
              </div>
            </div>

            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}assets/gallery/0022.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A chef passionately tossing vegetables in a sizzling wok, their face glowing with concentration and pride as flames briefly flare up.</div>
              </div>
            </div>

            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}assets/gallery/1026.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A person rides a spinning swing at a colorful outdoor amusement park beneath a bright sky. The camera locks closely onto their face as the ride gains speed, subtly tilting and rotating with their motion. Their mouth opens in exhilaration, and their face shifts from excitement to laughter. They lift their chin slightly, adjust posture with a confident lean, and briefly close their eyes as the swing peaks. The blurred background spins with colorful banners and lights, enhancing the sensation of motion. The person's appearance remains tidy, with no distracting movement from hair.</div>
              </div>
            </div>

            
            

            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}assets/main/0023.mp4`} type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A musician playing a violin in a candlelit room, their face reflecting deep emotion and passion as they perform a heartfelt melody.</div>
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
          <p className="section-description">
            Given a single identity image, Lynx can generate diverse scenarios and expressions
            while maintaining the core identity characteristics.
            <em> Use the navigation buttons to explore different subjects.</em>
          </p>
        </div>

        <div className="video-scroll-container">
          {/* Navigation Controls */}
          <button className="scroll-indicator left" onClick={scrollDiverseLeft}>
            <ChevronLeft />
          </button>
          <button className="scroll-indicator right" onClick={scrollDiverseRight}>
            <ChevronRight />
          </button>

          {/* Scrollable Video Display */}
          <div className="video-scroll-wrapper" ref={diverseScrollRef}>
            {diverseVideos.map((video, index) => (
              <div key={index} className="video-scroll-item" style={{ width: '100%', flexShrink: 0 }}>
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src={`${base}${video.src}`} type="video/mp4" />
                  </video>
                </div>
              </div>
            ))}
          </div>

          {/* Video Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {diverseVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToVideo(index)}
                className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
              />
            ))}
          </div>
        </div>
      </section>


      {/* Performance Evaluation */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          Quantitative Evaluation
        </h3>
        <p className="section-description">
          Quantitative comparison demonstrates Lynx's superior performance across multiple evaluation metrics,
          achieving state-of-the-art results in identity preservation and overall video quality.
        </p>

        <div>
          {/* Merged Performance Table */}
          <div className="flex justify-center mb-8">
            <div className="overflow-x-auto w-full">
              <table className="bg-gray-900 border border-gray-700 rounded-lg text-base w-full max-w-none mx-auto" style={{width: '56.25%'}}>
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-5 text-center font-medium text-white border-r border-gray-700 text-base" rowSpan={2}>Model</th>
                    <th className="px-4 py-5 text-center font-medium text-white border-r border-gray-700 text-base" colSpan={3}>Face Resemblance</th>
                    <th className="px-4 py-5 text-center font-medium text-white border-r border-gray-700 text-base" colSpan={4}>Performance (Gemini-2.5-Pro)</th>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <th className="px-3 py-4 text-center font-medium text-white border-r border-gray-700 text-base">facexlib</th>
                    <th className="px-3 py-4 text-center font-medium text-white border-r border-gray-700 text-base">Insightface</th>
                    <th className="px-3 py-4 text-center font-medium text-white border-r border-gray-700 text-base">In-house</th>
                    <th className="px-3 py-4 text-center font-medium text-white border-r border-gray-700 text-base">Prompt Follow</th>
                    <th className="px-3 py-4 text-center font-medium text-white border-r border-gray-700 text-base">Aesthetic</th>
                    <th className="px-3 py-4 text-center font-medium text-white border-r border-gray-700 text-base">Motion</th>
                    <th className="px-3 py-4 text-center font-medium text-white text-base">Quality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="px-6 py-3 text-center text-[#999999] border-r border-gray-700 text-base">SkyReels-A2</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base"><span className="underline">0.715</span></td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base"><span className="underline">0.678</span></td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base"><span className="underline">0.725</span></td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.471</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.704</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.824</td>
                    <td className="px-3 py-3 text-center text-[#999999] text-base">0.870</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-6 py-3 text-center text-[#999999] border-r border-gray-700 text-base">VACE</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.594</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.548</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.615</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base"><span className="underline">0.691</span></td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base"><span className="underline">0.846</span></td>
                    <td className="px-3 py-3 text-center text-white font-bold border-r border-gray-700 text-base">0.851</td>
                    <td className="px-3 py-3 text-center text-[#999999] text-base"><span className="underline">0.935</span></td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-6 py-3 text-center text-[#999999] border-r border-gray-700 text-base">Phantom</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.664</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.659</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.689</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.690</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.825</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.828</td>
                    <td className="px-3 py-3 text-center text-[#999999] text-base">0.888</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-6 py-3 text-center text-[#999999] border-r border-gray-700 text-base">MAGREF</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.575</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.510</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.591</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.612</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.787</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.812</td>
                    <td className="px-3 py-3 text-center text-[#999999] text-base">0.886</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-6 py-3 text-center text-[#999999] border-r border-gray-700 text-base">Stand-In</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.611</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.576</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.634</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.582</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.807</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base">0.823</td>
                    <td className="px-3 py-3 text-center text-[#999999] text-base">0.926</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="px-6 py-3 text-center text-white font-medium border-r border-gray-700 text-base">Lynx (ours)</td>
                    <td className="px-3 py-3 text-center text-white font-bold border-r border-gray-700 text-base">0.779</td>
                    <td className="px-3 py-3 text-center text-white font-bold border-r border-gray-700 text-base">0.699</td>
                    <td className="px-3 py-3 text-center text-white font-bold border-r border-gray-700 text-base">0.781</td>
                    <td className="px-3 py-3 text-center text-white font-bold border-r border-gray-700 text-base">0.722</td>
                    <td className="px-3 py-3 text-center text-white font-bold border-r border-gray-700 text-base">0.871</td>
                    <td className="px-3 py-3 text-center text-[#999999] border-r border-gray-700 text-base"><span className="underline">0.837</span></td>
                    <td className="px-3 py-3 text-center text-white font-bold text-base">0.956</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Radar Chart */}
        <div className="mt-4">
          <div className="flex justify-center">
            <img
              src={`${base}assets/radar.png`}
              alt="Performance Radar Chart Comparison"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] py-20 mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        
        <div className="text-center space-y-8 relative z-10">
          <h4 className="text-lg font-medium">Research Team</h4>
          
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
          
          <div className="text-xs font-light text-[#999999] -mt-4 mb-4">
            *Equal Contribution
          </div>

          <div className="text-sm font-light text-[#999999]">
            Intelligent Creation, ByteDance
          </div>
          
          <div className="text-xs font-light text-[#666666] mt-8">
            Webpage design inspired by <a href="https://seaweed-apt.com/2" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors underline">Seaweed-APT2</a>
          </div>
        </div>
      </section>
    </div>
  );
}
