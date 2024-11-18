import RecentCardLogo from "./Feature-images/logo (1).svg";
import { FaLongArrowAltRight } from "react-icons/fa";

function Feature() {
  return (
    <>
      {/* Our Recent Awards section */}
      <section className="container mx-auto p-5">
        {/* Recent-head */}
        <div className="Recent-head flex flex-col items-center mt-16">
          <h1 className="font-bold text-3xl mb-4">Our Recent Awards</h1>
          <p className="font-semibold text-gray-400 lg:w-2/4 w-full text-center">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        {/* Recent Awards section cards */}
        <div className="Recent-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="Recent-card shadow-custom rounded-2xl p-4 h-[21rem] flex flex-col justify-between">
            <span className="flex gap-x-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#8B5CF6"></circle>
                <path
                  d="M24 14.0968L18.248 13.5747L16 8L13.752 13.5747L8 14.0968L12.36 18.08L11.056 24L16 20.8589L20.944 24L19.632 18.08L24 14.0968Z"
                  fill="white"
                ></path>
              </svg>
              <h5 className="font-bold">4.9 Rating</h5>
            </span>
            <div className="flex mt-2">
              <img
                src="https://app-tailwind.preview.uideck.com/src/images/award/person-1.png"
                alt="Person 1"
                className="w-8 h-8 rounded-full"
              />
              <img
                src="https://app-tailwind.preview.uideck.com/src/images/award/person-2.png"
                alt="Person 2"
                className="w-8 h-8 rounded-full"
              />
              <img
                src="https://app-tailwind.preview.uideck.com/src/images/award/person-3.png"
                alt="Person 3"
                className="w-8 h-8 rounded-full"
              />
              <span className="mt-2 ml-2 font-semibold">+195K raters</span>
            </div>
            <p className="text-slate-400">
              Lorem ipsum dolor sit amet, consec adipiscing elit. In vulputate
              vitae massa eu dapibus ligula.
            </p>
            <button className="text-violet-500 flex items-center font-bold gap-4 hover:underline">
              Rate Our Application
              <FaLongArrowAltRight className="text-2xl pt-1" />
            </button>
            <br />
          </div>

          {/* Card 2 */}
          <div className="Recent-card shadow-custom rounded-2xl p-4 h-[21rem] flex flex-col justify-between">
            <span className="flex gap-x-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#8B5CF6"></circle>
                <path
                  d="M19.3333 10.6666V9.33325H12.6667V10.6666H9.33334V15.3333C9.33334 16.0666 9.93334 16.6666 10.6667 16.6666H12.7333C13 17.9733 14.0267 18.9999 15.3333 19.2666V20.7199C13.3333 21.0266 13.3333 22.6666 13.3333 22.6666H18.6667C18.6667 22.6666 18.6667 21.0266 16.6667 20.7199V19.2666C17.9733 18.9999 19 17.9733 19.2667 16.6666H21.3333C22.0667 16.6666 22.6667 16.0666 22.6667 15.3333V10.6666H19.3333ZM10.6667 15.3333V11.9999H12.6667V15.3333H10.6667ZM21.3333 15.3333H19.3333V11.9999H21.3333V15.3333Z"
                  fill="white"
                ></path>
              </svg>
              <h5 className="font-bold">Awwwards</h5>
            </span>
            <h5 className="font-bold w-3/4">
              Best of trendy design in <span className="text-violet-500">2024</span> on
              Awwwards
            </h5>
            <p className="text-slate-400">
              Lorem ipsum dolor sit amet, consec adipiscing elit. In vulputate
              vitae massa eu dapibus ligula.
            </p>
            <button className="text-violet-500 flex items-center font-bold gap-4 hover:underline">
              Go to Awards
              <FaLongArrowAltRight className="text-2xl pt-1" />
            </button>
            <br />
          </div>

          {/* Card 3 */}
          <div className="Recent-card rounded-2xl p-4 h-[21rem] flex flex-col justify-between shadow-custom">
            <span>
              <img src={RecentCardLogo} alt="Recent Card Logo" className=" h-8" />
            </span>
            <h5 className="font-bold">
              Appwind is the best app for online payments.
            </h5>
            <p className="text-slate-400">
              Lorem ipsum dolor sit amet, consec adipiscing elit. In vulputate
              vitae massa eu dapibus ligula.
            </p>
            <button className="text-violet-500 flex items-center font-bold gap-4 hover:underline">
              Know More
              <FaLongArrowAltRight className="text-2xl pt-1" />
            </button>
            <br />
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
