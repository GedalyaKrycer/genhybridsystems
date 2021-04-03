import React from 'react';
import Navbar from "./components/header/Navbar/Navbar";
import Modal from './components/ui/Modal/Modal';
import HeroContainer from "./components/header/HeroContainer/HeroContainer";
import { GHSProvider } from './utils/ContextProvider';
import MailchimpForm from "./components/header/MailchimpForm/MailchimpForm";
import PinnedSideBar from "./components/PinnedSideBar/PinnedSideBar";
import MobileBackToTop from "./components/MobileBackToTop/MobileBackToTop";

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

                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p><p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p><p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p><p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p><p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p><p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p><p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p><p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, debitis deleniti deserunt dicta fuga fugiat harum ipsum iure magnam necessitatibus nihil non omnis quas quis sed soluta ullam veniam veritatis.
                  </p>
              </main>
              <Modal><MailchimpForm /></Modal>
          </GHSProvider>
      </>
  );
}

export default App;
