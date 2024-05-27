function About() {
  return (
    <div className="w-screen h-[100vh] max-w-[900px] ml-auto mr-auto mt-8">
      <div className="w-[900px] h-[90vh] relative">
        <div className="absolute right-0 h-[43vh] w-[530px]">
          <h1 className={`text-[4rem] leading-[1.05] font-thin`}>About me</h1>
          <p className={`text-[1.2rem] leading-[1.05] font-thin`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            placerat elit id velit consequat placerat. Donec nec commodo metus.
            Sed eu convallis nulla. Integer at lobortis justo, sit amet porta
            tellus. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            placerat elit id velit consequat placerat.
          </p>
        </div>
        <div className="w-[510px] h-[90vh] flex flex-wrap justify-between">
          <div className="w-[250px] h-[43vh] bg-blue-500 bg-[url('https://images.pexels.com/photos/7476881/pexels-photo-7476881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')]"></div>
          <div className="w-[250px] h-[43vh] "></div>
          <div
            className="w-[250px] h-[43vh] bg-blue-700 bg-[url('https://images.pexels.com/photos/7476881/pexels-photo-7476881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')]"
            style={{ backgroundPositionY: "-1124px" }}
          ></div>
          <div
            className="w-[250px] h-[43vh] bg-blue-800 bg-[url('https://images.pexels.com/photos/7476881/pexels-photo-7476881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')]"
            style={{
              backgroundPositionY: "-1124px",
              backgroundPositionX: "1470px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
