/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function Map({ mapPosition }) {
  return (
    <div className='relative z-10 h-[calc(100vh-300px)] sm:h-[calc(100vh-280px)]'>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        className='h-full w-full absolute -z-20'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <CenterMap mapPosition={mapPosition} />
      </MapContainer>
    </div>
  );
}

function CenterMap({ mapPosition }) {
  const map = useMap();
  map.setView(mapPosition);
}

export default Map;
