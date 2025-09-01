import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ContactMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // You'll need to add your Mapbox token here
    // Get it from https://mapbox.com/ -> Account -> Tokens
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3dpbmdodWIiLCJhIjoiY2x0ZXN0aW5nIn0.example'; // Replace with your token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      projection: 'globe',
      zoom: 2,
      center: [0, 20],
      pitch: 0,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(30, 30, 50)',
        'high-color': 'rgb(50, 50, 80)',
        'horizon-blend': 0.3,
      });
    });

    // Add some markers for global presence
    const locations = [
      { lng: -74.006, lat: 40.7128, name: 'New York' },
      { lng: -0.1276, lat: 51.5074, name: 'London' },
      { lng: 2.3522, lat: 48.8566, name: 'Paris' },
      { lng: 139.6917, lat: 35.6895, name: 'Tokyo' },
      { lng: 151.2093, lat: -33.8688, name: 'Sydney' },
    ];

    locations.forEach(location => {
      new mapboxgl.Marker({
        color: '#8B5CF6',
        scale: 0.8
      })
        .setLngLat([location.lng, location.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<div class="text-sm font-medium">${location.name}</div>`))
        .addTo(map.current!);
    });

    // Rotation animation
    const secondsPerRevolution = 180;
    let userInteracting = false;

    function spinGlobe() {
      if (!map.current) return;
      
      const zoom = map.current.getZoom();
      if (!userInteracting && zoom < 3) {
        const distancePerSecond = 360 / secondsPerRevolution;
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', () => { spinGlobe(); });

    spinGlobe();

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-background/20" />
      
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