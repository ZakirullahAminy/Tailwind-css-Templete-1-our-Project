import { FaPlay } from "react-icons/fa";
import heroImg from "./Hero-images/pii.png";

function Hero() {
  return (
    <>
      <div>
        <div className="container mx-auto  from-[rgb(255,237,249)] to-[rgb(209,238,254)] animate-moveUp">
          <section className="w-full flex flex-col lg:flex-row h-auto p-5 rounded-3xl bg-gradient-to-r">
            {/* Text div */}
            <div className=" w-full lg:w-1/2 h-auto lg:mt-1 ">
              <h1 className=" md:text-md xs:text-sm lg:text-lgx">
                Tailwind CSS <br />
                Template for{" "}
                <span>
                  Apps <br /> and Software
                </span>
              </h1>
              <p className="text-gray-500 mt-4">
                All in one Tailwind CSS site template for - App and Software
                sites. Comes with all essential components, clean design and
                everything you can expect from a complete app landing page.
              </p>

              {/* Buttons */}
              <div className="flex sm:flex gap-4 mt-8">
                <button className="w-full sm:w-32 h-[50px] sm:h-[60px] text-white bg-[rgb(139,92,246)] rounded-2xl font-semibold">
                  Explore
                </button>
                <a
                  className="no-underline text-black mt-1"
                  href="https://app-tailwind.preview.uideck.com/">
                  <button className="flex justify-center items-center text-center gap-2 font-bold group">
                    <span className="p-3 sm:p-4 bg-[rgb(238,224,253)] rounded-full group-hover:bg-[rgb(138,91,244)] transition-colors duration-300">
                      <FaPlay className="fill-[rgb(138,91,244)] group-hover:fill-white transition-colors duration-300" />
                    </span>
                    <span className="group-hover:text-[rgb(138,91,244)] transition-colors duration-300">
                      Watch here
                    </span>
                  </button>
                </a>
              </div>
            </div>
            {/* Image div */}
            <div className="w-full lg:w-1/2 h-auto mt-10 lg:mt-0 lg:ml-5 flex justify-center">
              <img
                className=" h-auto  max-w-xs  md:max-w-sm md:mt-5"
                src={heroImg}
                alt="Hero"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
