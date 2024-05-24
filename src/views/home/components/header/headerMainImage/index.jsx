import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";

function HeaderMainImage() {
  const testImages = ["7476881", "3656518", "20788940", "672489"];
  const testImage = testImages[3];
  useGSAP(() => {
    gsap.fromTo(
      ".header-image-container",
      { height: "1vh" },
      { height: "90vh", duration: 1.7, ease: "power2.out" }
    );
  });
  return (
    <div className="header-right w-1/2 flex justify-end items-end absolute h-[100vh] right-0">
      <div className="header-image-container w-full absolute overflow-hidden bottom">
        <img
          src={`https://images.pexels.com/photos/${testImage}/pexels-photo-${testImage}.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`}
          alt="Profile Photo"
          className="max-h-[35rem] h-[35rem] absolute bottom-0 right-0 header-image"
        />
      </div>
    </div>
  );
}

export default HeaderMainImage;
