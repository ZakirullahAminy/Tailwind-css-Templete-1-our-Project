import { useForm } from "react-hook-form";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const schema = z.object({
  name: z
    .string()
    .min(1, { message: "User Name is required" })
    .max(10, { message: "User Name cannot exceed 10 characters" }),

  lastName: z
    .string()
    .min(1, { message: "last name is required" })
    .max(10, { message: "last name  cannot exceed 10 characters" }),

  email: z
    .string()
    .email({ message: "Email must have @" })
    .min(1, { message: "Email must be at least 8 characters" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(14, { message: "Must be a valid mobile number" }),
  textarea: z.string(),
});

function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
       <section className="container">
        <br /><br /> <br />
      <h1 className="text-center">Need Any Help?</h1>
      <p className="text-center text-gray-500">
        There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form.
      </p>
      <br /><br />

      <div className="flex justify-center mt-10">
        <div className="card p-10 xl:w-3/4 lg:w-3/4 sm:w-full">
          <form className="flex flex-col justify-between flex-wrap font-bold" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between flex-wrap">
              {/* User Name */}
              <div className="mb-3 flex flex-col">
                <label>User Name</label>
                <input
                  className="border xl:w-[21rem] lg:w-[19rem] h-12 p-7 mt-4 rounded-xl"
                  type="text"
                  placeholder="Enter UserName"
                  {...register('name', {
                    required: 'User Name is required',
                    minLength: {
                      value: 3,
                      message: 'User Name must be at least 3 characters',
                    },
                  })}
                />
                {errors.name && touchedFields.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="mb-3 flex flex-col">
                <label>Last Name</label>
                <input
                  className="border xl:w-[21rem] lg:w-[19rem] h-12 p-7 mt-4 rounded-xl"
                  type="text"
                  placeholder="Enter Last Name"
                  {...register('lastName', {
                    required: 'Last Name is required',
                    minLength: {
                      value: 3,
                      message: 'Last Name must be at least 3 characters',
                    },
                  })}
                />
                {errors.lastName && touchedFields.lastName && (
                  <p className="text-danger">{errors.lastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-3 flex flex-col">
                <label>Email</label>
                <input
                  className="border xl:w-[21rem] lg:w-[19rem] h-12 p-7 mt-4 rounded-xl"
                  type="email"
                  placeholder="Enter Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
                {errors.email && touchedFields.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="mb-3 flex flex-col">
                <label>Phone Number</label>
                <input
                  className="border xl:w-[21rem] lg:w-[19rem] h-12 p-7 mt-4 rounded-xl"
                  type="number"
                  placeholder="Enter your phone number"
                  {...register('phoneNumber', {
                    required: 'Phone Number is required',
                    minLength: {
                      value: 10,
                      message: 'Phone Number must be at least 10 digits',
                    },
                  })}
                />
                {errors.phoneNumber && touchedFields.phoneNumber && (
                  <p className="text-danger">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label htmlFor="">What are you looking for?</label>
              <textarea
                className="border w-full p-4 mt-4 rounded-xl"
                placeholder="Enter your message"
                rows={4}
                cols={20}
                {...register('textarea', {
                  required: 'This field is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters',
                  },
                })}
              />
              {errors.textarea && touchedFields.textarea && (
                <p className="text-danger">{errors.textarea.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                className="text-white py-3 w-60 justify-center rounded-2xl bg-violet-500 mt-5 font-bold"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

      {/* footer */}





      <section className="bg-[rgb(228,242,254)] mt-20">
        <section className="container">
          {/* foooter */}
          <div className="footer flex justify-between flex-wrap gap-5 pt-20 pb-14">
            {/* footer sections */}
            {/* section-one */}
            <div className="section-one flex flex-col justify-between w-[20rem]">
              <img className="h-10 items-start" src="https://app-tailwind.preview.uideck.com/src/images/logo/logo.svg" alt="" />
              <p className="font-semibold text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                feugiat et sem at Etiam in lobortis dui. Praesent .
              </p>
              <span className="flex justify-between w-36 ml-20">
                {/* <img className="h-8 w-8 rounded-full" src={faceBook} alt="" /> */}
                <FaFacebookF className="text-gray-400 hover:text-[rgb(139,92,246)]"/>
                <FaTwitter className="text-gray-400 hover:text-[rgb(139,92,246)]"/>
                <IoLogoInstagram className="text-gray-400 hover:text-[rgb(139,92,246)]"/>
                <FaLinkedin className="text-gray-400 hover:text-[rgb(139,92,246)]"/>
                {/* <img className="h-8 w-8 rounded-full" src={instagram} alt="" />
                <img className="h-8 w-8 rounded-full" src={linding} alt="" />
                <img className="h-8 w-8 rounded-full" src={twitter} alt="" /> */}
              </span>
            </div>
            {/* section-one end */}
            {/* section-two */}
            <ul className="section-one flex flex-col justify-between w-[10rem]">
              <li>
                <strong>Quick Links</strong>
              </li>
              <li>
                <a className="no-underline font-semibold text-gray-400" href="#">
                  Our Blog
                </a>
              </li>
              <li>
                <a className="no-underline font-semibold text-gray-400" href="#">
                  Check Pricing
                </a>
              </li>
              <li>
                <a className="no-underline font-semibold text-gray-400" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="no-underline font-semibold text-gray-400" href="#">
                  Help & Support
                </a>
              </li>
            </ul>

            {/* section-two end*/}
            {/* section-three*/}

            <ul className="section-one flex flex-col justify-between w-[20rem]">
              <li>
                <strong>App Information</strong>
              </li>
              <li>
                <a className="no-underline font-semibold text-gray-400" href="#">
                  Style Guideline
                </a>
              </li>
              <li>
                <a className="no-underline font-bsemiold text-gray-400" href="#">
                  Getting Started{" "}
                </a>
              </li>
              <li>
                <a className="no-underline font-semibold text-gray-400" href="#">
                  Changelog
                </a>
              </li>
              <li>
                <a className="no-underline font-semibold text-gray-400" href="#">
                  Update Details
                </a>
              </li>
            </ul>
            {/* section-three end*/}
            {/* section-four*/}
            <div className="section-one flex flex-col justify-between gap-y-12 w-[20rem]">
              <strong>Join Our Newsletter</strong>
              <p className="font-semibold text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla
                feugiat
              </p>
              <span className="flex justify-between">
                <input
                  className="border  h-12 p-7 mt-4 rounded-xl"
                  type="email "
                  placeholder="Enter Your Email"
                />
              </span>
            </div>
            {/* section-four end*/}
          </div>
        </section>
      </section>
      <div className="flex justify-center h-20 items-center">
        <p className="font-semibold text-gray-400">Copyright by Appwind 2024, All rights reserved.</p>
      </div>
    </>
  );
}
export default FormValidation;
