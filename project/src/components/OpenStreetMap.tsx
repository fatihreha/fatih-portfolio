import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTheme } from '../context/ThemeContext';

interface OpenStreetMapProps {
  center: [number, number];
  zoom: number;
  width: string;
  height: string;
}

const OpenStreetMap: React.FC<OpenStreetMapProps> = ({ center, zoom, width, height }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView(center, zoom);
      mapInstanceRef.current = map;

      // Add tile layer - use a dark theme if dark mode is enabled
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

      // Clean up on unmount
      return () => {
        map.remove();
        mapInstanceRef.current = null;
      };
    }
  }, [center, zoom]);

  // Update the map theme when dark mode changes
  useEffect(() => {
    if (mapInstanceRef.current) {
      const map = mapInstanceRef.current;
      
      // Remove existing tile layers
      map.eachLayer((layer) => {
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
  }, [isDarkMode]);

  return (
    <div 
      ref={mapRef} 
      style={{ width, height }} 
      className="rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700"
    />
  );
};

export default OpenStreetMap;