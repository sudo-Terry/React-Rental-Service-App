/*global kakao*/
import React, {useEffect} from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8rem 0rem;
  background-color: #fff;
  z-index: 0;
`;

const MapTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapTitle = styled.h1`
  text-align: center;
  display: block;
  color: #101522;
  width: 300px;
  margin-bottom: 40px;
  padding: 10px 10px;
  border-bottom: 3px solid #101522;
`;

const MapWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Map = styled.div`
  width: 500px;
  height: 400px;

  @media screen and (max-width: 640px) {
    width: 300px;
    height: 250px;
  }
`;

function MapSection(props) {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <MapContainer>
      <MapTitleWrapper data-aos="fade-left">
        <MapTitle>Our Location</MapTitle>
      </MapTitleWrapper>
      <MapWrapper data-aos="fade-right">
        <Map id="map" />
      </MapWrapper>
    </MapContainer>
  );
}

export default MapSection;
