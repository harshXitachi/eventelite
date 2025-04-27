import React, { ReactNode } from "react";

interface MasonryProps {
  children: ReactNode;
  columns?: number;
  spacing?: string;
  className?: string;
}

const Masonry = ({ 
  children, 
  columns = 3, 
  spacing = "1.5em", 
  className = "" 
}: MasonryProps) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div 
      className={`masonry ${className}`}
      style={{ 
        columnCount: columns, 
        columnGap: spacing 
      }}
    >
      {childrenArray.map((child, index) => (
        <div key={index} className="masonry-item">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
