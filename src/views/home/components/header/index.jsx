import MainMenu from "../../../../components/mainMenu";
import HeaderMainImage from "./headerMainImage";

function Header() {
  return (
    <div className="w-full max-w-[900px] flex flex-col ml-auto mr-auto z-10 relative h-[200vh]">
      <div className="flex items-center h-[100vh] w-screen max-w-[900px] left-0 right-0 sticky top-0">
        <MainMenu />
        <HeaderMainImage />
      </div>
    </div>
  );
}

export default Header;
