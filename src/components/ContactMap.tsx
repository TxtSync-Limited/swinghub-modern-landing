import React from 'react';
import worldMapBackground from '@/assets/world-map-background.jpg';

const ContactMap = () => {

  return (
    <div className="relative w-full h-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${worldMapBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-12 pointer-events-none">
        <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 max-w-md">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Connect with SwingHub
          </h3>
          <p className="text-muted-foreground mb-6">
            Our community spans the globe, bringing together like-minded individuals who value connection, exploration, and authentic relationships.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>🌍 Global community</p>
            <p>💬 24/7 support available</p>
            <p>🔒 Privacy-first approach</p>
            <p>✨ Always improving</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;