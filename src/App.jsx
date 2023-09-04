import Background from "./components/Background";
import TopArea from "./components/TopArea";
import AppLayout from "./components/AppLayout";
import Map from "./components/Map";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  return (
    <AppLayout>
      <TopArea>
        <Background />
        <div className='absolute top-20 left-1/2 -translate-x-1/2 flex flex-col gap-5 items-center'>
          <Search />
          <Results />
        </div>
      </TopArea>
      <Map />
    </AppLayout>
  );
}

export default App;
