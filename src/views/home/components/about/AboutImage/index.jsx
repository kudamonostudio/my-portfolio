function AboutImage({ xValue = 0, yValue = 0, hoverImg }) {
  const style = {
    backgroundPosition: `${-xValue}px ${-yValue}px`,
  };

  return (
    <div
      className="w-[250px] h-[285px] bg-blue-500 bg-[url('https://images.pexels.com/photos/7476881/pexels-photo-7476881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')]"
      style={style}
    >
      {hoverImg && (
        <img
          src={hoverImg}
          alt="About me image"
          className="w-full object-cover h-full opacity-0 hover:opacity-100 transition-opacity duration-700"
        />
      )}
    </div>
  );
}

export default AboutImage;
