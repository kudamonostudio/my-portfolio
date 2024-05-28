import AboutImage from "./AboutImage";

function About() {
  const hoverImgs = [
    "https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20788940/pexels-photo-20788940.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/672489/pexels-photo-672489.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  return (
    <div className="w-screen h-[100vh] max-w-[900px] ml-auto mr-auto mt-8">
      <div className="w-[900px] h-[90vh] relative">
        <div className="absolute right-0 h-full w-[350px] top-4">
          <h1 className={`text-[4rem] leading-[1.05] font-thin`}>About me</h1>
          <div className="mt-4 flex flex-col gap-4 text-justify">
            <p className={`text-[1.2rem] leading-[1.05] font-thin`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              placerat elit id velit consequat placerat. Donec nec commodo
              metus. Sed eu convallis nulla. Integer at lobortis justo, sit amet
              porta tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              placerat elit id velit consequat placerat.
            </p>
            <p className={`text-[1.2rem] leading-[1.05] font-thin`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              placerat elit id velit consequat placerat. Donec nec commodo
              metus. Sed eu convallis nulla. Integer at lobortis justo, sit amet
              porta tellus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
        <div className="h-[100vh] flex items-center">
          <div className="w-[510px] gap-1 flex flex-wrap">
            <AboutImage yValue={-1414} hoverImg={hoverImgs[0]} />
            <div className="w-[250px] flex justify-center items-center h-[285px]">
              <img
                src="https://images.pexels.com/photos/7476881/pexels-photo-7476881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="About me image"
                className="h-[230px]"
              />
            </div>
            <AboutImage yValue={-1124} hoverImg={hoverImgs[1]} />
            <AboutImage yValue={-1124} xValue={1470} hoverImg={hoverImgs[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
