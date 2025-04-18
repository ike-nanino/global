"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Search, Truck, Box, MapPin, Calendar, Clock, Info, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner"


// Dynamic import to avoid SSR issues with the map
const ShipmentMap = dynamic(() => import("@/components/ShipmentMap"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">Loading map...</div>
});

// Types for coordinates and shipment data
type Coords = {
  lat: number;
  lon: number;
};

type TimelineEvent = {
  location: string;
  status: string;
  date: string;
  time: string;
  completed: boolean;
};

type ShipmentData = {
  consignmentNumber: string;
  status: string;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  currentLocation: string;
  weight: string;
  carrier: string;
  type: string;
  fromCoords: Coords | null;
  toCoords: Coords | null;
  currentCoords: Coords | null;
  timeline: TimelineEvent[];
};

// Pre-defined coordinates for US locations to avoid API calls that might fail
const locationCoordinates = {
  "New York, NY": { lat: 40.7128, lon: -74.0060 },
  "Chicago, IL": { lat: 41.8781, lon: -87.6298 },
  "Denver, CO": { lat: 39.7392, lon: -104.9903 },
  "Las Vegas, NV": { lat: 36.1699, lon: -115.1398 },
  "Los Angeles, CA": { lat: 34.0522, lon: -118.2437 }
};

// Valid tracking number patterns for testing
const validTrackingNumbers = ["USR98765432"];

// Mock data for demonstration - US road route
const mockShipmentData: ShipmentData = {
  consignmentNumber: "USR98765432",
  status: "In Transit",
  estimatedDelivery: "April 24, 2025",
  origin: "New York, NY",
  destination: "Los Angeles, CA",
  currentLocation: "Denver, CO",
  weight: "320 lbs",
  carrier: "US Freight Express",
  type: "Road Freight",
  fromCoords: null,
  toCoords: null,
  currentCoords: null,
  timeline: [
    { location: "New York, NY", status: "Picked up", date: "April 15, 2025", time: "8:30 AM", completed: true },
    { location: "Chicago, IL", status: "Transfer hub processing", date: "April 17, 2025", time: "2:15 PM", completed: true },
    { location: "Denver, CO", status: "In transit", date: "April 20, 2025", time: "10:45 AM", completed: true },
    { location: "Las Vegas, NV", status: "Out for delivery", date: "April 22, 2025", time: "7:30 AM", completed: false },
    { location: "Los Angeles, CA", status: "Expected delivery", date: "April 24, 2025", time: "By 5:00 PM", completed: false }
  ]
};

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    setError("");
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      if (trackingNumber.trim() === "") {
        setError("Please enter a tracking number");
        setShipmentData(null);
        setIsLoading(false);
        
        toast.error("Invalid Input", {
          description: "Please enter a tracking number to search.",
          duration: 3000,
        });
        return;
      }
      
      // Check if tracking number exists in our valid list
      if (!validTrackingNumbers.includes(trackingNumber.trim())) {
        setError("");
        setShipmentData(null);
        setIsLoading(false);
        
        toast.error("Tracking Number Not Found", {
          description: `We couldn't find any shipment with tracking number: ${trackingNumber}`,
          duration: 3000,
        });
        return;
      }
      
      // Use mock data with pre-defined coordinates
      const data = {
        ...mockShipmentData,
        fromCoords: locationCoordinates[mockShipmentData.origin],
        toCoords: locationCoordinates[mockShipmentData.destination],
        currentCoords: locationCoordinates[mockShipmentData.currentLocation]
      };
      
      setShipmentData(data);
      setMapLoaded(true);
      setIsLoading(false);
      
      toast.success("Shipment Found",{ 
        description: "Tracking information has been loaded successfully.",
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-8">Track Your Shipment</h1>
      
      {/* Search Form */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Enter your tracking number (try USR98765432, TEST123456)"
            className="pl-10 w-full"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <Button 
          onClick={handleSearch} 
          disabled={isLoading}
          className="px-6"
        >
          {isLoading ? "Searching..." : "Track"}
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* No Results Message */}
      {!isLoading && !error && trackingNumber && !shipmentData && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center mb-6">
          <div className="flex justify-center mb-4">
            <Info className="text-gray-400" size={48} />
          </div>
          <h2 className="text-xl font-medium mb-2">No Shipment Found</h2>
          <p className="text-gray-500">
            We couldn&apos;t find any shipment with tracking number: <strong>{trackingNumber}</strong><br />
            Please verify the tracking number and try again.
          </p>
        </div>
      )}

      {/* Shipment Results */}
      {shipmentData && (
        <div className="space-y-6">
          {/* Status Overview Card */}
          <Card className="overflow-hidden border-t-4 border-t-blue-500">
            <CardHeader className="bg-gray-50">
              <div className="flex justify-between items-center">
                <CardTitle>Shipment {shipmentData.consignmentNumber}</CardTitle>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {shipmentData.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-gray-500" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Estimated Delivery</p>
                    <p className="font-medium">{shipmentData.estimatedDelivery}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-gray-500" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Current Location</p>
                    <p className="font-medium">{shipmentData.currentLocation}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Box className="text-gray-500" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Weight</p>
                    <p className="font-medium">{shipmentData.weight}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="text-gray-500" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Carrier</p>
                    <p className="font-medium">{shipmentData.carrier}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map View */}
          {shipmentData.fromCoords && shipmentData.toCoords && (
            <Card>
              <CardHeader>
                <CardTitle>Shipment Route Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] w-full rounded-lg overflow-hidden">
                  <ShipmentMap 
                    from={shipmentData.fromCoords} 
                    to={shipmentData.toCoords} 
                    current={shipmentData.currentCoords}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tracking Animation */}
          <Card>
            <CardHeader>
              <CardTitle>Shipment Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden">
                {/* Static blue filled progress */}
                <div className="relative h-full bg-blue-600 rounded-full" style={{ width: "60%" }}>
                  {/* Shimmer animation inside the blue part */}
                  <div className="absolute top-0 left-0 h-full w-full shimmer-overlay"></div>
                </div>
              </div>

              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{shipmentData.origin}</span>
                <span>{shipmentData.destination}</span>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Tracking Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {shipmentData.timeline.map((event, index) => (
                  <div key={index} className="flex">
                    {/* Status Indicator */}
                    <div className="flex flex-col items-center mr-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${event.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                        {event.completed ? (
                          <CheckCircle size={16} />
                        ) : (
                          <Clock size={16} />
                        )}
                      </div>
                      {index < shipmentData.timeline.length - 1 && (
                        <div className={`w-0.5 h-16 ${event.completed ? 'bg-green-200' : 'bg-gray-200'}`}></div>
                      )}
                    </div>
                    
                    {/* Event Details */}
                    <div className="pb-6">
                      <p className="font-medium">{event.status}</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                      <p className="text-xs text-gray-400">{event.date} • {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Toast container */}
      {/* <Toaster /> */}
    </div>
  );
}