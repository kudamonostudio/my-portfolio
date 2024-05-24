import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css"

function HeaderMainImage() {
  const testImages = ["7476881", "3656518", "20788940", "672489"];
  const testImage = testImages[3];
  useGSAP(() => {
    gsap.fromTo(
      ".header-image-container",
      { height: "10px" },
      { height: "800px", duration: 1.7, ease: "power2.out" }
    );
  });
  return (
    <div className="header-right w-1/2 flex justify-end items-end h-full max-h-[910px] absolute right-0">
      <div className="overflow-hidden header-image-container absolute bottom-0 w-full">
        <img
          src={`https://images.pexels.com/photos/${testImage}/pexels-photo-${testImage}.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`}
          alt="Profile Photo"
          className="h-[800px] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

export default HeaderMainImage;
