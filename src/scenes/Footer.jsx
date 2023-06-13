import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-slate-500 pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex font-playfair justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-gray-100">
            Bobby Stone
          </p>
          <p className="font-playfair text-md text-gray-100">
            2022 ION-COMPUTE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
