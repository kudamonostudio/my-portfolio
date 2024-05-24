import React, { useState } from "react";
import InitialText from "../../components/initialText";
import Header from "./components/header";

function Home() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col">
      <InitialText setShowContent={setShowContent} />
      {showContent && (
        <div className="w-full h-full max-w-7xl flex ml-auto mr-auto z-10">
        <Header />
        </div>
      )}
    </div>
  );
}

export default Home;
