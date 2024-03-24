import Header from "./components/header";
import "./App.css";
import RedisContainer from "./components/redis-container";
import InfoContainer from "./components/info-container";

function App() {
  return (
    <>
      <div className="container h-screen">
        <Header />
        <div className="flex flex-col md:flex-row md:flex">
          <RedisContainer />
          <InfoContainer />
        </div>
      </div>
    </>
  );
}
export default App;
