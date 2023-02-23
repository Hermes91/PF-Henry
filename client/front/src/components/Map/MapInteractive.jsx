import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import s from "./MapInteractive.module.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import logo from './img/logo.png'

const MapInteractive = ({ positionDetail }) => {
  const MarkerIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  const [mapCenter, setMapCenter] = useState(
    positionDetail ? positionDetail : ["45.5187857791056", "-122.6251855889669"] 
  );


 return (
    <div className={s.map_container}>
      <MapContainer className={s.map} center={mapCenter} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
       
            <Marker position={mapCenter} icon={MarkerIcon}>
              <Popup position={mapCenter}>
                <div className={s.navlink}>
                  <h3 className={s.title}>
                    Vivero Henry
                  </h3>
                  {
                   
                  }
                  <img
                    className={s.pictureHome}
                    src={logo}
                    alt=""
                  />
                </div>
              </Popup>
            </Marker>
          
        
      </MapContainer>
      </div>
    );
};
export default MapInteractive;
