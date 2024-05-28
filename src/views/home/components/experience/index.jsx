import Job from "./job"

function Experience() {
  return (
    
    <div className="h-screen w-[100vw] flex-col flex">
      <div className="m-auto w-[900px]">
      <h1 className={`text-[4rem] leading-[1.05] font-thin`}>Experience</h1>
      </div>
      <div className="h-[80vh] flex">
      <Job images={["https://images.pexels.com/photos/20788940/pexels-photo-20788940.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"]} texts={["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellusplacerat elit id velit consequat placerat. Donec nec commodometus. Sed eu convallis nulla.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellusplacerat elit id velit consequat placerat. Donec nec commodometus. Sed eu convallis nulla."]} title={"Nimacloud"} />
      <Job images={["https://images.pexels.com/photos/672489/pexels-photo-672489.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "https://images.pexels.com/photos/7476881/pexels-photo-7476881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"]} texts={ ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellusplacerat elit id velit consequat placerat. Donec nec commodometus. Sed eu convallis nulla.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellusplacerat elit id velit consequat placerat. Donec nec commodometus. Sed eu convallis nulla."]} title={"Cencosud"} />
      </div>
    </div>
  )
}

export default Experience