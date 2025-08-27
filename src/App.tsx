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
            <strong>Lynx:</strong> High-Fidelity Identity-Preserving Video Generation from Single Images
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
            A model that supports multi-shot video generation from both text and image. It achieves breakthroughs in semantic understanding and prompt following, and can create 1080p videos with smooth motion, rich details, and cinematic aesthetics.
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
            Our method maintains facial features, expressions, and identity consistency throughout the generated video sequence, 
            enabling applications in digital avatars, content creation, and interactive media. <em>Hover over videos to see the generation prompts.</em>
          </p>
        </div>
        
        <div className="video-grid-large">
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_synthesis_00002_0019-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A professional businesswoman with confident posture walking through a modern corporate office, wearing an elegant navy blue suit. The camera follows her as she moves past glass conference rooms and contemporary furniture, with warm lighting creating a sophisticated atmosphere.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_diverse_05_Caucasian_0005-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A young artist painting outdoors in a serene park setting, wearing casual clothing and focused intently on their canvas. Golden hour lighting filters through the trees, creating beautiful shadows as they carefully apply brushstrokes to capture the natural scenery.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_diverse_20_Brown_0012-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A skilled chef in a bustling restaurant kitchen, expertly preparing a gourmet dish with precise movements. Steam rises from the pan as they add ingredients, their face showing concentration and passion for culinary artistry under the bright kitchen lights.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_diverse_12_Asian_0001-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A musician performing on stage with dramatic stage lighting, passionately playing guitar in front of an enthusiastic crowd. The spotlights create dynamic shadows and highlights, capturing the energy and emotion of the live performance.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_diverse_06_African_American_0001-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A fitness trainer leading an outdoor workout session in a beautiful park, demonstrating exercises with enthusiasm and energy. The morning sunlight creates a vibrant atmosphere as they motivate and guide their students through the routine.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container-large">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_celebrity_00003_0006-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt-large">A scientist working in a state-of-the-art laboratory, carefully conducting experiments with advanced equipment. The clean, sterile environment is illuminated by bright fluorescent lights as they analyze samples and record their findings with methodical precision.</div>
          </div>
        </div>
      </section>

      {/* High Resolution Examples - Horizontal Scrolling */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          High-Resolution Generation
        </h3>
        <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
          Our model scales to high-resolution video generation, producing detailed results at 1024x1024 resolution 
          while maintaining identity consistency and temporal coherence across extended sequences. <em>Scroll horizontally to explore more high-resolution examples.</em>
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
                    <source src="assets/converted/concat_celebrity_00003_0012-fr121-s42.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A fashion model gracefully walking down a runway during a high-end fashion show, wearing an elegant evening gown. The sophisticated lighting and camera angles capture every detail of the fabric's texture and movement, showcasing the garment's flowing silhouette in stunning high resolution.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/converted/concat_diverse_13_Asian_0004-fr121-s42.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A portrait photographer in their studio, adjusting professional lighting equipment and carefully positioning a subject for the perfect shot. The controlled environment allows for precise capture of facial details and expressions in stunning high resolution with exceptional clarity.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/converted/concat_diverse_13_Asian_0012-fr121-s42.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A master watchmaker meticulously assembling intricate timepieces in their workshop, with every detail of their focused craftsmanship captured in ultra-high definition. The precision tools and delicate movements are rendered with exceptional visual fidelity and identity preservation.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/converted/concat_celebrity_00003_0001-fr121-s42.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A luxury car designer reviewing blueprints and clay models in a state-of-the-art design studio, surrounded by cutting-edge automotive technology. Every facial expression and gesture is captured with remarkable detail and consistency throughout the high-resolution sequence.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/converted/concat_diverse_20_Brown_0019-fr121-s42.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">An architectural specialist conducting detailed building inspections, examining structural elements with professional precision. The high-resolution capture showcases both the technical expertise and the consistent identity preservation across complex environmental conditions.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/converted/concat_diverse_13_Asian_0005-fr121-s42.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A master sommelier conducting an exclusive wine tasting session in an elegant cellar environment, demonstrating refined palate expertise. The high-resolution footage captures subtle facial expressions and professional techniques with exceptional visual clarity and identity consistency.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/converted/concat_celebrity_00003_0014-fr121-s42.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A renowned neurosurgeon preparing for a complex medical procedure, reviewing imaging data and surgical plans with intense concentration. The ultra-high definition capture preserves every detail of their professional expertise while maintaining perfect identity consistency throughout.</div>
              </div>
            </div>
            
            <div className="video-scroll-item" style={{ width: '480px' }}>
              <div className="prompt-wrap">
                <div className="video-container">
                  <video muted loop autoPlay playsInline>
                    <source src="assets/converted/concat_celebrity_00003_0017-fr121-s42.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="prompt">A professional cinematographer operating advanced camera equipment during a high-budget film production, orchestrating complex shots with artistic vision. The high-resolution video showcases technical mastery while preserving facial identity with remarkable precision and clarity.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          Methodology
        </h3>
        <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
          Lynx employs a novel <strong className="font-bold text-white">Identity-Preserving Diffusion Architecture</strong> that combines 
          facial encoding, temporal consistency modules, and advanced attention mechanisms to maintain 
          identity features while generating diverse and natural video content.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Identity Encoder</h4>
            <p className="text-base font-light text-[#999999] leading-relaxed">
              A specialized facial recognition network extracts identity embeddings from the input image, 
              which are then injected into the diffusion process at multiple scales to ensure consistent 
              identity preservation throughout generation.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Temporal Consistency</h4>
            <p className="text-base font-light text-[#999999] leading-relaxed">
              Our temporal attention mechanism ensures smooth transitions between frames while maintaining 
              the integrity of facial features and expressions, resulting in natural-looking video sequences.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          Comparison with Baseline Methods
        </h3>
        <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
          We compare Lynx against state-of-the-art identity-preserving video generation methods. 
          Our approach demonstrates superior identity consistency and video quality across diverse scenarios.
        </p>
        
        <div className="text-center text-[#999999] text-sm py-4 grid grid-cols-3 gap-4 mb-4">
          <div>Baseline Method</div>
          <div>Previous SOTA</div>
          <div>Lynx (Ours)</div>
        </div>
        
        <div className="video-grid video-grid-3">
          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_diverse_20_Brown_0006-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt">Baseline: A person walking in an urban environment, showing inconsistent facial features and identity drift over time due to limited identity preservation capabilities.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_synthesis_00002_0019-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt">Previous SOTA: A person in a professional setting with improved identity consistency compared to baseline, but still showing some facial feature variations and temporal inconsistencies.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src="assets/converted/concat_diverse_05_Caucasian_0005-fr121-s42.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt">Lynx (Ours): A person engaged in dynamic activities while maintaining perfect identity consistency and natural expressions throughout the entire video sequence, demonstrating superior preservation quality.</div>
          </div>
        </div>
      </section>

      {/* Diverse Generation */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          Diverse Generation from Single Identity
        </h3>
        <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
          Given a single identity image, Lynx can generate diverse scenarios and expressions 
          while maintaining the core identity characteristics. This enables rich content creation 
          from minimal input requirements.
        </p>
        
        <div className="video-grid video-grid-3">
          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt">Same identity: A joyful person laughing heartily at a comedy show, with genuine expressions of happiness and delight illuminated by warm stage lighting, showing natural facial movements and authentic emotions.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt">Same identity: A contemplative person deeply focused while reading a book in a quiet library, displaying thoughtful concentration and subtle intellectual engagement with the material they're studying.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container">
              <video muted loop autoPlay playsInline>
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_3mb.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="prompt">Same identity: An energetic person enthusiastically giving a presentation to a large audience, showing confident gestures and animated expressions while maintaining their distinctive facial characteristics throughout the performance.</div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          Limitations and Future Work
        </h3>
        <p className="text-base font-light text-[#999999] leading-relaxed mb-8">
          While Lynx achieves state-of-the-art identity preservation, certain limitations remain. 
          Extreme pose variations and complex lighting conditions can occasionally affect identity consistency. 
          Future work will focus on improving robustness across diverse scenarios and extending to full-body generation.
        </p>
        
        <div className="video-grid video-grid-3">
          <div className="prompt-wrap">
            <div className="video-container">
              <ImageWithFallback 
                src="/placeholder-challenging-1.jpg" 
                alt="Challenging case 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prompt">Challenging case: Person in extreme profile view with dramatic head rotation, where identity preservation becomes more difficult due to limited facial feature visibility and unconventional camera angles.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container">
              <ImageWithFallback 
                src="/placeholder-challenging-2.jpg" 
                alt="Challenging case 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prompt">Challenging case: Person under harsh backlighting and complex shadow patterns, where extreme lighting conditions can interfere with identity feature recognition and consistency maintenance.</div>
          </div>
          
          <div className="prompt-wrap">
            <div className="video-container">
              <ImageWithFallback 
                src="/placeholder-challenging-3.jpg" 
                alt="Challenging case 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prompt">Challenging case: Person with partial face occlusion from objects or hands, making identity preservation more complex when key facial features are temporarily hidden or obscured from view.</div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] mb-[100px]">
        <h3 className="text-xl font-semibold py-5 mb-5">
          Conclusion
        </h3>
        <p className="text-base font-light text-[#999999] leading-relaxed">
          Lynx represents a significant advancement in identity-preserving video generation, 
          offering high-fidelity results with exceptional identity consistency. Our method opens 
          new possibilities for personalized content creation, digital avatars, and interactive media applications.
        </p>
      </section>

      {/* Footer */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-[10%] py-20 mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        
        <div className="text-center space-y-8 relative z-10">
          <h4 className="text-lg font-medium">Research Team</h4>
          
          <div className="space-y-2 text-sm font-light">
            <div>Name1</div>
            <div>Name2</div>
            <div>Name3</div>
            <div>Name4</div>
            <div>Name5</div>
            <div>Name6</div>
          </div>
          
          <div className="flex justify-center pt-8">
            <Button variant="outline" className="border-border hover:bg-white hover:text-black transition-colors px-4 py-2 h-auto">
              <FileText className="w-4 h-4 mr-2" />
              Read More Papers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}