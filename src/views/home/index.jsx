import { useState } from "react";
import InitialText from "../../components/initialText";
import Header from "./components/header";
import About from "./components/about";

function Home() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="w-screen flex flex-col">
      <InitialText setShowContent={setShowContent} />
      {showContent && (
        <>
          <Header />
          <About />
        </>
      )}
    </div>
  );
}

export default Home;
