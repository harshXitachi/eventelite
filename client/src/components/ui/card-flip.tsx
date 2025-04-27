import { ReactNode } from "react";

interface CardFlipProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

const CardFlip = ({ front, back, className = "" }: CardFlipProps) => {
  return (
    <div className={`service-card ${className}`}>
      <div className="card-inner">
        <div className="card-front bg-white shadow-lg rounded-lg overflow-hidden">
          {front}
        </div>
        <div className="card-back bg-gradient-purple-blue text-white p-8 flex flex-col justify-center">
          {back}
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
