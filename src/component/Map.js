// import * as React from "react";
// import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";
// import "maplibre-gl/dist/maplibre-gl.css";
// import Sidebar from "./sidebar";
// import Navbar from "./navbar";

// export default function MapTilerHybrid() {
//   const position = { lat: 18.5629, lng: 73.8077 }; // Pune, India
//   const apiKey = "wEpmcRj1KN9XZDzWXibE"; // Your API Key

//   return (
//     <div className="dashboard-container d-flex">
//       {/* Sidebar */}
//       <Sidebar />
//       {/* Sidebar end here */}
//       {/* Main Content */}
//       <div className="main-content flex-grow-1">
//         {/* Header */}
//         <Navbar />
//         {/* Header end  here */}
//         {/* Content */}
//         <div className="content p-4">
//           <div style={{ height: "100vh", width: "100%" }}>
//             <Map
//               initialViewState={{
//                 longitude: position.lng,
//                 latitude: position.lat,
//                 zoom: 16,
//               }}
//               style={{ width: "100%", height: "100%" }}
//               mapStyle={`https://api.maptiler.com/maps/hybrid/style.json?key=${apiKey}`}
//             >
//               <NavigationControl position="top-right" />
//               <Marker
//                 longitude={position.lng}
//                 latitude={position.lat}
//                 color="green"
//               />
//             </Map>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

// Set Pune coordinates
const position = { lat: 18.5629, lng: 73.8077 };
const containerStyle = {
  width: "100%",
  height: "90vh"
};

export default function GoogleMapDashboard() {
  const apiKey = "AIzaSyB0PnRwnUN8JjTtmd6lIBEbbPhDBBuqF4E";
  return (
    <div className="dashboard-container d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        {/* Navbar */}
        <Navbar />

        {/* Map Content */}
        <div className="container-fluid border border-2 border-secondary rounded  content p-4">
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position}
              zoom={13}
              
            >
              {/* Marker */}
              <Marker position={position}  />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}
