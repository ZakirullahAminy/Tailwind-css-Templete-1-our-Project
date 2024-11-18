// import aboutImageOne from "./assets/about-image-1.svg";
// import aboutImageOne from "./About-Images/about-image-1.svg"
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import aboutImageTwo from "./About-Images/about-image-2.svg";
import { FaHandsClapping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import AboutImgOne from "./About-Images/cta-image-1.svg";
import AboutImgTwo from "./About-Images/cta-image-2.svg";

// import DownloadImgCardOne from "./assets/cta-image-1.svg";
// import DownloadImgCardTow from "./assets/cta-image-2.svg";
function About() {
  return (
    <>
      {/* About  Application section*/}

      <section id="about" className="container">
        {/* About  Application 1*/}
        <div className="about flex flex-wrap mt-32">
          <div className="left lg:w-1/2 sm:w-full flex justify-center">
            {/* <img src={aboutImageOne} alt="about Image One" /> */}
            <img src="https://app-tailwind.preview.uideck.com/src/images/about/about-image-1.svg" alt="" />
          </div>
          <div className="right lg:w-1/2 sm:w-full mt-20">
            <p className="font-bold text-violet-500">About Application</p>
            <h1 className="font-bold lg:w-[28rem] sm:w-[25]">
              Instant Payment Transfer SavesYou Time
            </h1>
            <p className="mt-8 font-bold text-slate-500 mb-24">
              Schedule your posts for times when your audience is most active.
              Choose from our best-time predictions, or create your own
              publishing schedule.
            </p>
            {/* <button className="text-violet-500 flex font-bold">
              Know More About App
              <svg width="28" height="28" viewBox="0 0 28 28" className="ff">
                <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
              </svg>
            </button> */}

            <button className="text-violet-500 flex items-center font-bold gap-4 hover:underline">
            Know More About App
              <FaLongArrowAltRight className="text-2xl pt-1" />
            </button>
          </div>
        </div>
        {/* About  Application 2*/}
        <div className="about flex  flex-wrap mb-20 gap-y-8 mt-20">
          <div className="right lg:w-1/2 sm:w-full mt-20 ">
            <p className="font-bold text-violet-500">Easy to Manage Appwind</p>
            <h1 className="font-bold lg:w-[28rem] sm:w-[25]">
              Manage your online wallet with Appwind.
            </h1>
            <p className="mt-8 text-lg text-gray-400 mb-24">
              Schedule your posts for times when your audience is most <br /> active.
              Choose from our best-time predictions, or create <br /> your own
              publishing schedule.
            </p>
            {/* <button className="text-violet-500 flex font-bold">
              Get the App Now!
              <svg width="28" height="28" viewBox="0 0 28 28" className="ff">
                <path d="M16.3333 19.7633V15.0967H5.92666L5.89166 12.7517H16.3333V8.09668L22.1667 13.93L16.3333 19.7633Z"></path>
              </svg>
            </button> */}
            <button className="text-violet-500 mb-10 flex items-center font-bold gap-4 hover:underline">
            Get the App Now!
              <FaLongArrowAltRight className="text-2xl pt-1" />
            </button>
          </div>
          <div className="left lg:w-1/2 sm:w-full  flex justify-center">
            <img src={aboutImageTwo} alt="about Image One" />
          </div>
        </div>
      </section>




      {/* How it Works? section */}
      <section className="container">
        <div className="Works-head flex flex-col justify-between items-center">
          <h1 className="font-bold">How it Works? </h1>
          <p className="font-semibold text-gray-400 lg:w-2/4 sm:w-full text-center">
            There are many variations of passages of Lorem Ipsum available <br /> but
            the majority have suffered alteration in some form.
          </p>
        </div>
        {/*How it Works? section cards  */}
        <div className="works-cards flex justify-between flex-wrap gap-2 items-center mt-14">
          {/*How it Works? section card 1 */}
          <div className="works-card lg:w-[19rem] sm:w-[21rem]  xs:w-[100%] xl:w-[22rem] flex flex-col justify-center items-center text-center gap-y-3 ">
            <span className="group bg-[rgb(249,247,255)] p-3 rounded-2xl hover:bg-[rgb(139,92,246)]">
              <MdOutlineFileDownload className="text-5xl text-[rgb(139,92,246)] group-hover:text-white "/>
            </span>
            <h4 className="font-bold">Download for Free</h4>
            <p className="font-semibold text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </p>
          </div>
          {/*How it Works? section card 2 */}
          <div className="works-card lg:w-[19rem] sm:w-[21rem]  xs:w-[100%] xl:w-[22rem]  flex flex-col justify-center items-center text-center gap-y-3 ">
         
            <span className="group bg-[rgb(249,247,255)] p-4 rounded-2xl hover:bg-[rgb(139,92,246)]">
              <FaUserAlt  className="text-3xl text-[rgb(139,92,246)] group-hover:text-white "/>
            </span>
            <h4 className="font-bold">Open an Account</h4>
            <p className="font-semibold text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </p>
          </div>
          {/*How it Works? section card 3 */}
          <div className="works-card lg:w-[19rem] sm:w-[21rem]  xs:w-[100%] xl:w-[22rem] flex flex-col justify-center items-center text-center gap-y-3">
          <span className="group bg-[rgb(249,247,255)] p-4 rounded-2xl hover:bg-[rgb(139,92,246)]">
              <FaHandsClapping  className="text-3xl text-[rgb(139,92,246)] group-hover:text-white "/>
            </span>
            <h4 className="font-bold">Enjoy our App</h4>
            <p className="font-semibold text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lectus non
              ipsum.
            </p>
          </div>
        </div>
        {/* Download Now!  card*/}
        <div className="Download-card flex flex-wrap justify-between pt-8 pl-8 pr-8 my-20 rounded-2xl bg-gradient-to-r from-[rgb(255,237,249)] to-[rgb(209,238,254)] animate-moveUp">
          <div className="right lg:w-[48%] sm:w-9/12 mt- ">
            <p className="font-bold text-violet-500">Download Now!</p>
            <h1 className="font-bold lg:w-[28rem] sm:w-[25]">
              Download our mobile application.
            </h1>
            <p className="mt-8 font-bold text-slate-500 ">
              Download Appwind mobile banking app for IOS & Android to manage
              your online money.
            </p>
            <div className="flex gap-x-5">
              <button className="text-white rounded-2xl bg-violet-500 py-3 px-8 flex items-center mb-24 font-bold">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 28.9958V4.9125C4 4.07667 4.48167 3.34 5.19 3L19.1442 16.9542L5.19 30.9083C4.48167 30.5542 4 29.8317 4 28.9958ZM23.5642 21.3742L8.32083 30.1858L20.3483 18.1583L23.5642 21.3742ZM28.31 15.2683C28.7917 15.6508 29.1458 16.2458 29.1458 16.9542C29.1458 17.6625 28.8342 18.2292 28.3383 18.6258L25.0942 20.4958L21.5525 16.9542L25.0942 13.4125L28.31 15.2683ZM8.32083 3.7225L23.5642 12.5342L20.3483 15.75L8.32083 3.7225Z"
                    fill="white"></path>
                </svg>
                Google Play
              </button>
              <button className="text-white rounded-2xl bg-gray-900 py-3 px-8 flex items-center mb-24 font-bold">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.5058 27.625C25.33 29.3817 24.0833 31.0958 22.185 31.1242C20.2866 31.1667 19.6775 30.005 17.5241 30.005C15.3566 30.005 14.6908 31.0958 12.8916 31.1667C11.0358 31.2375 9.6333 29.2967 8.4433 27.5825C6.0208 24.0833 4.16497 17.6375 6.6583 13.3025C7.8908 11.1492 10.1008 9.78916 12.495 9.74666C14.3083 9.71833 16.0366 10.9792 17.1558 10.9792C18.2608 10.9792 20.3575 9.46333 22.5533 9.68999C23.4741 9.73249 26.0525 10.0583 27.71 12.495C27.5825 12.58 24.6358 14.3083 24.6641 17.8925C24.7066 22.1708 28.4183 23.6017 28.4608 23.6158C28.4183 23.715 27.8658 25.6558 26.5058 27.625ZM18.4166 4.95833C19.4508 3.78249 21.165 2.88999 22.5816 2.83333C22.7658 4.49083 22.1 6.16249 21.1083 7.35249C20.1308 8.55666 18.5158 9.49166 16.9291 9.36416C16.7166 7.73499 17.51 6.03499 18.4166 4.95833Z"
                    fill="currentColor"></path>
                </svg>
                App Store
              </button>
            </div>
          </div>
          <div className="left lg:w-[48%] sm:w-full flex  justify-center gap-4">
  <img
    className="w-1/2 sm:w-[45%] md:w-[48%] lg:w-[48%] "
    src={AboutImgOne}
    alt="About Image One"
  />
  <img
    className="w-1/2 sm:w-[45%] md:w-[48%] lg:w-[48%] "
    src={AboutImgTwo}
    alt="About Image Two"
  />
</div>

        </div>
      </section>
    

    </>
  );
}
export default About;
