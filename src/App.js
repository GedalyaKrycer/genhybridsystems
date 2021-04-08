import React from 'react';
import Navbar from "./components/header/Navbar/Navbar";
import Modal from './components/ui/Modal/Modal';
import HeroContainer from "./components/header/HeroContainer/HeroContainer";
import { GHSProvider } from './utils/ContextProvider';
import MailchimpForm from "./components/header/MailchimpForm/MailchimpForm";
import PinnedSideBar from "./components/PinnedSideBar/PinnedSideBar";
import MobileBackToTop from "./components/MobileBackToTop/MobileBackToTop";
import CrisisContainer from "./components/crisis/CrisisContainer/CrisisContainer";
import AboutHeroBanner from "./components/about/AboutHeroBanner/AboutHeroBanner";
import AboutContainer from "./components/about/AboutContainer/AboutContainer";
import VideosContainer from "./components/videos/VideosContainer/VideosContainer";
import ContactContainer from "./components/contact/ContactContainer/ContactContainer";

const App = () => {
  return (
      <>
          <GHSProvider>
              <PinnedSideBar />
              <MobileBackToTop />
              <header id="top">
                <Navbar />
                <HeroContainer />
              </header>
              <main>
                  <CrisisContainer />
                  <AboutHeroBanner />
                  <AboutContainer />
                  <VideosContainer />
                  <ContactContainer />
              </main>
              <Modal><MailchimpForm /></Modal>
          </GHSProvider>
      </>
  );
}

export default App;
