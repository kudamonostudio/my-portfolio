// function Job({images, texts}) {
//   return (
//     <div className="w-1/2 flex">
//       {images.map((image, index) => {
//         <div className="w-1/2 flex">
//           <img src={image} alt="Job Image" className="w-1/2" />
//           <p>{texts[index]}</p>
//         </div>;
//       })}
//     </div>
//   );
// }

function Job({ images, texts, title }) {
  return (
    <div className="flex flex-wrap">
      {images.map((image, index) => {
        return (
          <div key={index} className={`flex h-[40vh] ${index === 1 ? 'flex-row-reverse' : ''} items-center justify-center`}>
            <div className="p-8 w-[25vw] flex flex-col gap-4">
              {title && index === 0 && <h1 className={`text-[2rem] leading-[1.05] font-light`}>{ title }</h1>}
            <p className="text-[1.2rem] leading-[1.05] font-thin">{texts[index]}</p>
            </div>
            <img src={image} alt="Job Image" className="w-[25vw] h-full object-cover" />
          </div>
        );
      })}
    </div>
  );
}

export default Job;
