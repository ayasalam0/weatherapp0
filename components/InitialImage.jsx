import Image from "next/image";
const InitialImage = () => {
  return (
    <div className="   text-center ">
      <div className="block  md:hidden ">
        <Image
          src="/undraw_nature_on_screen_xkli.svg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="hidden  md:block ">
        <Image
          src="/undraw_Autumn_re_rwy0.svg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default InitialImage;
