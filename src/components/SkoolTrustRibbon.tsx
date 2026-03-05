import React from "react";

const SkoolTrustRibbon: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 overflow-hidden pointer-events-none w-32 h-32">
      <div 
        className="absolute bottom-[30px] -right-[40px] transform -rotate-45 text-white font-bold py-1 w-[170px] text-center shadow-lg border-t-2 border-[#c5b591]"
        style={{ backgroundColor: '#B3A077' }} // Muted Gold / Trust Ribbon Tan
      >
        <span className="text-[10px] uppercase tracking-wider block leading-none opacity-90 mb-[1px]">Powered by</span>
        <span className="text-base tracking-wide leading-none font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
          <span style={{ color: '#3B82F6' }}>S</span>
          <span style={{ color: '#EF4444' }}>k</span>
          <span style={{ color: '#FACC15' }}>o</span>
          <span style={{ color: '#22C55E' }}>o</span>
          <span style={{ color: '#3B82F6' }}>l</span>
        </span>
      </div>
    </div>
  );
};

export default SkoolTrustRibbon;
