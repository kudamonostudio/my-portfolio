function Projects() {
  const projects = [
    {
      title: "The Doggies NFT Collection",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/05/663b49fe2af63976637895.jpg",
    },
    {
      title: "Aleli Accesorios Ecommerce",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/05/66432d792e456667693270.jpg",
    },
    {
      title: "LoveLearn: Free courses website",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/04/662397afe21d5447742678.jpg",
    },
    {
      title: "Bliss: Online Courses Platform",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/04/6630fdabe2fd1217759071.jpg",
    },
    {
      title: "Della Pietra: Multi-art Space",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/05/6634f66c33573771657755.jpg",
    },
    {
      title: "Blackjack Casino",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/05/66478e461039e862361434.jpg",
    },
    {
      title: "To-do list app",
      image:
        "https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/02/65d62d0d73a93134316445.jpg",
    },
    {
      title: "Tatto Studio",
      image:
        "https://assets.awwwards.com/awards/submissions/2024/05/6641ba3139396603134807.jpg",
    },
  ];

  const imgWidth = (index) =>
    index === 2 || index === 7 ? "w-[40vw]" : "w-[19vw]";

  return (
    <div className="w-screen h-[100vh] max-w-[1920px] flex flex-col justify-between">
      <div className="h-[23vh] flex flex-col ml-auto mr-auto w-screen max-w-[900px] justify-center">
        <h1 className={`text-[4rem] leading-[1.05] font-thin mb-4`}>
          Selected Works
        </h1>
        <p className="leading-[1.05] font-thin text-[1.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, illo
        </p>
      </div>
      <div className="flex flex-wrap gap-2 projects-top">
        {projects.map((project, index) => {
          return (
            index < 4 && (
              <img
                src={project.image}
                alt={`Imgen del proyecto ${project.title}`}
                key={project.title}
                className={`${imgWidth(index)} h-[38vh] object-cover`}
              />
            )
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 projects-bottom">
        {projects.map((project, index) => {
          return (
            index > 3 && (
              <img
                src={project.image}
                alt={`Imgen del proyecto ${project.title}`}
                key={project.title}
                className={`${imgWidth(index)} h-[38vh] object-cover`}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
