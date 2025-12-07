const Footer = () => {
  return (
    <div
      className="
          w-full
          flex flex-col md:flex-row
          justify-between items-center
          bg-black
          px-6
    "
    >
      <p className="text-white">nguyenduong1477@gmail.com</p>
      <p className="text-white">All rights reserved</p>
      <div className="flex">
        <p className="text-white">github</p>
        <p className="text-white">Linkedin</p>
        <p className="text-white">instagram</p>
      </div>
    </div>
  );
};

export default Footer;
