import "./styles/styles/global.css";
import "./App.css";

import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Sessions      from "./components/Sessions";
import Community     from "./components/Community";
import Gallery       from "./components/Gallery";
import Announcements from "./components/Announcements";
import Footer        from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sessions />
        <Community />
        <Gallery />
        <Announcements />
      </main>
      <Footer />
    </>
  );
}

export default App;
