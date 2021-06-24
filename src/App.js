import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import SocialMediaButtons from "./Components/MobileSocialMedia/SocialMediaButtons";
import ProjectSection from "./Components/Projects/ProjectSection";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Styles.css"
import { MobileView } from "react-device-detect";

function App() {
  return (
    <div>
      <head>
        <title>This is Robert's Bio and Portfolio Page</title>
      </head>

      <main className="min-vh-110">
        <div className="d-flex flex-column d-grid gap-3">
          <Header />

          <Banner />
          <MobileView>
            {/*Only show SocialMediaButtons in main on mobile */}
            <SocialMediaButtons />
          </MobileView>
          <ProjectSection />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
