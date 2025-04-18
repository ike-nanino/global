"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";

// Add marker icons
const originIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const destinationIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const currentLocationIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type Coords = {
  lat: number;
  lon: number;
};

type Props = {
  from: Coords;
  to: Coords;
  current?: Coords | null;
};

type AnimateMapProps = Props & {
  routeData: LatLngExpression[];
};

function AnimateMap({ from, to, current, routeData }: AnimateMapProps) {
  const map = useMap();

  useEffect(() => {
    if (routeData && routeData.length > 0) {
      // Create bounds from the route data
      const bounds = routeData.map(point => [point[0], point[1]]);
      map.fitBounds(bounds);
    } else {
      // Fallback to original points if no route data
      const points: LatLngExpression[] = [
        [from.lat, from.lon],
        [to.lat, to.lon],
      ];
      
      if (current) {
        points.push([current.lat, current.lon]);
      }
      
      map.fitBounds(points);
    }
  }, [from, to, current, routeData, map]);

  return null;
}

export default function ShipmentMap({ from, to, current }: Props) {
  const [routeData, setRouteData] = useState<LatLngExpression[]>([]);
  const [completedRoute, setCompletedRoute] = useState<LatLngExpression[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [zoomLevel, setZoomLevel] = useState(5);

  useEffect(() => {
    // Make sure we have valid coordinates before fetching the route
    if (!from || !to || !from.lat || !from.lon || !to.lat || !to.lon) {
      setIsLoading(false);
      setError("Invalid coordinates");
      return;
    }

    // Generate realistic route with zigzags following road patterns
    const generateRealisticRoute = () => {
      try {
        setIsLoading(true);
        
        // Generate a realistic zigzag route following approximate road paths
        const roadRoute = generateRoadStyleRoute();
        setRouteData(roadRoute);
        
        // Calculate completed portion of the route
        if (current) {
          calculateCompletedRoute(roadRoute);
        } else {
          // If no current position, default to 60% of the route
          const completionPoint = Math.floor(roadRoute.length * 0.6);
          setCompletedRoute(roadRoute.slice(0, completionPoint));
        }
      } catch (err) {
        console.error("Error generating route:", err);
        setError("Could not generate route");
      } finally {
        setIsLoading(false);
      }
    };
    
    generateRealisticRoute();
  }, [from, to, current]);
  
  const calculateCompletedRoute = (fullRoute: LatLngExpression[]) => {
    if (!current || fullRoute.length === 0) return;
    
    // Find the point on the route closest to current location
    let closestPointIndex = 0;
    let closestDistance = Number.MAX_VALUE;
    
    fullRoute.forEach((point, index) => {
      // Extract lat/lon from the point
      const pointLat = Array.isArray(point) ? Number(point[0]) : 0;
      const pointLon = Array.isArray(point) ? Number(point[1]) : 0;
      
      // Calculate distance to current location
      const distance = Math.sqrt(
        Math.pow(current.lat - pointLat, 2) + 
        Math.pow(current.lon - pointLon, 2)
      );
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestPointIndex = index;
      }
    });
    
    // Set completed route to portion up to closest point
    setCompletedRoute(fullRoute.slice(0, closestPointIndex + 1));
  };
  
  // Generate a realistic road-like route with zigzags
  const generateRoadStyleRoute = () => {
    // Define major waypoints (cities or major junction points)
    const majorWaypoints: LatLngExpression[] = [];
    
    // New York to Los Angeles route waypoints (approximate major cities along the way)
    if (from.lat === 40.7128 && to.lat === 34.0522) {
      // This approximates a realistic cross-country route
      majorWaypoints.push([40.7128, -74.0060]); // New York, NY
      majorWaypoints.push([39.9526, -75.1652]); // Philadelphia, PA
      majorWaypoints.push([39.2904, -76.6122]); // Baltimore, MD
      majorWaypoints.push([39.7684, -86.1581]); // Indianapolis, IN
      majorWaypoints.push([38.6270, -90.1994]); // St. Louis, MO
      majorWaypoints.push([39.0997, -94.5786]); // Kansas City, MO
      majorWaypoints.push([39.7392, -104.9903]); // Denver, CO
      majorWaypoints.push([38.8026, -116.4194]); // Central Nevada
      majorWaypoints.push([36.1699, -115.1398]); // Las Vegas, NV
      majorWaypoints.push([34.0522, -118.2437]); // Los Angeles, CA
    } else {
      // Generic waypoints if not the NY to LA route
      majorWaypoints.push([from.lat, from.lon]);
      
      // Add some intermediate waypoints based on direction
      const latDiff = to.lat - from.lat;
      const lonDiff = to.lon - from.lon;
      const distance = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
      
      // Add more waypoints for longer distances
      const numWaypoints = Math.max(3, Math.min(8, Math.ceil(distance * 100)));
      
      for (let i = 1; i < numWaypoints; i++) {
        const ratio = i / numWaypoints;
        const baseLat = from.lat + latDiff * ratio;
        const baseLon = from.lon + lonDiff * ratio;
        
        // Add some randomness to make it look like real roads with deviations
        const deviation = distance * 0.03;
        const waypointLat = baseLat + (Math.random() - 0.5) * deviation;
        const waypointLon = baseLon + (Math.random() - 0.5) * deviation;
        
        majorWaypoints.push([waypointLat, waypointLon]);
      }
      
      majorWaypoints.push([to.lat, to.lon]);
    }
    
    // Create detailed path with small zigzags between major waypoints
    const detailedPath: LatLngExpression[] = [];
    
    // Connect each pair of major waypoints with a realistic zigzag path
    for (let i = 0; i < majorWaypoints.length - 1; i++) {
      const startPoint = majorWaypoints[i];
      const endPoint = majorWaypoints[i + 1];
      
      // Extract coordinates
      const startLat = Array.isArray(startPoint) ? Number(startPoint[0]) : 0;
      const startLon = Array.isArray(startPoint) ? Number(startPoint[1]) : 0;
      const endLat = Array.isArray(endPoint) ? Number(endPoint[0]) : 0;
      const endLon = Array.isArray(endPoint) ? Number(endPoint[1]) : 0;
      
      // Calculate segment distance
      const segLatDiff = endLat - startLat;
      const segLonDiff = endLon - startLon;
      const segDistance = Math.sqrt(segLatDiff * segLatDiff + segLonDiff * segLonDiff);
      
      // Add more detail points for longer segments
      const segPoints = Math.max(5, Math.ceil(segDistance * 200));
      
      // Create zigzag path between these two points
      if (i === 0) {
        detailedPath.push([startLat, startLon]); // Add starting point
      }
      
      // Calculate perpendicular vector for zigzag
      const perpLat = -segLonDiff;
      const perpLon = segLatDiff;
      const perpNorm = Math.sqrt(perpLat * perpLat + perpLon * perpLon);
      
      // Previous deviation direction (to create consistent zigzags)
      let prevDeviation = 0;
      
      for (let j = 1; j <= segPoints; j++) {
        const ratio = j / segPoints;
        const baseLat = startLat + segLatDiff * ratio;
        const baseLon = startLon + segLonDiff * ratio;
        
        // Scale zigzag amplitude based on segment distance
        const zigzagScale = segDistance * 0.02; 
        
        // Alternate zigzag direction
        const zigzagFactor = Math.sin(ratio * Math.PI * 8) * zigzagScale;
        
        // Apply zigzag perpendicular to route direction
        const zigzagLat = baseLat + (perpLat / perpNorm) * zigzagFactor;
        const zigzagLon = baseLon + (perpLon / perpNorm) * zigzagFactor;
        
        // Add small random noise to simulate road irregularities
        const noiseFactor = segDistance * 0.002;
        const finalLat = zigzagLat + (Math.random() - 0.5) * noiseFactor;
        const finalLon = zigzagLon + (Math.random() - 0.5) * noiseFactor;
        
        detailedPath.push([finalLat, finalLon]);
        
        prevDeviation = zigzagFactor;
      }
    }
    
    return detailedPath;
  };
  
  // Handle zoom level changes
  const handleZoomEnd = (e: any) => {
    const newZoom = e.target.getZoom();
    setZoomLevel(newZoom);
  };
  
  // Default position for the map
  const defaultPosition: LatLngExpression = [from.lat, from.lon];

  return (
    <MapContainer 
      center={defaultPosition} 
      zoom={5} 
      scrollWheelZoom={true} 
      className="h-full w-full z-0"
      whenCreated={(mapInstance) => {
        mapInstance.on('zoomend', handleZoomEnd);
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      
      {/* Display loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
          <div className="text-lg">Loading route data...</div>
        </div>
      )}
      
      {/* Display error message if any */}
      {error && !isLoading && (
        <div className="absolute bottom-4 left-4 bg-red-100 text-red-700 px-4 py-2 rounded z-10">
          {error}
        </div>
      )}
      
      {/* Origin marker */}
      <Marker position={[from.lat, from.lon]} icon={originIcon}>
        <div>Origin: {from.lat}, {from.lon}</div>
      </Marker>
      
      {/* Destination marker */}
      <Marker position={[to.lat, to.lon]} icon={destinationIcon}>
        <div>Destination: {to.lat}, {to.lon}</div>
      </Marker>
      
      {/* Current location marker if available */}
      {current && (
        <Marker position={[current.lat, current.lon]} icon={currentLocationIcon}>
          <div>Current: {current.lat}, {current.lon}</div>
        </Marker>
      )}
      
      {/* Full route path - dashed line for remaining part */}
      {routeData.length > 0 && (
        <Polyline 
          positions={routeData} 
          color="gray" 
          weight={zoomLevel > 8 ? 3 : 2} 
          dashArray="5,10" 
          opacity={0.6}
        />
      )}
      
      {/* Completed portion of route - solid blue line */}
      {completedRoute.length > 0 && (
        <Polyline 
          positions={completedRoute} 
          color="blue" 
          weight={zoomLevel > 8 ? 4 : 3}
          opacity={0.9}
        />
      )}
      
      <AnimateMap from={from} to={to} current={current} routeData={routeData} />
    </MapContainer>
  );
}