import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function HeroSection() {
  return (
    <div className="bg-yellow md:h-[600px] sm:h-[500px] pt-10 py-5 sm:py-0 px-20 md:px-10">
      <div className="flex align-center  w-full h-full">
        <div className="flex-1 flex flex-col justify-center align-left">
          <h1 className="font-bold tracking-tight text-black-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Experience the Future of Technology Today!
          </h1>
          <p className="mt-6 font-normal sm:text-sm md:text-xl leading-6 text-black-600">
            Unleash your inner tech enthusiast with our wide range of gadgets.
            Become a pro expert within a moment.
          </p>
          <div className="mt-10 flex items-center justify-right gap-x-6">
            {/* Customized buttons to pass props for title and bgColor. If prop 'transparent' - no bgcolor, if no transparent - bg-blue. it also adjust text color to white/blue */}
            <Link to="/Contacts">
              <button className="btn-transparent">Contact us</button>
            </Link>
            <Link to="/Products">
             <button className="btn-blue">Shop now</button>
            </Link>
          </div>
        </div>
        <div className="flex-1 sm:flex hidden justify-end ">
          <img
            className="object-contain object-bottom h-full"
            src={hero}
            alt="Hero pic"
          />
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
