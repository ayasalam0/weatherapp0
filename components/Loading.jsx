import Image from "next/image";
const Loading = () => {
  return (
    <div
      data-aos="fade-up"
      className="p-4 top-64  md:top-96   absolute   w-screen  font-serif text-xl font-bold  text-green-50  text-center md:p-4 "
    >
      <Image
        src="https://i.giphy.com/media/6vj5quVNRhoQw/giphy.webp"
        alt="universe"
        width={450}
        height={250}
        className="rounded-xl  "
      />
      <h1> Please Enter Your Country Name ...</h1>
    </div>
  );
};

export default Loading;
