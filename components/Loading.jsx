import Image from "next/image";
const Loading = () => {
  return (
    <div
      
      className="p-4 top-64  md:top-96   absolute   w-screen   text-l font-bold  text-green-50  text-center md:p-4 "
       
    >
      <Image
      data-aos="fade-up"
        src="https://i.giphy.com/media/6vj5quVNRhoQw/giphy.webp"
        alt="universe"
        width={450}
        height={250}
        className="rounded-xl  "
      />
      <h1 data-aos="fade-up" > Please Enter Your Country Name ...</h1>
    </div>
  );
};

export default Loading;
