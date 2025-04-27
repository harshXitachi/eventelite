import { ReactNode, useEffect, useRef } from "react";

interface VideoBackgroundProps {
  videoUrl: string;
  children: ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
  fallbackImageUrl?: string;
}

const VideoBackground = ({ 
  videoUrl, 
  children, 
  overlay = true, 
  overlayOpacity = 0.5,
  fallbackImageUrl
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="video-container relative overflow-hidden">
      {fallbackImageUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${fallbackImageUrl})` }}
        />
      )}
      
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImageUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {overlay && (
        <div 
          className="absolute inset-0 bg-black z-1"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
