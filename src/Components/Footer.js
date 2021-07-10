import React from "react";

import Logo from "../Assets/logo.svg";
import FacebookIcon from "../Assets/fb_icon.png";
import InstagramIcon from "../Assets/instagram_icon.png";
import WhatsappIcon from "../Assets/whatsapp_icon.png";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import MapIcon from "../Assets/mapicon.svg";

import "../Style/footer.css";

const Footer = () => {
  const icon = new L.Icon({
    iconUrl: MapIcon,
    iconRetinaUrl: MapIcon,
    popupAnchor: [-0, -0],
    iconSize: [50, 50],
  });

  return (
    <React.Fragment>
      <div className="footer flex flex-fd-c flex-jc-c flex-ai-c">
        <div className="footer__wrapper flex flex-fd-r flex-jc-c flex-ai-c">
          <div className="footer__contactus flex flex-fd-c flex-jc-c">
            <img
              src={Logo}
              alt="Arkandina"
              className="footer__contactus__logo"
            />
            <p>
              <strong>Office & Research Lab</strong>
            </p>
            <p>Jalan Cisitu Indah VI no 30 Kota Bandung - Jawa Barat</p>
            <div className="footer__contactus__socialmedia flex flex-fd-r flex-jc-fe">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={InstagramIcon} alt="Instagram" />
              <img src={WhatsappIcon} alt="Whatsapp" />
            </div>
          </div>
          <div className="footer__map flex flex-jc-c flex-ai-c">
            <MapContainer
              className="map"
              center={[-6.8736121, 107.6107865]}
              zoom={17}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-6.8736121, 107.6107865]} icon={icon} />
            </MapContainer>
          </div>
        </div>
        <div className="footer__bottom flex flex-ai-c">
          <p>© 2021 ARKANDINA</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
