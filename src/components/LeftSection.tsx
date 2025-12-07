import Canva3D from "./Canva3D";

const LeftSection = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 px-10 relative">
      <div className="absolute bottom-[20%] w-full h-full">
        <Canva3D />
      </div>
      <div className="absolute bottom-2 flex flex-col gap-2 justify-center items-center">
        <img
          className="w-15 h-15 rounded-full object-cover border border-1 border-white shadow-[2px]"
          src="/public/shitty.JPEG"
          alt="shitty"
        />
        <h1>duong nguyen</h1>
        <p>useless | jobless | brainless</p>
      </div>
    </div>
  );
};

export default LeftSection;
