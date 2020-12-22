import React from "react";
import MainContent from "./main/MainContent";
import NavigationLinks from "./navigation/NavigationLinks";

const App = () => {
  return (
    <>
      <header>
        <NavigationLinks />
      </header>
      <main>
        <MainContent />
      </main>
    </>
  );
};

export default App;
