import { useState } from "react";
import InitialText from "../../components/initialText";
import Header from "./components/header";

function Home() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="w-screen flex flex-col">
      <InitialText setShowContent={setShowContent} />
      {showContent && (
        <>
          <div className="w-full max-w-[900px] flex flex-col ml-auto mr-auto z-10 relative h-[300vh]">
            <Header />
          </div>
          <div className="bg-red-600 h-[300vh]"></div>
        </>
      )}
    </div>
  );
}

export default Home;
