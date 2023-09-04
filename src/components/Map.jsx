import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <div className='h-[calc(100vh-300px)] sm:h-[calc(100vh-280px)]'>
      <MapContainer
        center={[40, 0]}
        zoom={13}
        scrollWheelZoom={false}
        className='h-full'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[40, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
