import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import TvShows from "./components/TvShows";
import MyFooter from "./components/MyFooter";
import MoviesSection from "./components/MoviesSection";

function App() {
  return (
    <div className="netflix-container container-fluid px-5">
      <MyNavbar />
      <TvShows />
      <MoviesSection />
      <MyFooter />
    </div>
  );
}

export default App;
