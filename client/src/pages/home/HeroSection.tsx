import VideoBackground from "@/components/ui/video-background";
import GradientButton from "@/components/ui/gradient-button";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen max-h-[800px]">
      <VideoBackground 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-hall-for-an-event-6652-large.mp4"
        fallbackImageUrl="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        overlayOpacity={0.7}
      >
        <div className="h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 fade-in-delay-1">
            Transforming Moments into Memories
          </h1>
          
          <p className="font-montserrat text-white text-lg md:text-xl max-w-3xl mb-8 fade-in-delay-2">
            Luxury event management for corporate and personal celebrations that leave a lasting impression
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 fade-in-delay-3">
            <GradientButton 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Plan Your Event
            </GradientButton>
            
            <GradientButton 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </GradientButton>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#intro" className="text-white text-2xl focus:outline-none" aria-label="Scroll down">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </VideoBackground>
    </section>
  );
};

export default HeroSection;
