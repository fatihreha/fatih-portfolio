import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { useTheme } from '../context/ThemeContext';

// Dynamically import Leaflet for SSR compatibility
interface LeafletMapProps {
  center: [number, number];
  zoom: number;
  width: string;
  height: string;
}

const OpenStreetMap: React.FC<LeafletMapProps> = ({ center, zoom, width, height }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const { isDarkMode } = useTheme();
  const leafletLoaded = useRef(false);

  useEffect(() => {
    // Check for SSR
    if (typeof window === 'undefined') return;

    // Dynamically import Leaflet
    const initializeLeaflet = async () => {
      try {
        // Dynamic imports
        const L = (await import('leaflet')).default;
        const icon = (await import('leaflet/dist/images/marker-icon.png')).default;
        const iconShadow = (await import('leaflet/dist/images/marker-shadow.png')).default;

        // Fix for default icon
        const DefaultIcon = L.icon({
          iconUrl: icon,
          shadowUrl: iconShadow,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });
        
        L.Marker.prototype.options.icon = DefaultIcon;
        
        // Override Icon methods to add accessibility attributes
        if (!leafletLoaded.current) {
          // @ts-ignore - Type tanımlarında olmayan metodlara erişim
          const originalIconCreateIcon = L.Icon.Default.prototype._createIcon;
          // @ts-ignore
          const originalIconCreateShadow = L.Icon.Default.prototype._createShadow;
          
          // @ts-ignore
          L.Icon.Default.prototype._createIcon = function(oldIcon) {
            // @ts-ignore
            const icon = originalIconCreateIcon.call(this, oldIcon);
            if (icon) {
              icon.alt = 'Map marker icon';
            }
            return icon;
          };
          
          // @ts-ignore
          L.Icon.Default.prototype._createShadow = function(oldIcon) {
            // @ts-ignore
            const shadow = originalIconCreateShadow.call(this, oldIcon);
            if (shadow) {
              shadow.alt = 'Map marker shadow';
            }
            return shadow;
          };
          
          // Add alt attributes to tile images
          // @ts-ignore
          const originalTileLayerCreateTile = L.TileLayer.prototype.createTile;
          // @ts-ignore
          L.TileLayer.prototype.createTile = function(coords, done) {
            // @ts-ignore
            const tile = originalTileLayerCreateTile.call(this, coords, done);
            if (tile) {
              (tile as HTMLImageElement).alt = 'Map tile image';
            }
            return tile;
          };
          
          leafletLoaded.current = true;
        }

        // Initialize the map if it doesn't exist yet
        if (mapRef.current && !mapInstanceRef.current) {
          const map = L.map(mapRef.current).setView(center, zoom);
          mapInstanceRef.current = map;

          // Add tile layer based on theme
          const tileLayer = isDarkMode
            ? L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                maxZoom: 19
              })
            : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19
              });

          tileLayer.addTo(map);

          // Add a marker at the specified location
          const marker = L.marker(center).addTo(map);
          marker.bindPopup('Üsküdar, Istanbul').openPopup();
        }
        
        // Update the map theme when dark mode changes
        if (mapInstanceRef.current) {
          const map = mapInstanceRef.current;
          
          // Remove existing tile layers
          map.eachLayer((layer: any) => {
            if (layer instanceof L.TileLayer) {
              map.removeLayer(layer);
            }
          });

          // Add the appropriate tile layer based on theme
          const tileLayer = isDarkMode
            ? L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                maxZoom: 19
              })
            : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19
              });

          tileLayer.addTo(map);
        }
      } catch (error) {
        console.error('Error loading Leaflet:', error);
      }
    };

    initializeLeaflet();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, isDarkMode]); // Added isDarkMode to dependencies

  return (
    <div 
      ref={mapRef} 
      style={{ width, height }} 
      className="rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700"
    />
  );
};

export default OpenStreetMap;