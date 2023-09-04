import { useState, useEffect } from "react";

import Background from "./components/Background";
import TopArea from "./components/TopArea";
import AppLayout from "./components/AppLayout";
import Map from "./components/Map";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState({});
  const [query, setQuery] = useState("");
  const [isp, setIsp] = useState("");

  useEffect(function () {
    async function getCurrentIp() {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      setQuery(data.ip);
      setIpAddress(data.ip);
      console.log(data);
    }

    getCurrentIp();
  }, []);

  useEffect(
    function () {
      async function getAddress() {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_DfZRcqcnHv0sBgjnL7Jdugt0B7wKq&ipAddress=${ipAddress}`
        );
        const data = await res.json();
        setLocation(data.location);
        setMapPosition([data.location.lat, data.location.lng]);
        setIsp(data.isp);
        console.log(data);
      }
      getAddress();
    },
    [ipAddress]
  );

  return (
    <AppLayout>
      <TopArea>
        <Background />
        <div className='absolute top-20 left-1/2 -translate-x-1/2 flex flex-col gap-5 items-center z-50'>
          <Search query={query} setQuery={setQuery} />
          <Results location={location} ipAddress={ipAddress} isp={isp} />
        </div>
      </TopArea>
      <Map mapPosition={mapPosition} />
    </AppLayout>
  );
}

export default App;
